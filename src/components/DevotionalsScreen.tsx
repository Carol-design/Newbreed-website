import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Heart, Calendar, Clock, BookOpen, Search, Bookmark, Share2, Coffee } from 'lucide-react';

interface DevotionalsScreenProps {
  onBack: () => void;
}

export function DevotionalsScreen({ onBack }: DevotionalsScreenProps) {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const devotionalTopics = [
    { id: 'all', name: 'All Devotionals', color: 'bg-gray-100 text-gray-800' },
    { id: 'identity', name: 'Identity in Christ', color: 'bg-blue-100 text-blue-800' },
    { id: 'purpose', name: 'Life Purpose', color: 'bg-purple-100 text-purple-800' },
    { id: 'relationships', name: 'Relationships', color: 'bg-pink-100 text-pink-800' },
    { id: 'courage', name: 'Courage & Strength', color: 'bg-orange-100 text-orange-800' },
    { id: 'peace', name: 'Peace & Rest', color: 'bg-green-100 text-green-800' },
    { id: 'growth', name: 'Spiritual Growth', color: 'bg-indigo-100 text-indigo-800' }
  ];

  const devotionals = [
    {
      id: 1,
      title: "You Are Fearfully and Wonderfully Made",
      topic: 'identity',
      author: "Pastor Sarah Davis",
      date: "2025-01-10",
      readTime: "3 min",
      verse: "Psalm 139:14",
      excerpt: "In a world that constantly tells us we're not enough, God reminds us of our incredible worth...",
      content: "Full devotional content would go here...",
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVudGl0eSUyMHdvcnRoJTIwZ29kfGVufDF8fHx8MTc1NjIwMDY4NXww&ixlib=rb-4.1.0&q=80&w=400',
      featured: true,
      saved: false
    },
    {
      id: 2,
      title: "God's Plan vs. My Plans",
      topic: 'purpose',
      author: "Pastor Mike Johnson",
      date: "2025-01-09",
      readTime: "4 min",
      verse: "Jeremiah 29:11",
      excerpt: "Sometimes our plans don't align with God's plans, and that's exactly where we need to be...",
      content: "Full devotional content would go here...",
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwb3NlJTIwZ29kJTIwcGxhbnN8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      saved: true
    },
    {
      id: 3,
      title: "Love in Action",
      topic: 'relationships',
      author: "Pastor Emily Chen",
      date: "2025-01-08",
      readTime: "3 min",
      verse: "1 John 4:7-8",
      excerpt: "Love isn't just a feeling - it's a choice we make every day in how we treat others...",
      content: "Full devotional content would go here...",
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwYWN0aW9uJTIwcmVsYXRpb25zaGlwc3xlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: true,
      saved: false
    },
    {
      id: 4,
      title: "Courage for the Unknown",
      topic: 'courage',
      author: "Pastor David Lee",
      date: "2025-01-07",
      readTime: "5 min",
      verse: "Joshua 1:9",
      excerpt: "Stepping into the unknown can be scary, but God promises to be with us every step...",
      content: "Full devotional content would go here...",
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyYWdlJTIwdW5rbm93biUyMGZhaXRofGVufDF8fHx8MTc1NjIwMDY4NXww&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      saved: false
    },
    {
      id: 5,
      title: "Finding Peace in Chaos",
      topic: 'peace',
      author: "Pastor Sarah Davis",
      date: "2025-01-06",
      readTime: "4 min",
      verse: "Philippians 4:6-7",
      excerpt: "When life feels overwhelming, God offers a peace that surpasses all understanding...",
      content: "Full devotional content would go here...",
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZSUyMGNoYW9zJTIwY2FsbXxlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      saved: true
    },
    {
      id: 6,
      title: "Growing Closer to God",
      topic: 'growth',
      author: "Pastor Mike Johnson",
      date: "2025-01-05",
      readTime: "3 min",
      verse: "2 Peter 3:18",
      excerpt: "Spiritual growth isn't about perfection - it's about taking one step closer to God each day...",
      content: "Full devotional content would go here...",
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBzcGlyaXR1YWwlMjBnb2R8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      saved: false
    }
  ];

  const filteredDevotionals = devotionals.filter(devotional => {
    const matchesTopic = selectedTopic === 'all' || devotional.topic === selectedTopic;
    const matchesSearch = devotional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         devotional.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         devotional.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const featuredDevotionals = devotionals.filter(devotional => devotional.featured);
  const savedDevotionals = devotionals.filter(devotional => devotional.saved);

  const todaysDevotional = devotionals[0]; // Most recent

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvdGlvbmFsJTIwcHJheWVyJTIwYmlibGV8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Devotional reading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Daily Devotionals</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Start each day with God's Word. Discover daily devotionals crafted to 
              inspire, challenge, and guide you in your faith journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-8 sticky top-8">
              {/* Today's Devotional */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-lg text-amber-900">Today's Devotional</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="aspect-video bg-amber-100 rounded overflow-hidden">
                      <ImageWithFallback
                        src={todaysDevotional.thumbnail}
                        alt={todaysDevotional.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-amber-900 leading-tight">{todaysDevotional.title}</h4>
                    <p className="text-sm text-amber-800">{todaysDevotional.verse}</p>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      Read Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Devotionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by title, topic, or author..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {devotionalTopics.map((topic) => (
                      <Button
                        key={topic.id}
                        variant={selectedTopic === topic.id ? "default" : "ghost"}
                        onClick={() => setSelectedTopic(topic.id)}
                        className="justify-start w-full"
                      >
                        {topic.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Saved Devotionals */}
              {savedDevotionals.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bookmark className="h-5 w-5" />
                      Saved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      {savedDevotionals.slice(0, 3).map((devotional) => (
                        <div key={devotional.id} className="flex flex-col gap-1">
                          <h5 className="font-medium text-sm leading-tight">{devotional.title}</h5>
                          <p className="text-xs text-gray-600">{devotional.author}</p>
                        </div>
                      ))}
                      {savedDevotionals.length > 3 && (
                        <Button variant="outline" size="sm">
                          View All Saved
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Daily Reminder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Daily Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-gray-600">
                      Get daily devotionals delivered to your email
                    </p>
                    <Button variant="outline" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-12">
              {/* Featured Devotionals */}
              {selectedTopic === 'all' && searchQuery === '' && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-gray-900">Featured Devotionals</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredDevotionals.map((devotional) => {
                      const topic = devotionalTopics.find(t => t.id === devotional.topic);
                      return (
                        <Card key={devotional.id} className="overflow-hidden">
                          <div className="aspect-video relative">
                            <ImageWithFallback
                              src={devotional.thumbnail}
                              alt={devotional.title}
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                              Featured
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                            >
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardHeader>
                            <div className="flex flex-col gap-2">
                              <Badge className={`w-fit ${topic?.color}`}>
                                {topic?.name}
                              </Badge>
                              <CardTitle className="text-xl leading-tight">{devotional.title}</CardTitle>
                              <CardDescription className="flex items-center gap-4 text-sm">
                                <span>{devotional.author}</span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {new Date(devotional.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {devotional.readTime}
                                </span>
                              </CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col gap-4">
                              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-amber-400">
                                <p className="text-sm font-medium text-gray-800">{devotional.verse}</p>
                              </div>
                              <p className="text-gray-600">{devotional.excerpt}</p>
                              <div className="flex gap-2">
                                <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                                  <BookOpen className="h-4 w-4 mr-2" />
                                  Read Now
                                </Button>
                                <Button variant="outline">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* All Devotionals */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedTopic === 'all' ? 'Recent Devotionals' : 
                     devotionalTopics.find(t => t.id === selectedTopic)?.name + ' Devotionals'}
                  </h2>
                  <span className="text-gray-600">{filteredDevotionals.length} devotionals</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDevotionals.map((devotional) => {
                    const topic = devotionalTopics.find(t => t.id === devotional.topic);
                    return (
                      <Card key={devotional.id} className="overflow-hidden">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={devotional.thumbnail}
                            alt={devotional.title}
                            className="w-full h-full object-cover"
                          />
                          {devotional.featured && (
                            <Badge className="absolute top-2 left-2 bg-amber-600 text-white text-xs">
                              Featured
                            </Badge>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`absolute top-2 right-2 backdrop-blur-sm ${
                              devotional.saved ? 'bg-amber-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            <Bookmark className={`h-3 w-3 ${devotional.saved ? 'fill-current' : ''}`} />
                          </Button>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex flex-col gap-2">
                            <Badge className={`w-fit text-xs ${topic?.color}`}>
                              {topic?.name}
                            </Badge>
                            <CardTitle className="text-lg leading-tight">{devotional.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{devotional.author}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {devotional.readTime}
                              </span>
                            </div>
                            <div className="bg-gray-50 p-2 rounded border-l-2 border-amber-400">
                              <p className="text-xs font-medium text-gray-800">{devotional.verse}</p>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">{devotional.excerpt}</p>
                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700">
                                <BookOpen className="h-3 w-3 mr-1" />
                                Read
                              </Button>
                              <Button size="sm" variant="outline">
                                <Share2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {filteredDevotionals.length === 0 && (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No devotionals found</h3>
                    <p className="text-gray-600">Try adjusting your search or selecting a different topic</p>
                  </div>
                )}
              </div>

              {/* Authors */}
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Authors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'Pastor Sarah Davis', devotionals: 15, specialty: 'Identity & Relationships' },
                    { name: 'Pastor Mike Johnson', devotionals: 12, specialty: 'Purpose & Growth' },
                    { name: 'Pastor Emily Chen', devotionals: 18, specialty: 'Peace & Courage' },
                    { name: 'Pastor David Lee', devotionals: 9, specialty: 'Leadership & Character' }
                  ].map((author, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Heart className="h-8 w-8 text-amber-600" />
                        </div>
                        <CardTitle className="text-lg">{author.name}</CardTitle>
                        <CardDescription className="text-sm">{author.specialty}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                          <BookOpen className="h-4 w-4" />
                          <span>{author.devotionals} devotionals</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View All
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}