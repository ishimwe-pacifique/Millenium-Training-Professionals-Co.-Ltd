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

export async function GET() {
  try {
    await dbConnect();
    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    console.error('GET registrations error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch registrations' }, { status: 500 });
  }
}