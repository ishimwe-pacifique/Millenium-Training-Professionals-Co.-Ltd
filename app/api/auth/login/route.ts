import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Check environment admin credentials first
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        { id: 'env-admin', email: process.env.ADMIN_EMAIL },
        process.env.NEXTAUTH_SECRET || 'fallback-secret',
        { expiresIn: '24h' }
      );

      const response = NextResponse.json({ 
        success: true, 
        data: { 
          admin: { id: 'env-admin', email: process.env.ADMIN_EMAIL, name: 'Admin User' },
          token 
        } 
      });

      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 86400
      });

      return response;
    }

    // Fallback to database check
    await dbConnect();
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.NEXTAUTH_SECRET!,
      { expiresIn: '24h' }
    );

    const response = NextResponse.json({ 
      success: true, 
      data: { 
        admin: { id: admin._id, email: admin.email, name: admin.name },
        token 
      } 
    });

    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 });
  }
}