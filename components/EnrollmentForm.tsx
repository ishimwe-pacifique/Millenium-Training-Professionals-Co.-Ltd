'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, User, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
  eventType?: string;
}

export default function EnrollmentForm({ isOpen, onClose, eventTitle, eventType }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    course: eventTitle || '',
    motivation: '',
    hearAbout: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Enrollment submitted successfully! We will contact you soon.');
      onClose();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        experience: '',
        course: '',
        motivation: '',
        hearAbout: ''
      });
    } catch (error) {
      alert('Failed to submit enrollment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Course Enrollment Form
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">First Name *</label>
              <Input
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name *</label>
              <Input
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Email *</label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Address</label>
            <Input
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Course/Training *</label>
            <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select course or training" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Project Management">Project Management</SelectItem>
                <SelectItem value="Strategic Marketing">Strategic Marketing</SelectItem>
                <SelectItem value="Business in Health Science">Business in Health Science</SelectItem>
                <SelectItem value="Business in Engineering">Business in Engineering</SelectItem>
                <SelectItem value="Creativity & Innovation">Creativity & Innovation</SelectItem>
                <SelectItem value="Transition Employability">Transition Employability</SelectItem>
                <SelectItem value="Jobs & Career Creation">Jobs & Career Creation</SelectItem>
                <SelectItem value="Business Services Consulting">Business Services Consulting</SelectItem>
                <SelectItem value="Sales & Marketing Consulting">Sales & Marketing Consulting</SelectItem>
                <SelectItem value="Strategy Consulting">Strategy Consulting</SelectItem>
                <SelectItem value="Financial Services">Financial Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Education Level</label>
            <Select value={formData.education} onValueChange={(value) => setFormData({...formData, education: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Diploma">Diploma</SelectItem>
                <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                <SelectItem value="PhD">PhD</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Work Experience</label>
            <Textarea
              placeholder="Briefly describe your work experience"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Why do you want to take this course? *</label>
            <Textarea
              placeholder="Tell us your motivation and goals"
              value={formData.motivation}
              onChange={(e) => setFormData({...formData, motivation: e.target.value})}
              rows={3}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">How did you hear about us?</label>
            <Select value={formData.hearAbout} onValueChange={(value) => setFormData({...formData, hearAbout: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Friend/Colleague">Friend/Colleague</SelectItem>
                <SelectItem value="Advertisement">Advertisement</SelectItem>
                <SelectItem value="Event">Event</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={submitting} className="flex-1 bg-[#004D40] hover:bg-[#004D40]/90">
              {submitting ? 'Submitting...' : 'Submit Enrollment'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}