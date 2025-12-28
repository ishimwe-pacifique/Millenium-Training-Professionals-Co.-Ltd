'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface Event {
  _id: string;
  title: string;
  description: string;
  type: 'training' | 'event';
  date: string;
  location: string;
  image: string;
  status: string;
  price: number;
  maxParticipants: number;
  registeredParticipants: number;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'training' | 'event'>('all');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      if (data.success) {
        // Show all events, sorted by status priority then date
        const allEvents = data.data.sort((a: Event, b: Event) => {
          const statusOrder = { 'upcoming': 1, 'ongoing': 2, 'completed': 3 };
          if (statusOrder[a.status as keyof typeof statusOrder] !== statusOrder[b.status as keyof typeof statusOrder]) {
            return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder];
          }
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        setEvents(allEvents);
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    return event.type === filter;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#004D40] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#004D40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">All Events & Training</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore all our training programs and community events - upcoming, ongoing, and completed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className={filter === 'all' ? 'bg-[#004D40] hover:bg-[#004D40]/90' : 'hover:bg-[#004D40]/10'}
          >
            All Events ({events.length})
          </Button>
          <Button
            onClick={() => setFilter('training')}
            variant={filter === 'training' ? 'default' : 'outline'}
            className={filter === 'training' ? 'bg-[#004D40] hover:bg-[#004D40]/90' : 'hover:bg-[#004D40]/10'}
          >
            Training Programs ({events.filter(e => e.type === 'training').length})
          </Button>
          <Button
            onClick={() => setFilter('event')}
            variant={filter === 'event' ? 'default' : 'outline'}
            className={filter === 'event' ? 'bg-[#004D40] hover:bg-[#004D40]/90' : 'hover:bg-[#004D40]/10'}
          >
            Community Events ({events.filter(e => e.type === 'event').length})
          </Button>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
            <p className="text-gray-500">
              {filter === 'all' 
                ? 'No events available at the moment. Check back soon!'
                : `No ${filter === 'training' ? 'training programs' : 'community events'} found.`
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event._id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      event.type === 'training' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {event.type === 'training' ? 'Training Program' : 'Community Event'}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full ${
                      event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                      event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }">
                      {event.status}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {event.image && (
                    <div className="mb-4">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.jpg';
                        }}
                      />
                    </div>
                  )}
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-green-600">
                        {event.price === 0 ? 'FREE' : `$${event.price}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>
                        {event.registeredParticipants}/{event.maxParticipants || 'Unlimited'} participants
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-[#004D40] hover:bg-[#004D40]/90"
                      disabled={event.maxParticipants > 0 && event.registeredParticipants >= event.maxParticipants}
                    >
                      {event.maxParticipants > 0 && event.registeredParticipants >= event.maxParticipants 
                        ? 'Full' 
                        : 'Register Now'
                      }
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}