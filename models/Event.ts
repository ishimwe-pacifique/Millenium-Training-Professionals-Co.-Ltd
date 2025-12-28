import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['training', 'event'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming',
  },
  price: {
    type: Number,
    default: 0,
  },
  maxParticipants: {
    type: Number,
    default: 0,
  },
  registeredParticipants: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);