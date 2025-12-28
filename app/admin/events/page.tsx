'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Calendar, Filter, Image, Eye } from 'lucide-react';

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

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [viewingEvent, setViewingEvent] = useState<Event | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<'all' | 'training' | 'event' | 'upcoming' | 'ongoing' | 'completed'>('all');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'training' as 'training' | 'event',
    date: '',
    location: '',
    image: '',
    price: 0,
    maxParticipants: 0,
    registeredParticipants: 0,
    status: 'upcoming'
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchEvents();
  }, [router]);

  useEffect(() => {
    applyFilter();
  }, [events, filter]);

  const applyFilter = () => {
    let filtered = events;
    
    if (filter === 'training' || filter === 'event') {
      filtered = events.filter(event => event.type === filter);
    } else if (filter === 'upcoming' || filter === 'ongoing' || filter === 'completed') {
      filtered = events.filter(event => event.status === filter);
    }
    
    setFilteredEvents(filtered);
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      if (data.success) {
        setEvents(data.data);
      } else {
        alert('Failed to fetch events');
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
      alert('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const url = editingEvent ? `/api/events/${editingEvent._id}` : '/api/events';
      const method = editingEvent ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        alert(`Event ${editingEvent ? 'updated' : 'created'} successfully`);
        await fetchEvents();
        setIsDialogOpen(false);
        resetForm();
      } else {
        alert(data.error || 'Failed to save event');
      }
    } catch (error) {
      console.error('Failed to save event:', error);
      alert('Network error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    const eventDate = new Date(event.date);
    const localDate = new Date(eventDate.getTime() - eventDate.getTimezoneOffset() * 60000);
    
    setFormData({
      title: event.title,
      description: event.description,
      type: event.type,
      date: localDate.toISOString().split('T')[0],
      location: event.location,
      image: event.image || '',
      price: event.price || 0,
      maxParticipants: event.maxParticipants || 0,
      registeredParticipants: event.registeredParticipants || 0,
      status: event.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) return;
    
    try {
      const response = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      const data = await response.json();
      
      if (data.success) {
        alert('Event deleted successfully');
        await fetchEvents();
      } else {
        alert(data.error || 'Failed to delete event');
      }
    } catch (error) {
      console.error('Failed to delete event:', error);
      alert('Network error occurred');
    }
  };

  const handleViewEvent = (event: Event) => {
    setViewingEvent(event);
    setIsViewDialogOpen(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormData(prev => ({...prev, image: data.url}));
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      type: 'training',
      date: '',
      location: '',
      image: '',
      price: 0,
      maxParticipants: 0,
      registeredParticipants: 0,
      status: 'upcoming'
    });
    setEditingEvent(null);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Manage Events</h1>
            <div className="flex flex-wrap gap-2">
              <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="event">Community</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => router.push('/admin/dashboard')} variant="outline">
                Dashboard
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetForm}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingEvent ? 'Edit Event' : 'Create New Event'}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Event Title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Event Description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Select value={formData.type} onValueChange={(value: 'training' | 'event') => setFormData({...formData, type: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Event Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="training">Training</SelectItem>
                          <SelectItem value="event">Community Event</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                      <Input
                        type="number"
                        placeholder="Price (0 = Free)"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value) || 0})}
                        min="0"
                        step="0.01"
                      />
                      <Input
                        type="number"
                        placeholder="Max Participants (0 = unlimited)"
                        value={formData.maxParticipants}
                        onChange={(e) => setFormData({...formData, maxParticipants: parseInt(e.target.value) || 0})}
                        min="0"
                      />
                    </div>
                    {editingEvent && (
                      <div>
                        <Input
                          type="number"
                          placeholder="Registered Participants"
                          value={formData.registeredParticipants}
                          onChange={(e) => setFormData({...formData, registeredParticipants: parseInt(e.target.value) || 0})}
                          min="0"
                          max={formData.maxParticipants || undefined}
                        />
                      </div>
                    )}
                    <div>
                      <Input
                        placeholder="Location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <div className="space-y-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploading}
                        />
                        {uploading && <p className="text-sm text-blue-600">Uploading image...</p>}
                        {formData.image && (
                          <div className="mt-2">
                            <img 
                              src={formData.image} 
                              alt="Preview" 
                              className="w-full h-32 object-cover rounded border"
                            />
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm" 
                              className="mt-1"
                              onClick={() => setFormData({...formData, image: ''})}
                            >
                              Remove Image
                            </Button>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Optional: Upload an image for this event</p>
                    </div>
                    <Button type="submit" className="w-full" disabled={submitting}>
                      {submitting ? 'Saving...' : (editingEvent ? 'Update Event' : 'Create Event')}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Event Details</DialogTitle>
                  </DialogHeader>
                  {viewingEvent && (
                    <div className="space-y-4">
                      {viewingEvent.image && (
                        <img 
                          src={viewingEvent.image} 
                          alt={viewingEvent.title}
                          className="w-full h-48 object-cover rounded"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold text-lg">{viewingEvent.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full mt-2 inline-block ${
                          viewingEvent.type === 'training' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {viewingEvent.type}
                        </span>
                      </div>
                      <p className="text-gray-600">{viewingEvent.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Date:</strong> {new Date(viewingEvent.date).toLocaleDateString()}
                        </div>
                        <div>
                          <strong>Location:</strong> {viewingEvent.location}
                        </div>
                        <div>
                          <strong>Status:</strong> 
                          <span className={`px-2 py-1 text-xs rounded-full ml-2 ${
                            viewingEvent.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                            viewingEvent.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {viewingEvent.status}
                          </span>
                        </div>
                        <div>
                          <strong>Price:</strong> 
                          <span className="font-semibold text-green-600 ml-2">
                            {viewingEvent.price === 0 ? 'FREE' : `$${viewingEvent.price}`}
                          </span>
                        </div>
                        <div>
                          <strong>Participants:</strong> {viewingEvent.registeredParticipants}/{viewingEvent.maxParticipants || 'Unlimited'}
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
            <p className="text-gray-500 mb-4">
              {filter === 'all' ? 'No events created yet.' : `No ${filter} events found.`}
            </p>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />
              Create First Event
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
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
                  <CardTitle className="flex items-center justify-between">
                    <span className="truncate">{event.title}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      event.type === 'training' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div>Location: {event.location}</div>
                    <div>Status: <span className={`px-2 py-1 text-xs rounded-full ${
                      event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                      event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span></div>
                    <div>Price: <span className="font-semibold text-green-600">
                      {event.price === 0 ? 'FREE' : `$${event.price}`}
                    </span></div>
                    <div>Participants: {event.registeredParticipants}/{event.maxParticipants || 'Unlimited'}</div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleViewEvent(event)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleEdit(event)} className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(event._id, event.title)} className="flex-1">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}