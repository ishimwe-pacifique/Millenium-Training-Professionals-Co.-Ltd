const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://pacishimwe150_db_user:CXalry2RVFWaWix0@cluster0.lhfbogk.mongodb.net/?appName=Cluster0';

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

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);

const sampleEvents = [
  {
    title: "Advanced Project Management Workshop",
    description: "Master the art of project management with our comprehensive workshop covering agile methodologies, risk management, and team leadership strategies.",
    type: "training",
    date: new Date('2024-02-15T09:00:00Z'),
    location: "Kigali Convention Centre, Rwanda",
    image: "/project-management-team-planning-in-kigali-office-.jpg",
    status: "upcoming",
    price: 75,
    maxParticipants: 50,
    registeredParticipants: 23
  },
  {
    title: "Digital Marketing Masterclass",
    description: "Learn cutting-edge digital marketing strategies including social media marketing, SEO, content creation, and analytics to grow your business online.",
    type: "training",
    date: new Date('2024-02-20T14:00:00Z'),
    location: "Norrsken House Kigali",
    image: "/professional-training-conference-in-rwanda-with-di.jpg",
    status: "upcoming",
    price: 120,
    maxParticipants: 30,
    registeredParticipants: 18
  },
  {
    title: "Community Leadership Summit",
    description: "Join community leaders and change-makers for a day of networking, knowledge sharing, and collaborative planning for community development initiatives.",
    type: "event",
    date: new Date('2024-02-25T08:30:00Z'),
    location: "Intare Conference Arena",
    image: "/corporate-team-building-event-rwanda-professional-.jpg",
    status: "upcoming",
    price: 0,
    maxParticipants: 100,
    registeredParticipants: 67
  },
  {
    title: "Entrepreneurship Bootcamp",
    description: "A 3-day intensive program for aspiring entrepreneurs covering business planning, funding strategies, market research, and startup essentials.",
    type: "training",
    date: new Date('2024-03-01T09:00:00Z'),
    location: "Impact Hub Kigali",
    image: "/business-consulting-meeting-in-rwanda-corporate-of.jpg",
    status: "upcoming",
    price: 250,
    maxParticipants: 25,
    registeredParticipants: 12
  },
  {
    title: "Family Financial Wellness Workshop",
    description: "Learn practical strategies for family budgeting, savings, investment planning, and building generational wealth in our community-focused workshop.",
    type: "event",
    date: new Date('2024-03-05T15:00:00Z'),
    location: "Millennium Training Center",
    image: "/diverse-team-collaborating-in-rwanda-training-sess.jpg",
    status: "upcoming",
    price: 25,
    maxParticipants: 75,
    registeredParticipants: 34
  },
  {
    title: "Free Career Development Seminar",
    description: "Discover your career potential with our free seminar covering resume writing, interview skills, and professional networking strategies.",
    type: "training",
    date: new Date('2024-03-10T10:00:00Z'),
    location: "University of Rwanda - Kigali Campus",
    image: "/professional-team-meeting-in-rwanda-office-confere.jpg",
    status: "upcoming",
    price: 0,
    maxParticipants: 200,
    registeredParticipants: 89
  }
];

async function seedEvents() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing events
    await Event.deleteMany({});
    console.log('Cleared existing events');

    // Insert sample events
    await Event.insertMany(sampleEvents);
    console.log(`Seeded ${sampleEvents.length} sample events with images and pricing`);

    console.log('Sample events created:');
    sampleEvents.forEach((event, index) => {
      const priceDisplay = event.price === 0 ? 'FREE' : `$${event.price}`;
      console.log(`${index + 1}. ${event.title} (${event.type}) - ${priceDisplay} - ${event.registeredParticipants}/${event.maxParticipants} participants`);
    });

  } catch (error) {
    console.error('Error seeding events:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedEvents();