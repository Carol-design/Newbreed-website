import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Mail, Calendar, Users, CheckCircle, Bell, Star } from 'lucide-react';

interface NewsletterScreenProps {
  onBack: () => void;
}

export function NewsletterScreen({ onBack }: NewsletterScreenProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const newsletterTopics = [
    { id: 'events', label: 'Upcoming Events', icon: '📅' },
    { id: 'sermons', label: 'Weekly Sermons', icon: '🎤' },
    { id: 'youth', label: 'Youth Ministry News', icon: '👥' },
    { id: 'volunteer', label: 'Volunteer Opportunities', icon: '🤝' },
    { id: 'prayer', label: 'Prayer Requests', icon: '🙏' },
    { id: 'testimonies', label: 'Stories & Testimonies', icon: '✨' },
    { id: 'resources', label: 'Faith Resources', icon: '📚' },
    { id: 'outreach', label: 'Community Outreach', icon: '❤️' }
  ];

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
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
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-purple-600" />
                  </div>
                  
                  <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Newsletter!</h1>
                    <p className="text-lg text-gray-600">
                      You're now subscribed to the NewBreed newsletter. Watch your inbox for inspiring 
                      content, upcoming events, and ways to get involved in our community.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg w-full">
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-purple-900 italic text-center">
                        "Let us consider how we may spur one another on toward love and good deeds, 
                        not giving up meeting together, as some are in the habit of doing, 
                        but encouraging one another."
                      </p>
                      <p className="text-sm text-purple-700 text-center">- Hebrews 10:24-25</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Bell className="h-4 w-4" />
                      <span>First newsletter arrives this Sunday!</span>
                    </div>
                    <Button onClick={onBack} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Return to Website
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzbGV0dGVyJTIwZW1haWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Newsletter subscription"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Stay Connected</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join our newsletter to receive weekly updates, inspiring content, and stay connected 
              with everything happening at NewBreed.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-8 sticky top-8">
              {/* Newsletter Benefits */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">What You'll Get</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3 text-sm text-gray-600">
                    <p>• Weekly event updates and announcements</p>
                    <p>• Inspiring devotionals and faith content</p>
                    <p>• Exclusive volunteer opportunities</p>
                    <p>• Community testimonies and stories</p>
                    <p>• Prayer requests and praise reports</p>
                    <p>• Early access to special events</p>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Subscribers</span>
                      </div>
                      <span className="font-bold text-purple-600">3,200+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Frequency</span>
                      </div>
                      <span className="font-bold text-purple-600">Weekly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-purple-600 text-purple-600" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Latest Edition</CardTitle>
                  <CardDescription>From this week's newsletter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-sm text-purple-900 mb-1">
                        "Finding Purpose in God's Plan"
                      </h4>
                      <p className="text-xs text-purple-700">
                        This week's devotional explores how God uses our unique gifts...
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Published 3 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
                <CardDescription>
                  Customize your subscription to receive content that matters to you
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
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Content Preferences */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-gray-900">What interests you?</h3>
                      <p className="text-sm text-gray-600">Select the topics you'd like to hear about</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {newsletterTopics.map((topic) => (
                        <div
                          key={topic.id}
                          className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedTopics.includes(topic.id)
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-300'
                          }`}
                          onClick={() => handleTopicToggle(topic.id)}
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={selectedTopics.includes(topic.id)}
                              onChange={() => {}}
                            />
                            <span className="text-lg">{topic.icon}</span>
                            <span className="text-sm font-medium">{topic.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Preferences */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Additional Preferences</h3>
                    
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <Checkbox id="sms" />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="sms" className="text-sm font-medium text-gray-700 cursor-pointer">
                            SMS notifications for urgent updates
                          </label>
                          <p className="text-xs text-gray-600">
                            Receive text messages for emergency prayer requests and important announcements
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox id="events" defaultChecked />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="events" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Event reminders
                          </label>
                          <p className="text-xs text-gray-600">
                            Get reminders about upcoming events you've registered for
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox id="birthday" />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="birthday" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Birthday celebrations
                          </label>
                          <p className="text-xs text-gray-600">
                            Let us celebrate your special day with you!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number for SMS */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                    <p className="text-xs text-gray-500">
                      Only required if you want SMS notifications
                    </p>
                  </div>

                  {/* Submit Section */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-border">
                    {selectedTopics.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <span className="font-medium text-sm">You'll receive content about:</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedTopics.map((id) => {
                            const topic = newsletterTopics.find(t => t.id === id);
                            return topic ? (
                              <Badge key={id} className="bg-purple-100 text-purple-800">
                                {topic.icon} {topic.label}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-2"
                      size="lg"
                    >
                      <Mail className="h-5 w-5" />
                      Subscribe to Newsletter
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. You can unsubscribe at any time. We'll never share your information.
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