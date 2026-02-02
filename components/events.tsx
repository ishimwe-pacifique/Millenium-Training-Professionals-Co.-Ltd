'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, MapPin, Users, ArrowRight, UserPlus, ShieldCheck } from 'lucide-react';
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
  <Card className="overflow-hidden rounded-[2.5rem] border-none bg-gray-50/50">
    <Skeleton className="h-56 w-full" />
    <div className="p-8 space-y-4">
      <div className="flex justify-between"><Skeleton className="h-5 w-24" /><Skeleton className="h-5 w-16" /></div>
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-12 w-full rounded-2xl" />
    </div>
  </Card>
);

export function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({ name: '', email: '', phone: '', message: '' });

  const PRIMARY_COLOR = "#004D40";

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events', {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      const data = await response.json();
      if (data.success) {
        const allEvents = data.data.sort((a: Event, b: Event) => {
          const statusOrder = { 'upcoming': 1, 'ongoing': 2, 'completed': 3 };
          return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder];
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
        body: JSON.stringify({ eventId: selectedEvent?._id, eventTitle: selectedEvent?.title, ...registrationForm })
      });
      const data = await response.json();
      if (data.success) {
        setIsRegisterDialogOpen(false);
        setRegistrationForm({ name: '', email: '', phone: '', message: '' });
        if (selectedEvent && selectedEvent.price > 0) setIsPaymentDialogOpen(true);
        else alert('Registration successful!');
        fetchEvents();
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    } finally {
      setRegistering(false);
    }
  };

  const getButtonText = (event: Event) => {
    if (event.status === 'completed') return 'Event Completed';
    if (event.maxParticipants > 0 && event.registeredParticipants >= event.maxParticipants) return 'Registration Full';
    return event.price === 0 ? 'Register Free' : `Register - ${event.price.toLocaleString()} RWF`;
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#004D40]/5 -skew-x-12 transform origin-top translate-x-20 z-0"></div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#004D40] font-display uppercase tracking-tight leading-none">
            Events & <span className="text-[#66BB6A]">Trainig Programs</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our professional training programs and upcoming community events in Kigali, Rwanda.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => <EventSkeleton key={i} />)}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold font-display uppercase text-gray-400">No Events Scheduled</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event._id} className="group overflow-hidden border-none rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img src={event.image || '/placeholder.jpg'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{event.type}</span>
                  </div>
                </div>

                <CardHeader className="p-8 pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#66BB6A]">{event.status}</span>
                  </div>
                  <CardTitle className="text-xl font-extrabold font-display uppercase tracking-tight text-[#004D40] line-clamp-2 leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-8 pt-2 space-y-6">
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-medium">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                      <Calendar size={14} className="text-[#66BB6A]" />
                      <span>{new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                      <MapPin size={14} className="text-[#66BB6A]" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  <Dialog open={isRegisterDialogOpen && selectedEvent?._id === event._id} onOpenChange={setIsRegisterDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-[#004D40] hover:bg-[#004D40]/90 text-white font-bold uppercase tracking-[0.2em] text-[10px] h-14 rounded-2xl transition-all shadow-lg shadow-[#004D40]/20 active:scale-95"
                        onClick={() => handleRegister(event)}
                        disabled={event.status === 'completed'}
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        {getButtonText(event)}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md rounded-[2.5rem] p-8 font-sans">
                      <DialogHeader className="mb-6">
                        <DialogTitle className="font-display uppercase tracking-tight text-2xl text-[#004D40]">Registration</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={submitRegistration} className="space-y-4">
                        <Input placeholder="Full Name *" className="rounded-xl h-14" value={registrationForm.name} onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})} required />
                        <Input type="email" placeholder="Email Address *" className="rounded-xl h-14" value={registrationForm.email} onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})} required />
                        <Input type="tel" placeholder="Phone Number *" className="rounded-xl h-14" value={registrationForm.phone} onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})} required />
                        <Textarea placeholder="Message (Optional)" className="rounded-xl min-h-[100px]" value={registrationForm.message} onChange={(e) => setRegistrationForm({...registrationForm, message: e.target.value})} />
                        <Button type="submit" className="w-full bg-[#004D40] h-14 font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-xl shadow-[#004D40]/20" disabled={registering}>
                          {registering ? 'Processing...' : 'Complete Registration'}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-20">
          <Link href="/events">
            <Button variant="outline" className="h-16 px-12 rounded-2xl border-2 border-[#004D40] text-[#004D40] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#004D40] hover:text-white transition-all group">
              Browse Full Catalog
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}