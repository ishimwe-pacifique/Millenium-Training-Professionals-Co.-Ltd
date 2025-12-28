const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
}, {
  timestamps: true,
});



const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function initAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingAdmin = await Admin.findOne({ email: 'admin@trainingservices.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const admin = new Admin({
      email: 'admin@trainingservices.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin'
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Email: admin@trainingservices.com');
    console.log('Password: admin123');

  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

initAdmin();