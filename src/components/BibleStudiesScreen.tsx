import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, BookOpen, Users, Calendar, Clock, Download, CheckCircle, Star } from 'lucide-react';

interface BibleStudiesScreenProps {
  onBack: () => void;
}

export function BibleStudiesScreen({ onBack }: BibleStudiesScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const studyCategories = [
    { id: 'all', name: 'All Studies', color: 'bg-gray-100 text-gray-800' },
    { id: 'beginner', name: 'New to Faith', color: 'bg-green-100 text-green-800' },
    { id: 'relationships', name: 'Relationships', color: 'bg-pink-100 text-pink-800' },
    { id: 'purpose', name: 'Life Purpose', color: 'bg-blue-100 text-blue-800' },
    { id: 'character', name: 'Character Building', color: 'bg-purple-100 text-purple-800' },
    { id: 'leadership', name: 'Leadership', color: 'bg-orange-100 text-orange-800' }
  ];

  const bibleStudies = [
    {
      id: 1,
      title: "Foundations of Faith",
      category: 'beginner',
      duration: '6 weeks',
      participants: 45,
      level: 'Beginner',
      description: 'Perfect for new believers or those wanting to strengthen their foundation in Christ.',
      lessons: 6,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZm91bmRhdGlvbnN8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=400',
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: "Biblical Dating & Relationships",
      category: 'relationships',
      duration: '8 weeks',
      participants: 62,
      level: 'Intermediate',
      description: 'Discover God\'s design for healthy relationships and biblical principles for dating.',
      lessons: 8,
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxhdGlvbnNoaXBzJTIwYmlibGljYWx8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      rating: 4.8
    },
    {
      id: 3,
      title: "Discovering Your Calling",
      category: 'purpose',
      duration: '4 weeks',
      participants: 38,
      level: 'All Levels',
      description: 'Explore how God has uniquely gifted you and discover your purpose in His kingdom.',
      lessons: 4,
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwb3NlJTIwY2FsbGluZyUyMGdvZHxlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: true,
      rating: 4.7
    },
    {
      id: 4,
      title: "Building Godly Character",
      category: 'character',
      duration: '10 weeks',
      participants: 29,
      level: 'Intermediate',
      description: 'Deep dive into the fruit of the Spirit and developing Christ-like character.',
      lessons: 10,
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBnb2RseSUyMGZydWl0fGVufDF8fHx8MTc1NjIwMDY4NXww&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      rating: 4.9
    },
    {
      id: 5,
      title: "Young Leaders Rising",
      category: 'leadership',
      duration: '12 weeks',
      participants: 24,
      level: 'Advanced',
      description: 'Intensive leadership development based on biblical principles and modern application.',
      lessons: 12,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIweW91bmclMjBiaWJsaWNhbHxlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      rating: 4.8
    },
    {
      id: 6,
      title: "Prayer & Spiritual Warfare",
      category: 'character',
      duration: '6 weeks',
      participants: 33,
      level: 'Intermediate',
      description: 'Learn the power of prayer and how to stand firm in spiritual battles.',
      lessons: 6,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBzcGlyaXR1YWwlMjB3YXJmYXJlfGVufDF8fHx8MTc1NjIwMDY4NXww&ixlib=rb-4.1.0&q=80&w=400',
      featured: false,
      rating: 4.6
    }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? bibleStudies 
    : bibleStudies.filter(study => study.category === selectedCategory);

  const featuredStudies = bibleStudies.filter(study => study.featured);

  const upcomingSession = {
    title: "Foundations of Faith - Week 3",
    date: "Sunday, January 12, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Youth Room & Online"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bible study group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Bible Studies</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Grow deeper in your faith through interactive Bible studies designed to 
              challenge, encourage, and equip young believers for life's journey.
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
              {/* Next Session */}
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-lg text-emerald-900">Next Session</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3 text-emerald-800">
                    <h4 className="font-medium">{upcomingSession.title}</h4>
                    <div className="flex flex-col gap-1 text-sm">
                      <span>{upcomingSession.date}</span>
                      <span>{upcomingSession.time}</span>
                      <span>{upcomingSession.location}</span>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Join Session
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Study Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {studyCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        onClick={() => setSelectedCategory(category.id)}
                        className="justify-start w-full"
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Study Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="justify-start w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Study Guides
                    </Button>
                    <Button variant="outline" className="justify-start w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Reading Plans
                    </Button>
                    <Button variant="outline" className="justify-start w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Study Groups
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Studies</span>
                      <span className="font-bold text-emerald-600">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Participants</span>
                      <span className="font-bold text-emerald-600">231</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Completed Studies</span>
                      <span className="font-bold text-emerald-600">1,450+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-12">
              {/* Featured Studies */}
              {selectedCategory === 'all' && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-gray-900">Featured Studies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredStudies.map((study) => {
                      const category = studyCategories.find(c => c.id === study.category);
                      return (
                        <Card key={study.id} className="overflow-hidden">
                          <div className="aspect-video relative">
                            <ImageWithFallback
                              src={study.thumbnail}
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                              Featured
                            </Badge>
                            <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {study.rating}
                            </div>
                          </div>
                          <CardHeader>
                            <div className="flex flex-col gap-2">
                              <Badge className={`w-fit ${category?.color}`}>
                                {category?.name}
                              </Badge>
                              <CardTitle className="text-xl">{study.title}</CardTitle>
                              <CardDescription className="flex items-center gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {study.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {study.participants} joined
                                </span>
                                <Badge variant="outline">{study.level}</Badge>
                              </CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">{study.description}</p>
                            <div className="flex gap-2">
                              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                                Join Study
                              </Button>
                              <Button variant="outline">
                                Learn More
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* All Studies */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All Bible Studies' : 
                     studyCategories.find(c => c.id === selectedCategory)?.name + ' Studies'}
                  </h2>
                  <span className="text-gray-600">{filteredStudies.length} studies</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStudies.map((study) => {
                    const category = studyCategories.find(c => c.id === study.category);
                    return (
                      <Card key={study.id} className="overflow-hidden">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={study.thumbnail}
                            alt={study.title}
                            className="w-full h-full object-cover"
                          />
                          {study.featured && (
                            <Badge className="absolute top-2 left-2 bg-emerald-600 text-white text-xs">
                              Featured
                            </Badge>
                          )}
                          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {study.rating}
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex flex-col gap-2">
                            <Badge className={`w-fit text-xs ${category?.color}`}>
                              {category?.name}
                            </Badge>
                            <CardTitle className="text-lg leading-tight">{study.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {study.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {study.participants}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {study.level}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">{study.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{study.lessons} lessons</span>
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                Join Study
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {filteredStudies.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No studies found</h3>
                    <p className="text-gray-600">Try selecting a different category</p>
                  </div>
                )}
              </div>

              {/* Study Leaders */}
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-gray-900">Study Leaders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Pastor Sarah Davis', expertise: 'Relationships & Purpose', studies: 8 },
                    { name: 'Pastor Mike Johnson', expertise: 'Leadership & Character', studies: 6 },
                    { name: 'Pastor Emily Chen', expertise: 'New Believers & Foundations', studies: 5 }
                  ].map((leader, index) => (
                    <Card key={index}>
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Users className="h-8 w-8 text-emerald-600" />
                        </div>
                        <CardTitle className="text-lg">{leader.name}</CardTitle>
                        <CardDescription>{leader.expertise}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                          <BookOpen className="h-4 w-4" />
                          <span>{leader.studies} studies led</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View Studies
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