import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Play, Download, Calendar, Clock, Search, Filter, Share, BookOpen } from 'lucide-react';

interface SermonsScreenProps {
  onBack: () => void;
}

export function SermonsScreen({ onBack }: SermonsScreenProps) {
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sermonSeries = [
    { id: 'purpose', name: 'Finding Your Purpose', color: 'bg-blue-100 text-blue-800' },
    { id: 'relationships', name: 'Godly Relationships', color: 'bg-pink-100 text-pink-800' },
    { id: 'faith', name: 'Faith in Action', color: 'bg-green-100 text-green-800' },
    { id: 'identity', name: 'Identity in Christ', color: 'bg-purple-100 text-purple-800' },
    { id: 'leadership', name: 'Young Leaders', color: 'bg-orange-100 text-orange-800' }
  ];

  const sermons = [
    {
      id: 1,
      title: "God's Plan for Your Life",
      speaker: "Pastor Mike Johnson",
      series: 'purpose',
      date: '2025-01-05',
      duration: '35 min',
      description: 'Discover how God has a unique plan and purpose for every young person.',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwb3NlJTIwZ29kJTIwcGxhbnxlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: true
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      speaker: "Pastor Sarah Davis",
      series: 'relationships',
      date: '2024-12-29',
      duration: '42 min',
      description: 'Learn biblical principles for creating and maintaining godly relationships.',
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxhdGlvbnNoaXBzJTIwZnJpZW5kc2hpcHxlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false
    },
    {
      id: 3,
      title: "Taking Action in Faith",
      speaker: "Pastor Mark Wilson",
      series: 'faith',
      date: '2024-12-22',
      duration: '38 min',
      description: 'Moving beyond just believing to actively living out your faith.',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWl0aCUyMGFjdGlvbiUyMHlvdW5nfGVufDF8fHx8MTc1NjIwMDY4NXww&ixlib=rb-4.1.0&q=80&w=400',
      featured: false
    },
    {
      id: 4,
      title: "Who You Are in Christ",
      speaker: "Pastor Emily Chen",
      series: 'identity',
      date: '2024-12-15',
      duration: '45 min',
      description: 'Understanding your true identity as a beloved child of God.',
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVudGl0eSUyMGNocmlzdCUyMHlvdW5nfGVufDF8fHx8MTc1NjIwMDY4NXww&ixlib=rb-4.1.0&q=80&w=400',
      featured: true
    },
    {
      id: 5,
      title: "Leading with Integrity",
      speaker: "Pastor David Lee",
      series: 'leadership',
      date: '2024-12-08',
      duration: '40 min',
      description: 'Developing godly leadership skills for the next generation.',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIweW91bmclMjBpbnRlZ3JpdHl8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false
    },
    {
      id: 6,
      title: "Navigating Peer Pressure",
      speaker: "Pastor Sarah Davis",
      series: 'relationships',
      date: '2024-12-01',
      duration: '36 min',
      description: 'Standing firm in your values while maintaining friendships.',
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWVyJTIwcHJlc3N1cmUlMjB5b3VuZ3xlbnwxfHx8fDE3NTYyMDA2ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      featured: false
    }
  ];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSeries = selectedSeries === 'all' || sermon.series === selectedSeries;
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeries && matchesSearch;
  });

  const featuredSermons = sermons.filter(sermon => sermon.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJtb24lMjBwcmVhY2hpbmclMjBjaHVyY2h8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sermon preaching"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Sermons & Messages</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Dive deeper into God's Word with our collection of inspiring messages 
              designed specifically for young hearts seeking truth and purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-12">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search sermons, speakers, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSeries} onValueChange={setSelectedSeries}>
              <SelectTrigger className="w-full sm:w-64">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by series" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Series</SelectItem>
                {sermonSeries.map((series) => (
                  <SelectItem key={series.id} value={series.id}>
                    {series.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Featured Sermons */}
          {selectedSeries === 'all' && searchQuery === '' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-gray-900">Featured Messages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredSermons.map((sermon) => {
                  const series = sermonSeries.find(s => s.id === sermon.series);
                  return (
                    <Card key={sermon.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <ImageWithFallback
                          src={sermon.thumbnail}
                          alt={sermon.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                          <Button size="lg" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                            <Play className="h-6 w-6 mr-2" />
                            Watch Now
                          </Button>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                          Featured
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex flex-col gap-2">
                          <Badge className={`w-fit ${series?.color}`}>
                            {series?.name}
                          </Badge>
                          <CardTitle className="text-xl">{sermon.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 text-sm">
                            <span>{sermon.speaker}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(sermon.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {sermon.duration}
                            </span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{sermon.description}</p>
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <Play className="h-4 w-4 mr-2" />
                            Watch
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Sermons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedSeries === 'all' ? 'All Messages' : `${sermonSeries.find(s => s.id === selectedSeries)?.name} Series`}
              </h2>
              <span className="text-gray-600">{filteredSermons.length} messages</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSermons.map((sermon) => {
                const series = sermonSeries.find(s => s.id === sermon.series);
                return (
                  <Card key={sermon.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <ImageWithFallback
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <Button className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                          <Play className="h-5 w-5 mr-2" />
                          Watch
                        </Button>
                      </div>
                      {sermon.featured && (
                        <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col gap-2">
                        <Badge className={`w-fit text-xs ${series?.color}`}>
                          {series?.name}
                        </Badge>
                        <CardTitle className="text-lg leading-tight">{sermon.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 text-sm text-gray-600">
                          <span>{sermon.speaker}</span>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(sermon.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {sermon.duration}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{sermon.description}</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Play className="h-3 w-3 mr-1" />
                            Watch
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredSermons.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No sermons found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Series Overview */}
          {selectedSeries === 'all' && searchQuery === '' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-gray-900">Sermon Series</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sermonSeries.map((series) => {
                  const seriesSermons = sermons.filter(s => s.series === series.id);
                  return (
                    <Card key={series.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={() => setSelectedSeries(series.id)}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className={series.color}>{series.name}</Badge>
                          <span className="text-sm text-gray-600">{seriesSermons.length} messages</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-3">
                          <div className="grid grid-cols-3 gap-2">
                            {seriesSermons.slice(0, 3).map((sermon, index) => (
                              <div key={index} className="aspect-video bg-gray-200 rounded overflow-hidden">
                                <ImageWithFallback
                                  src={sermon.thumbnail}
                                  alt={sermon.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                          <Button variant="outline" className="w-full">
                            View Series
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}