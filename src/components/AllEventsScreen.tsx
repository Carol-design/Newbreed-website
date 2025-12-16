import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface AllEventsScreenProps {
  onBack: () => void;
  onRegister: () => void;
  onViewCalendar: () => void;
}

export function AllEventsScreen({ onBack, onRegister, onViewCalendar }: AllEventsScreenProps) {
  const events = [
    {
      id: 1,
      title: 'Sunday Night Service',
      description: 'Join us for an amazing time of worship, powerful teaching, and authentic community.',
      date: 'Every Sunday',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      category: 'Weekly',
      flier: 'https://images.unsplash.com/photo-1577660132239-dbbec995cd97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMHdvcnNoaXAlMjBjb25jZXJ0fGVufDF8fHx8MTc2NTIwNjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 2,
      title: 'Youth Connect Groups',
      description: 'Small groups for deeper relationships and spiritual growth.',
      date: 'Every Wednesday',
      time: '7:00 PM',
      location: 'Various Homes',
      category: 'Weekly',
      flier: 'https://images.unsplash.com/photo-1557199868-02a704b27808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb3VwJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjUyMDYyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Game Night Extravaganza',
      description: 'Epic game night with tournaments, prizes, and tons of fun.',
      date: 'March 15, 2025',
      time: '7:00 PM',
      location: 'Church Hall',
      category: 'Special Event',
      flier: 'https://images.unsplash.com/photo-1623333051156-1266602f8e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwZ2FtZXMlMjBuaWdodHxlbnwxfHx8fDE3NjUyMDYyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Spring Retreat 2025',
      description: 'A weekend getaway focused on spiritual growth and outdoor adventures.',
      date: 'April 5-7, 2025',
      time: 'Fri 6PM',
      location: 'Mountain Lake Camp',
      category: 'Retreat',
      flier: 'https://images.unsplash.com/photo-1760519738367-ab04dacafcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRyZWF0JTIwb3V0ZG9vciUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUyMDYyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 5,
      title: 'Community Service Day',
      description: 'Making a difference through acts of service and love.',
      date: 'March 30, 2025',
      time: '9:00 AM',
      location: 'Various Locations',
      category: 'Service',
      flier: 'https://images.unsplash.com/photo-1760992004000-69b29eb0384c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjUxODU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Worship Night',
      description: 'An evening dedicated to passionate worship and encountering God\'s presence.',
      date: 'April 12, 2025',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      category: 'Worship',
      flier: 'https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY29uY2VydCUyMGhhbmRzJTIwcmFpc2VkfGVufDF8fHx8MTc2NTIwNjI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Weekly': return 'bg-blue-500 text-white';
      case 'Special Event': return 'bg-purple-500 text-white';
      case 'Retreat': return 'bg-green-500 text-white';
      case 'Service': return 'bg-orange-500 text-white';
      case 'Worship': return 'bg-pink-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-border z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
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
                  All Events
                </h1>
                <p className="text-muted-foreground text-sm">
                  Browse all upcoming NewBreed events
                </p>
              </div>
            </div>

            {/* View Calendar Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onViewCalendar}
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Calendar View
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {events.length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Total Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-sm text-gray-600 mt-1">Weekly Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3
            </div>
            <div className="text-sm text-gray-600 mt-1">Special Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              1
            </div>
            <div className="text-sm text-gray-600 mt-1">Retreat</div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-[500px] w-full">
                <ImageWithFallback
                  src={event.flier}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top Section - Badges */}
                  <div className="flex items-start justify-between">
                    <Badge className={`${getCategoryColor(event.category)} backdrop-blur-sm shadow-lg`}>
                      {event.category}
                    </Badge>
                    {event.featured && (
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white backdrop-blur-sm shadow-lg">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Bottom Section - Event Info */}
                  <div className="flex flex-col gap-4 transform transition-transform duration-300">
                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white text-sm">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full bg-white text-gray-900 hover:bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRegister();
                      }}
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Check out our interactive calendar to see all upcoming events in one place
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={onViewCalendar}
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Interactive Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}