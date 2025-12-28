# Admin System Documentation

## Overview
The admin system allows administrators to manage training programs and community events for the Millennium Training Professionals website.

## Features
- **Admin Authentication**: Secure login system for administrators
- **Event Management**: Create, read, update, and delete events and training programs
- **Dashboard**: Overview of all events with statistics
- **Event Types**: Support for both training programs and community events
- **Status Management**: Track events as upcoming, ongoing, or completed
- **Participant Tracking**: Monitor registration numbers and capacity

## Getting Started

### 1. Environment Setup
The `.env.local` file contains:
```
MONGODB_URI=mongodb+srv://pacishimwe150_db_user:CXalry2RVFWaWix0@cluster0.lhfbogk.mongodb.net/?appName=Cluster0
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
ADMIN_EMAIL=admin@trainingservices.com
ADMIN_PASSWORD=admin123
```

### 2. Initialize Admin User
Run the following command to create the initial admin user:
```bash
npm run init-admin
```

### 3. Seed Sample Events (Optional)
To populate the database with sample events:
```bash
npm run seed-events
```

## Admin Access

### Login Credentials
- **Email**: admin@trainingservices.com
- **Password**: admin123

### Access URLs
- **Admin Login**: `/admin/login`
- **Admin Dashboard**: `/admin/dashboard`
- **Event Management**: `/admin/events`

## API Endpoints

### Events API
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/[id]` - Get specific event
- `PUT /api/events/[id]` - Update event
- `DELETE /api/events/[id]` - Delete event

### Authentication API
- `POST /api/auth/login` - Admin login

## Event Schema
```typescript
{
  title: string;
  description: string;
  type: 'training' | 'event';
  date: Date;
  location: string;
  image?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  maxParticipants: number;
  registeredParticipants: number;
}
```

## Usage Instructions

### Creating Events
1. Navigate to `/admin/login` and log in
2. Go to the dashboard or events page
3. Click "Add Event" or "Create New Event"
4. Fill in the event details:
   - **Title**: Event name
   - **Description**: Detailed description
   - **Type**: Choose between "Training" or "Community Event"
   - **Date**: Event date and time
   - **Location**: Event venue
   - **Max Participants**: Maximum number of attendees (0 for unlimited)
   - **Status**: Event status (upcoming, ongoing, completed)

### Managing Events
- **Edit**: Click the edit button on any event card
- **Delete**: Click the delete button (requires confirmation)
- **View**: All events are displayed in a card layout with key information

### Public Event Display
- Public users can view upcoming events at `/events`
- Events are filterable by type (all, training, community events)
- Registration buttons are available (functionality can be extended)

## Database Structure

### Collections
1. **events** - Stores all training programs and community events
2. **admins** - Stores admin user credentials

### MongoDB Connection
The system uses Mongoose for MongoDB connection and schema management. The connection is established through the `lib/mongodb.ts` utility.

## Security Features
- Password hashing using bcryptjs
- JWT token authentication
- HTTP-only cookies for session management
- Protected admin routes

## Development Notes
- The system is built with Next.js 16 and TypeScript
- UI components use Radix UI and Tailwind CSS
- MongoDB Atlas is used for cloud database hosting
- The admin interface is responsive and mobile-friendly

## Extending the System
To add more features:
1. **User Registration**: Implement user registration for events
2. **Email Notifications**: Add email confirmations for registrations
3. **Payment Integration**: Add payment processing for paid events
4. **Advanced Analytics**: Implement detailed reporting and analytics
5. **Multi-Admin Support**: Add role-based access control

## Troubleshooting
- Ensure MongoDB connection string is correct
- Verify admin user exists by running `npm run init-admin`
- Check browser console for any JavaScript errors
- Ensure all required environment variables are set