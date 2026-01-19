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

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const { eventId, eventTitle, name, email, phone, message } = body;
    
    // Validate required fields
    if (!eventId || !eventTitle || !name || !email || !phone) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Check if user already registered for this event
    const existingRegistration = await Registration.findOne({
      eventId,
      email
    });

    if (existingRegistration) {
      return NextResponse.json({ 
        success: false, 
        error: 'You have already registered for this event' 
      }, { status: 400 });
    }

    // Create registration
    const registration = await Registration.create({
      eventId,
      eventTitle,
      name,
      email,
      phone,
      message: message || '',
      status: 'pending'
    });

    // Update event participant count
    const Event = mongoose.models.Event || mongoose.model('Event', new mongoose.Schema({}, { strict: false }));
    await Event.findByIdAndUpdate(eventId, {
      $inc: { registeredParticipants: 1 }
    });

    return NextResponse.json({ 
      success: true, 
      data: registration,
      message: 'Registration successful! We will contact you soon.' 
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Registration failed. Please try again.' 
    }, { status: 500 });
  }
}