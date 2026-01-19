'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, MapPin, Users, ArrowRight, UserPlus } from 'lucide-react';
import Link from 'next/link';

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

const EventSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 w-full" />
    <CardHeader>
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </CardContent>
  </Card>
);

export function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      const data = await response.json();
      if (data.success) {
        const allEvents = data.data
          .sort((a: Event, b: Event) => {
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

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsRegisterDialogOpen(true);
  };

  const submitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegistering(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: selectedEvent?._id,
          eventTitle: selectedEvent?.title,
          ...registrationForm
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setIsRegisterDialogOpen(false);
        setRegistrationForm({ name: '', email: '', phone: '', message: '' });
        
        if (selectedEvent && selectedEvent.price > 0) {
          setIsPaymentDialogOpen(true);
        } else {
          alert('Registration successful! Your registration is confirmed.');
        }
        
        fetchEvents();
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setRegistering(false);
    }
  };

  const getButtonText = (event: Event) => {
    if (event.status === 'completed') return 'Event Completed';
    if (event.maxParticipants > 0 && event.registeredParticipants >= event.maxParticipants) return 'Event Full';
    if (event.price === 0) return 'Register Free';
    return `Register - ${event.price.toLocaleString()} RWF`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Events & Training Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our training programs and community events - upcoming, ongoing, and recently completed.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <EventSkeleton key={index} />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Available</h3>
            <p className="text-gray-500">Check back soon for new events and training programs!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {event.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.jpg';
                        }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        event.type === 'training' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {event.type === 'training' ? 'Training' : 'Event'}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.registeredParticipants}/{event.maxParticipants || '∞'}</span>
                      </div>
                      <div className="font-semibold text-green-600">
                        {event.price === 0 ? 'FREE' : `${event.price.toLocaleString()} RWF`}
                      </div>
                    </div>

                    <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-[#004D40] hover:bg-[#004D40]/90"
                          onClick={() => handleRegister(event)}
                          disabled={event.status === 'completed' || (event.maxParticipants > 0 && event.registeredParticipants >= event.maxParticipants)}
                        >
                          <UserPlus className="h-4 w-4 mr-2" />
                          {getButtonText(event)}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Register for Event</DialogTitle>
                        </DialogHeader>
                        {selectedEvent && (
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <h3 className="font-semibold">{selectedEvent.title}</h3>
                              <p className="text-sm text-gray-600">
                                {new Date(selectedEvent.date).toLocaleDateString()} • {selectedEvent.location}
                              </p>
                              <p className="text-sm font-semibold text-green-600">
                                {selectedEvent.price === 0 ? 'FREE' : `${selectedEvent.price.toLocaleString()} RWF`}
                              </p>
                            </div>
                            
                            <form onSubmit={submitRegistration} className="space-y-4">
                              <Input
                                placeholder="Full Name *"
                                value={registrationForm.name}
                                onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                                required
                              />
                              <Input
                                type="email"
                                placeholder="Email Address *"
                                value={registrationForm.email}
                                onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                                required
                              />
                              <Input
                                type="tel"
                                placeholder="Phone Number *"
                                value={registrationForm.phone}
                                onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                                required
                              />
                              <Textarea
                                placeholder="Additional Message (Optional)"
                                value={registrationForm.message}
                                onChange={(e) => setRegistrationForm({...registrationForm, message: e.target.value})}
                                rows={3}
                              />
                              <Button type="submit" className="w-full" disabled={registering}>
                                {registering ? 'Registering...' : 'Complete Registration'}
                              </Button>
                            </form>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Payment Instructions</DialogTitle>
                        </DialogHeader>
                        {selectedEvent && (
                          <div className="space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <h3 className="font-semibold text-green-800 mb-2">Registration Successful!</h3>
                              <p className="text-sm text-green-700">
                                Your registration for "{selectedEvent.title}" has been submitted and is currently <strong>PENDING</strong> payment.
                              </p>
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">Payment Details</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Event:</span>
                                  <span className="font-medium">{selectedEvent.title}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Amount:</span>
                                  <span className="font-bold text-lg">{selectedEvent.price.toLocaleString()} RWF</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                              <h4 className="font-semibold text-yellow-800 mb-3">How to Pay</h4>
                              <div className="space-y-3 text-sm text-yellow-700">
                                <div>
                                  <p className="font-medium mb-1">Mobile Money Payment:</p>
                                  <div className="bg-white p-3 rounded border">
                                    <p className="font-mono text-lg text-center text-gray-800">
                                      *182*1*1*0796691454#
                                    </p>
                                  </div>
                                  <p className="text-xs mt-1">Then enter amount: <strong>{selectedEvent.price.toLocaleString()} RWF</strong></p>
                                </div>
                                
                                <div>
                                  <p className="font-medium mb-1">Payment Number:</p>
                                  <p className="font-mono text-lg">0796 691 454</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 mb-2">Next Steps:</h4>
                              <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                                <li>Complete payment using the instructions above</li>
                                <li>Your registration will be confirmed by admin after payment</li>
                                <li>You will receive confirmation via email/phone</li>
                              </ol>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <strong>Need Help?</strong><br/>
                                Phone: 0796 691 454<br/>
                                Email: milleniumtrainers@gmail.com
                              </p>
                            </div>
                            
                            <Button 
                              onClick={() => setIsPaymentDialogOpen(false)} 
                              className="w-full"
                            >
                              I Understand
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/events">
                <Button variant="outline" size="lg" className="hover:bg-[#004D40] hover:text-white">
                  View All Events
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}