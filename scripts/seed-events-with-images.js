const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

const sampleEvents = [
  {
    title: "Digital Marketing Mastery Workshop",
    description: "Learn the latest digital marketing strategies, social media management, and content creation techniques to grow your business online.",
    type: "training",
    date: new Date("2024-02-15T09:00:00Z"),
    location: "Norrsken House Kigali",
    image: "/images/norrsken-kigali-house-mass-design-group_1.jpg",
    status: "upcoming",
    maxParticipants: 30,
    registeredParticipants: 12
  },
  {
    title: "Tech Innovation Summit",
    description: "Join Rwanda's leading tech innovators and entrepreneurs for a day of networking, learning, and collaboration.",
    type: "event",
    date: new Date("2024-02-20T08:30:00Z"),
    location: "Kigali Convention Centre",
    image: "/images/world_tech-DB__SZCy.png",
    status: "upcoming",
    maxParticipants: 200,
    registeredParticipants: 85
  },
  {
    title: "Lake Kivu Business Retreat",
    description: "A weekend business retreat focused on strategic planning and team building in the beautiful Lake Kivu region.",
    type: "training",
    date: new Date("2024-03-01T10:00:00Z"),
    location: "Lake Kivu Resort",
    image: "/images/boat-at-lake-kivu.jpg",
    status: "upcoming",
    maxParticipants: 25,
    registeredParticipants: 8
  },
  {
    title: "Why Choose Professional Development",
    description: "Discover the importance of continuous learning and professional development in today's competitive market.",
    type: "event",
    date: new Date("2024-02-25T14:00:00Z"),
    location: "MTPC Training Center",
    image: "/images/why_choose_us-BaADBL-Q.png",
    status: "upcoming",
    maxParticipants: 50,
    registeredParticipants: 23
  }
];

async function seedEvents() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    const eventsCollection = db.collection('events');
    
    // Clear existing events (optional)
    // await eventsCollection.deleteMany({});
    // console.log('Cleared existing events');
    
    // Insert sample events
    const result = await eventsCollection.insertMany(sampleEvents);
    console.log(`Inserted ${result.insertedCount} sample events with images`);
    
    console.log('Sample events created successfully!');
  } catch (error) {
    console.error('Error seeding events:', error);
  } finally {
    await client.close();
  }
}

seedEvents();