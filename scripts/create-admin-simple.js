const bcrypt = require('bcryptjs');

async function createAdminCredentials() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    console.log('=== ADMIN CREDENTIALS ===');
    console.log('Email: admin@trainingservices.com');
    console.log('Password: admin123');
    console.log('Hashed Password:', hashedPassword);
    console.log('========================');
    
    // You can manually insert this into your database
    const adminDocument = {
      email: 'admin@trainingservices.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    console.log('MongoDB Document to insert:');
    console.log(JSON.stringify(adminDocument, null, 2));
    
  } catch (error) {
    console.error('Error:', error);
  }
}

createAdminCredentials();