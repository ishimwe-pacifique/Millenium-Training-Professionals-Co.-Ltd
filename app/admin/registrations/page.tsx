'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Users, Calendar, Mail, Phone, MessageSquare, Filter, Eye } from 'lucide-react';

interface Registration {
  _id: string;
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  registrationDate: string;
}

export default function AdminRegistrations() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');
  const [viewingRegistration, setViewingRegistration] = useState<Registration | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchRegistrations();
  }, [router]);

  useEffect(() => {
    applyFilter();
  }, [registrations, filter]);

  const applyFilter = () => {
    let filtered = registrations;
    if (filter !== 'all') {
      filtered = registrations.filter(reg => reg.status === filter);
    }
    setFilteredRegistrations(filtered);
  };

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/registrations');
      const data = await response.json();
      if (data.success) {
        setRegistrations(data.data);
      } else {
        alert('Failed to fetch registrations');
      }
    } catch (error) {
      console.error('Failed to fetch registrations:', error);
      alert('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleViewRegistration = (registration: Registration) => {
    setViewingRegistration(registration);
    setIsViewDialogOpen(true);
  };

  const updateRegistrationStatus = async (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      const data = await response.json();
      if (data.success) {
        fetchRegistrations();
        alert(`Registration ${status} successfully`);
      } else {
        alert('Failed to update registration');
      }
    } catch (error) {
      console.error('Failed to update registration:', error);
      alert('Network error occurred');
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Event Registrations</h1>
            <div className="flex flex-wrap gap-2">
              <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => router.push('/admin/dashboard')} variant="outline">
                Dashboard
              </Button>
              <Button onClick={() => router.push('/admin/events')} variant="outline">
                Manage Events
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{registrations.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{registrations.filter(r => r.status === 'pending').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{registrations.filter(r => r.status === 'confirmed').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{registrations.filter(r => r.status === 'cancelled').length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registration Details</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredRegistrations.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Registrations Found</h3>
                <p className="text-gray-500">
                  {filter === 'all' ? 'No registrations yet.' : `No ${filter} registrations found.`}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Participant</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Registration Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRegistrations.map((registration) => (
                      <TableRow key={registration._id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{registration.name}</div>
                            {registration.message && (
                              <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <MessageSquare className="h-3 w-3" />
                                {registration.message.substring(0, 50)}...
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{registration.eventTitle}</div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3" />
                              {registration.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Phone className="h-3 w-3" />
                              {registration.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {new Date(registration.registrationDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(registration.status)}>
                            {registration.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleViewRegistration(registration)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            {registration.status === 'pending' && (
                              <Button
                                size="sm"
                                onClick={() => updateRegistrationStatus(registration._id, 'confirmed')}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Confirm
                              </Button>
                            )}
                            {registration.status !== 'cancelled' && (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => updateRegistrationStatus(registration._id, 'cancelled')}
                              >
                                Cancel
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Registration Details</DialogTitle>
            </DialogHeader>
            {viewingRegistration && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{viewingRegistration.eventTitle}</h3>
                  <Badge className={getStatusBadge(viewingRegistration.status)}>
                    {viewingRegistration.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Participant Name</label>
                      <p className="text-lg font-semibold">{viewingRegistration.name}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email Address</label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <p>{viewingRegistration.email}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone Number</label>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p>{viewingRegistration.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Registration Date</label>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <p>{new Date(viewingRegistration.registrationDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Registration Time</label>
                      <p>{new Date(viewingRegistration.registrationDate).toLocaleTimeString()}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Registration ID</label>
                      <p className="text-sm text-gray-600 font-mono">{viewingRegistration._id}</p>
                    </div>
                  </div>
                </div>
                
                {viewingRegistration.message && (
                  <div>
                    <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Additional Message
                    </label>
                    <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{viewingRegistration.message}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-4 border-t">
                  {viewingRegistration.status === 'pending' && (
                    <Button
                      onClick={() => {
                        updateRegistrationStatus(viewingRegistration._id, 'confirmed');
                        setIsViewDialogOpen(false);
                      }}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Confirm Registration
                    </Button>
                  )}
                  {viewingRegistration.status !== 'cancelled' && (
                    <Button
                      variant="destructive"
                      onClick={() => {
                        updateRegistrationStatus(viewingRegistration._id, 'cancelled');
                        setIsViewDialogOpen(false);
                      }}
                    >
                      Cancel Registration
                    </Button>
                  )}
                  <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}