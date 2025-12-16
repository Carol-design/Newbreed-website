import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, ArrowLeft, Send, Shield, Users, Clock, CheckCircle } from 'lucide-react';

interface PrayerRequestScreenProps {
  onBack: () => void;
}

export function PrayerRequestScreen({ onBack }: PrayerRequestScreenProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    title: '',
    request: '',
    isUrgent: false,
    allowSharing: false,
    wantsPrayerPartner: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Health & Healing',
    'Family & Relationships',
    'Work & Career',
    'Spiritual Growth',
    'Financial Provision',
    'Education & Decisions',
    'Grief & Loss',
    'Addiction & Recovery',
    'Mission & Ministry',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to NewBreed
            </Button>
          </div>
        </div>

        {/* Success Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col items-center gap-6 lg:gap-8">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 lg:h-10 lg:w-10 text-green-600" />
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:gap-4 text-center">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Prayer Request Submitted</h1>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      Thank you for trusting us with your prayer request. Our prayer team will begin lifting 
                      you up in prayer immediately.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 lg:p-6 rounded-lg w-full">
                    <div className="flex flex-col gap-2 lg:gap-3">
                      <p className="font-medium text-blue-900 italic text-center text-sm lg:text-base">
                        "And pray in the Spirit on all occasions with all kinds of prayers and requests. 
                        With this in mind, be alert and always keep on praying for all the Lord's people."
                      </p>
                      <p className="text-xs lg:text-sm text-blue-700 text-center">- Ephesians 6:18</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full">
                    <Button onClick={onBack} variant="outline" className="flex-1">
                      Return to Website
                    </Button>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          category: '',
                          title: '',
                          request: '',
                          isUrgent: false,
                          allowSharing: false,
                          wantsPrayerPartner: false
                        });
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to NewBreed
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-12 lg:py-16">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBoYW5kcyUyMGNodXJjaHxlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hands in prayer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Submit a Prayer Request</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We believe in the power of prayer and would be honored to pray with you. 
              Share your heart with us, and let our community lift you up in prayer.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Prayer Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-6 lg:sticky lg:top-8">
              {/* Prayer Commitment */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-base lg:text-lg">Our Prayer Commitment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Confidential</p>
                        <p className="text-xs text-gray-600">Your request is kept private unless you choose to share</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Dedicated Team</p>
                        <p className="text-xs text-gray-600">Our prayer warriors commit to praying for each request</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Immediate Response</p>
                        <p className="text-xs text-gray-600">We begin praying as soon as we receive your request</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scripture */}
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex flex-col gap-2 lg:gap-3">
                  <p className="font-medium text-gray-800 italic text-sm lg:text-base">
                    "Therefore confess your sins to each other and pray for each other so that you may be healed. 
                    The prayer of a righteous person is powerful and effective."
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">- James 5:16</p>
                </div>
              </div>

              {/* Contact Info */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base lg:text-lg">Need to Talk?</CardTitle>
                  <CardDescription className="text-sm">
                    If you need immediate pastoral care or want to speak with someone directly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-start text-sm">
                      Call Prayer Line: +233 24 123 4567
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      Email: prayer@newbreedyouth.org
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Prayer Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl">Share Your Prayer Request</CardTitle>
                <CardDescription>
                  Please fill out the form below. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Personal Information */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone (Optional)
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Prayer Request Details */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Prayer Request Details</h3>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">
                        Category *
                      </label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="title" className="text-sm font-medium text-gray-700">
                        Brief Title *
                      </label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="A short description of your prayer request"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="request" className="text-sm font-medium text-gray-700">
                        Prayer Request *
                      </label>
                      <Textarea
                        id="request"
                        value={formData.request}
                        onChange={(e) => handleInputChange('request', e.target.value)}
                        placeholder="Please share the details of your prayer request. We're here to listen and pray with you."
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  {/* Prayer Preferences */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Prayer Preferences</h3>
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="urgent"
                          checked={formData.isUrgent}
                          onCheckedChange={(checked) => handleInputChange('isUrgent', checked === true)}
                        />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="urgent" className="text-sm font-medium text-gray-700 cursor-pointer">
                            This is an urgent prayer request
                          </label>
                          <p className="text-xs text-gray-600">
                            Urgent requests are prioritized and may receive immediate pastoral contact
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="sharing"
                          checked={formData.allowSharing}
                          onCheckedChange={(checked) => handleInputChange('allowSharing', checked === true)}
                        />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="sharing" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Allow sharing with our prayer team
                          </label>
                          <p className="text-xs text-gray-600">
                            Your request may be shared (anonymously) with our broader prayer community
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="partner"
                          checked={formData.wantsPrayerPartner}
                          onCheckedChange={(checked) => handleInputChange('wantsPrayerPartner', checked === true)}
                        />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="partner" className="text-sm font-medium text-gray-700 cursor-pointer">
                            I would like a prayer partner
                          </label>
                          <p className="text-xs text-gray-600">
                            We can connect you with a dedicated prayer partner for ongoing support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Section */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-border">
                    {formData.isUrgent && (
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800">Urgent Request</Badge>
                        <span className="text-sm text-gray-600">This will be prioritized for immediate prayer</span>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                      size="lg"
                    >
                      <Send className="h-5 w-5" />
                      Submit Prayer Request
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you acknowledge that your prayer request will be shared with our prayer team 
                      and handled according to your specified preferences.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}