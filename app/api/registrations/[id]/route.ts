import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Event'
  },
  eventTitle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: '',
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  }
}, {
  timestamps: true,
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    
    const registration = await Registration.findByIdAndUpdate(
      id, 
      { status: body.status }, 
      { new: true, runValidators: true }
    );
    
    if (!registration) {
      return NextResponse.json({ success: false, error: 'Registration not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: registration });
  } catch (error) {
    console.error('PUT registration error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update registration' }, { status: 500 });
  }
}