import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Users, Heart, Calendar, Clock, CheckCircle, MapPin } from 'lucide-react';

interface VolunteerScreenProps {
  onBack: () => void;
}

export function VolunteerScreen({ onBack }: VolunteerScreenProps) {
  const [selectedOpportunities, setSelectedOpportunities] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const volunteerOpportunities = [
    {
      id: 'worship',
      title: 'Worship Team',
      description: 'Lead our community in worship through music and vocals',
      commitment: 'Weekly',
      icon: '🎵'
    },
    {
      id: 'tech',
      title: 'Tech Team',
      description: 'Operate sound, lights, and video equipment',
      commitment: 'Weekly',
      icon: '🎬'
    },
    {
      id: 'kids',
      title: "Children's Ministry",
      description: 'Help teach and care for younger children during services',
      commitment: 'Monthly',
      icon: '👶'
    },
    {
      id: 'welcome',
      title: 'Welcome Team',
      description: 'Greet visitors and help them feel at home',
      commitment: 'Bi-weekly',
      icon: '🤝'
    },
    {
      id: 'social',
      title: 'Social Media',
      description: 'Create content and manage our online presence',
      commitment: 'Flexible',
      icon: '📱'
    },
    {
      id: 'events',
      title: 'Event Planning',
      description: 'Organize and coordinate special events and outreaches',
      commitment: 'As needed',
      icon: '🎉'
    },
    {
      id: 'counseling',
      title: 'Peer Counseling',
      description: 'Provide support and guidance to fellow youth',
      commitment: 'Monthly',
      icon: '💬'
    },
    {
      id: 'outreach',
      title: 'Community Outreach',
      description: 'Serve in the community and share God\'s love',
      commitment: 'Monthly',
      icon: '❤️'
    }
  ];

  const handleOpportunityToggle = (opportunityId: string) => {
    setSelectedOpportunities(prev => 
      prev.includes(opportunityId) 
        ? prev.filter(id => id !== opportunityId)
        : [...prev, opportunityId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to NewBreed
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12">
                <div className="flex flex-col items-center gap-8">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-orange-600" />
                  </div>
                  
                  <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Thank You for Volunteering!</h1>
                    <p className="text-lg text-gray-600">
                      We're excited to have you join our team! Our volunteer coordinator will contact you 
                      within 48 hours to discuss next steps.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg w-full">
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-orange-900 italic text-center">
                        "Each of you should use whatever gift you have to serve others, as faithful stewards 
                        of God's grace in its various forms."
                      </p>
                      <p className="text-sm text-orange-700 text-center">- 1 Peter 4:10</p>
                    </div>
                  </div>

                  <Button onClick={onBack} className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    Return to Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
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
      <div className="relative py-16">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoYW5kcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Volunteers serving together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Volunteer with NewBreed</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Use your gifts and talents to make a difference in the lives of young people. 
              Join our team and help create a community where everyone belongs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-8 sticky top-8">
              {/* Why Volunteer */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Why Volunteer?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3 text-sm text-gray-600">
                    <p>• Make a lasting impact on young lives</p>
                    <p>• Develop leadership skills</p>
                    <p>• Build meaningful relationships</p>
                    <p>• Grow in your faith journey</p>
                    <p>• Use your gifts for God's kingdom</p>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">1</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Application Review</p>
                        <p className="text-xs text-gray-600">We'll review your application within 48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">2</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Meet & Greet</p>
                        <p className="text-xs text-gray-600">Casual meeting with team leaders</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">3</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Training & Onboarding</p>
                        <p className="text-xs text-gray-600">Learn about your role and our mission</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">4</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">Start Serving</p>
                        <p className="text-xs text-gray-600">Begin making a difference!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Visit us on Sunday
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Email: volunteers@newbreed.church
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              {/* Volunteer Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Choose Your Ministry Areas</CardTitle>
                  <CardDescription>
                    Select the volunteer opportunities that interest you. You can choose multiple areas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {volunteerOpportunities.map((opportunity) => (
                      <div
                        key={opportunity.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedOpportunities.includes(opportunity.id)
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                        onClick={() => handleOpportunityToggle(opportunity.id)}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox
                            checked={selectedOpportunities.includes(opportunity.id)}
                            onChange={() => {}}
                            className="mt-1"
                          />
                          <div className="flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{opportunity.icon}</span>
                              <h3 className="font-semibold">{opportunity.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{opportunity.description}</p>
                            <Badge variant="secondary" className="w-fit">
                              <Clock className="h-3 w-3 mr-1" />
                              {opportunity.commitment}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Volunteer Application</CardTitle>
                  <CardDescription>
                    Tell us about yourself and why you'd like to volunteer with NewBreed
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
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone *
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="age" className="text-sm font-medium text-gray-700">
                          Age *
                        </label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="18"
                          min="14"
                          max="120"
                          required
                        />
                      </div>
                    </div>

                    {/* Experience & Skills */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-gray-900">Experience & Skills</h3>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                          Previous volunteer or leadership experience
                        </label>
                        <Textarea
                          id="experience"
                          placeholder="Tell us about any previous volunteer work, leadership roles, or relevant experience..."
                          rows={4}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="skills" className="text-sm font-medium text-gray-700">
                          Special skills or talents
                        </label>
                        <Textarea
                          id="skills"
                          placeholder="What unique skills, talents, or abilities do you bring? (musical instruments, tech skills, languages, etc.)"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-gray-900">Why NewBreed?</h3>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                          Why do you want to volunteer with NewBreed? *
                        </label>
                        <Textarea
                          id="motivation"
                          placeholder="Share your heart and what motivates you to serve with us..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-gray-900">Availability</h3>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="availability" className="text-sm font-medium text-gray-700">
                          When are you typically available to volunteer? *
                        </label>
                        <Textarea
                          id="availability"
                          placeholder="Let us know your general availability (days, times, frequency)..."
                          rows={3}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-border">
                      {selectedOpportunities.length > 0 && (
                        <div className="flex flex-col gap-2">
                          <span className="font-medium">Selected Ministry Areas:</span>
                          <div className="flex flex-wrap gap-2">
                            {selectedOpportunities.map((id) => {
                              const opportunity = volunteerOpportunities.find(op => op.id === id);
                              return opportunity ? (
                                <Badge key={id} className="bg-orange-100 text-orange-800">
                                  {opportunity.title}
                                </Badge>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 gap-2"
                        size="lg"
                        disabled={selectedOpportunities.length === 0}
                      >
                        <Users className="h-5 w-5" />
                        Submit Volunteer Application
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        By submitting this application, you're taking the first step to join our amazing volunteer team. 
                        We'll be in touch soon!
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}