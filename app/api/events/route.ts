import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/models/Event';

export async function GET() {
  try {
    console.log('Connecting to database...');
    await dbConnect();
    console.log('Database connected, fetching events...');
    
    // Try different collection names
    const events = await Event.find({}).sort({ createdAt: -1 });
    console.log('Found events:', events.length);
    
    // Also try to get all collections to debug
    const mongoose = require('mongoose');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    return NextResponse.json({ success: true, data: events });
  } catch (error) {
    console.error('GET events error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.description || !body.type || !body.date || !body.location) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }
    
    const event = await Event.create({
      ...body,
      price: body.price || 0,
      registeredParticipants: body.registeredParticipants || 0,
      maxParticipants: body.maxParticipants || 0
    });
    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) {
    console.error('POST event error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create event' }, { status: 500 });
  }
}