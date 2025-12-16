import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, Calendar, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface EventRegistrationScreenProps {
  onBack: () => void;
  selectedEvent?: string;
}

export function EventRegistrationScreen({ onBack, selectedEvent }: EventRegistrationScreenProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    event: selectedEvent || '',
    attendees: '1',
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    specialNeeds: '',
    tshirtSize: '',
    agreeToTerms: false,
    agreeToPhotos: false,
  });

  const events = [
    { id: 'sunday-service', name: 'Sunday Night Service - Every Sunday' },
    { id: 'connect-groups', name: 'Youth Connect Groups - Every Wednesday' },
    { id: 'game-night', name: 'Game Night Extravaganza - March 15, 2025' },
    { id: 'spring-retreat', name: 'Spring Retreat 2025 - April 5-7, 2025' },
    { id: 'service-day', name: 'Community Service Day - March 30, 2025' },
    { id: 'worship-night', name: 'Worship Night - April 12, 2025' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    // Mock submission
    const eventName = events.find(e => e.id === formData.event)?.name || formData.event;
    toast.success(`You're registered for ${eventName}! Check your email for confirmation.`);
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      event: '',
      attendees: '1',
      dietaryRestrictions: '',
      emergencyContact: '',
      emergencyPhone: '',
      specialNeeds: '',
      tshirtSize: '',
      agreeToTerms: false,
      agreeToPhotos: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-border z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div>
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Event Registration
              </h1>
              <p className="text-muted-foreground text-sm">
                Register for our upcoming events
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h2>Join Us for an Amazing Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            We're excited to have you at our event! Please fill out this registration form so we can prepare 
            and ensure you have the best experience possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Event Selection */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="mb-6">Select Event</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event">Which event would you like to attend? *</Label>
                <Select
                  value={formData.event}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, event: value }))}
                  required
                >
                  <SelectTrigger id="event">
                    <SelectValue placeholder="Choose an event" />
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="mb-6">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attendees">Number of Attendees</Label>
                <Select
                  value={formData.attendees}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, attendees: value }))}
                >
                  <SelectTrigger id="attendees">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Just me</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3">3 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                    <SelectItem value="5">5+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="mb-6">Emergency Contact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData(prev => ({ ...prev, emergencyContact: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                <Input
                  id="emergencyPhone"
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, emergencyPhone: e.target.value }))}
                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="mb-6">Additional Information</h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tshirtSize">T-Shirt Size (for retreat/special events)</Label>
                <Select
                  value={formData.tshirtSize}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, tshirtSize: value }))}
                >
                  <SelectTrigger id="tshirtSize">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xs">XS</SelectItem>
                    <SelectItem value="s">Small</SelectItem>
                    <SelectItem value="m">Medium</SelectItem>
                    <SelectItem value="l">Large</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                    <SelectItem value="xxl">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietaryRestrictions">Dietary Restrictions or Allergies</Label>
                <Input
                  id="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                  placeholder="e.g., Vegetarian, Peanut allergy, etc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialNeeds">Special Needs or Accommodations</Label>
                <Textarea
                  id="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialNeeds: e.target.value }))}
                  placeholder="Let us know if you need any special accommodations..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div className="bg-white rounded-lg border border-border p-6">
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="terms" className="cursor-pointer">
                    I agree to the terms and conditions *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I understand the event details, code of conduct, and waiver of liability. 
                    For minors, parent/guardian consent is required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="photos"
                  checked={formData.agreeToPhotos}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeToPhotos: checked as boolean }))
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="photos" className="cursor-pointer">
                    Photo/Video Release
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I give permission for photos/videos taken at this event to be used for NewBreed's 
                    promotional materials and social media.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1">
                <CheckCircle className="mr-2 h-4 w-4" />
                Complete Registration
              </Button>
              <Button type="button" variant="outline" onClick={onBack}>
                Cancel
              </Button>
            </div>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Questions about the event? Contact us at{' '}
            <a href="mailto:events@newbreed.com" className="text-primary hover:underline">
              events@newbreed.com
            </a>
            {' '}or call{' '}
            <a href="tel:555-123-4567" className="text-primary hover:underline">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
