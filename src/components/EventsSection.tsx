import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface EventsSectionProps {
  onRegister?: () => void;
  onViewCalendar?: () => void;
  onViewAllEvents?: () => void;
}

export function EventsSection({ onRegister, onViewCalendar, onViewAllEvents }: EventsSectionProps) {
  const events = [
    {
      id: 1,
      title: 'Sunday Night Service',
      description: 'Join us for an amazing time of worship, powerful teaching, and authentic community.',
      date: 'Every Sunday',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      category: 'Weekly',
      flier: 'https://images.unsplash.com/photo-1577660132239-dbbec995cd97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMHdvcnNoaXAlMjBjb25jZXJ0fGVufDF8fHx8MTc2NTIwNjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      size: 'normal'
    },
    {
      id: 2,
      title: 'Youth Connect Groups',
      description: 'Small groups for deeper relationships and spiritual growth.',
      date: 'Every Wednesday',
      time: '7:00 PM',
      location: 'Various Homes',
      category: 'Weekly',
      flier: 'https://images.unsplash.com/photo-1557199868-02a704b27808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb3VwJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjUyMDYyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'normal'
    },
    {
      id: 3,
      title: 'Game Night Extravaganza',
      description: 'Epic game night with tournaments, prizes, and tons of fun.',
      date: 'March 15, 2025',
      time: '7:00 PM',
      location: 'Church Hall',
      category: 'Special Event',
      flier: 'https://images.unsplash.com/photo-1623333051156-1266602f8e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwZ2FtZXMlMjBuaWdodHxlbnwxfHx8fDE3NjUyMDYyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'normal'
    },
    {
      id: 4,
      title: 'Spring Retreat 2025',
      description: 'A weekend getaway focused on spiritual growth and outdoor adventures.',
      date: 'April 5-7, 2025',
      time: 'Fri 6PM',
      location: 'Mountain Lake Camp',
      category: 'Retreat',
      flier: 'https://images.unsplash.com/photo-1760519738367-ab04dacafcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRyZWF0JTIwb3V0ZG9vciUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUyMDYyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      size: 'normal'
    },
    {
      id: 5,
      title: 'Community Service Day',
      description: 'Making a difference through acts of service and love.',
      date: 'March 30, 2025',
      time: '9:00 AM',
      location: 'Various Locations',
      category: 'Service',
      flier: 'https://images.unsplash.com/photo-1760992004000-69b29eb0384c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjUxODU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'normal'
    },
    {
      id: 6,
      title: 'Worship Night',
      description: 'An evening dedicated to passionate worship and encountering God\'s presence.',
      date: 'April 12, 2025',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      category: 'Worship',
      flier: 'https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY29uY2VydCUyMGhhbmRzJTIwcmFpc2VkfGVufDF8fHx8MTc2NTIwNjI2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'normal'
    }
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
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss out on these amazing opportunities to connect, grow, and have fun together!
              </p>
            </div>
          </div>

          {/* Events Split Card Layout */}
          <div className="flex flex-col gap-8">
            {events.slice(0, 2).map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
                    {/* Image Side */}
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden">
                      <ImageWithFallback
                        src={event.flier}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Image Overlay for Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className={`${getCategoryColor(event.category)} backdrop-blur-sm`}>
                          {event.category}
                        </Badge>
                        {event.featured && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white backdrop-blur-sm">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-6">
                      {/* Title & Description */}
                      <div className="flex flex-col gap-3">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Event Details */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            <Calendar className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Date</span>
                            <span className="font-semibold">{event.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            <Clock className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Time</span>
                            <span className="font-semibold">{event.time}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            <MapPin className="h-5 w-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Location</span>
                            <span className="font-semibold">{event.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex gap-3 mt-2">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300"
                          onClick={onRegister}
                        >
                          Register Now
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={onViewAllEvents}
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={onViewCalendar}
            >
              View Full Calendar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}