import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ArrowLeft, Users, Heart, Calendar, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface JoinCommunityScreenProps {
  onBack: () => void;
}

export function JoinCommunityScreen({ onBack }: JoinCommunityScreenProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    ageGroup: '',
    interests: [] as string[],
    testimony: '',
    baptized: '',
    previousChurch: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    // Mock submission
    toast.success('Welcome to NewBreed! We\'ll be in touch soon.');
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      ageGroup: '',
      interests: [],
      testimony: '',
      baptized: '',
      previousChurch: '',
      agreeToTerms: false,
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const interests = [
    { id: 'worship', label: 'Worship Team', icon: Heart },
    { id: 'media', label: 'Media & Tech', icon: Calendar },
    { id: 'teaching', label: 'Teaching & Bible Study', icon: BookOpen },
    { id: 'outreach', label: 'Community Outreach', icon: Users },
    { id: 'prayer', label: 'Prayer Ministry', icon: Heart },
    { id: 'creative', label: 'Creative Arts', icon: Heart },
  ];

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
                Join Our Community
              </h1>
              <p className="text-muted-foreground text-sm">
                Become a member of the NewBreed family
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
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2>Welcome to NewBreed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            We're excited to have you join our community! Please fill out this form so we can get to know you better 
            and help you connect with the right ministries and opportunities.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
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
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ageGroup">Age Group *</Label>
                <Select
                  value={formData.ageGroup}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, ageGroup: value }))}
                  required
                >
                  <SelectTrigger id="ageGroup">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="13-17">13-17 years</SelectItem>
                    <SelectItem value="18-24">18-24 years</SelectItem>
                    <SelectItem value="25-30">25-30 years</SelectItem>
                    <SelectItem value="31-35">31-35 years</SelectItem>
                    <SelectItem value="36+">36+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Street, City, State"
                />
              </div>
            </div>
          </div>

          {/* Ministry Interests */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="mb-4">Ministry Interests</h3>
            <p className="text-muted-foreground mb-6">
              Select the areas where you'd like to serve or get involved
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors"
                  onClick={() => handleInterestToggle(interest.id)}
                >
                  <Checkbox
                    id={interest.id}
                    checked={formData.interests.includes(interest.id)}
                    onCheckedChange={() => handleInterestToggle(interest.id)}
                  />
                  <div className="flex items-center gap-3">
                    <interest.icon className="h-5 w-5 text-primary" />
                    <Label htmlFor={interest.id} className="cursor-pointer">
                      {interest.label}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spiritual Background */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="mb-6">Spiritual Background</h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="baptized">Have you been baptized?</Label>
                <Select
                  value={formData.baptized}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, baptized: value }))}
                >
                  <SelectTrigger id="baptized">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="planning">Planning to be baptized</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousChurch">Previous Church (if any)</Label>
                <Input
                  id="previousChurch"
                  value={formData.previousChurch}
                  onChange={(e) => setFormData(prev => ({ ...prev, previousChurch: e.target.value }))}
                  placeholder="Church name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimony">Share Your Story (Optional)</Label>
                <Textarea
                  id="testimony"
                  value={formData.testimony}
                  onChange={(e) => setFormData(prev => ({ ...prev, testimony: e.target.value }))}
                  placeholder="Tell us about your faith journey or why you want to join NewBreed..."
                  rows={5}
                />
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-start gap-3 mb-6">
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
                  By joining NewBreed, you agree to receive communications about church events, 
                  ministries, and updates. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1">
                Join NewBreed Community
              </Button>
              <Button type="button" variant="outline" onClick={onBack}>
                Cancel
              </Button>
            </div>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Questions? Contact us at{' '}
            <a href="mailto:info@newbreed.com" className="text-primary hover:underline">
              info@newbreed.com
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
