import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, Clock, MapPin, ChevronLeft, ChevronRight, Grid3x3, List } from 'lucide-react';
import { useState } from 'react';

interface FullCalendarScreenProps {
  onBack: () => void;
  onRegister: () => void;
}

export function FullCalendarScreen({ onBack, onRegister }: FullCalendarScreenProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 2)); // March 2025
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const events = [
    {
      id: 1,
      title: 'Sunday Night Service',
      description: 'Join us for an amazing time of worship, powerful teaching, and authentic community.',
      date: 'Every Sunday',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      category: 'Weekly',
      recurring: 'weekly',
      dayOfWeek: 0, // Sunday
      flier: 'https://images.unsplash.com/photo-1577660132239-dbbec995cd97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMHdvcnNoaXAlMjBjb25jZXJ0fGVufDF8fHx8MTc2NTIwNjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Youth Connect Groups',
      description: 'Small groups for deeper relationships and spiritual growth.',
      date: 'Every Wednesday',
      time: '7:00 PM',
      location: 'Various Homes',
      category: 'Weekly',
      recurring: 'weekly',
      dayOfWeek: 3, // Wednesday
      flier: 'https://images.unsplash.com/photo-1557199868-02a704b27808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb3VwJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjUyMDYyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Game Night Extravaganza',
      description: 'Epic game night with tournaments, prizes, and tons of fun.',
      dateObj: new Date(2025, 2, 15),
      date: 'March 15, 2025',
      time: '7:00 PM',
      location: 'Church Hall',
      category: 'Special Event',
      flier: 'https://images.unsplash.com/photo-1623333051156-1266602f8e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwZ2FtZXMlMjBuaWdodHxlbnwxfHx8fDE3NjUyMDYyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Community Service Day',
      description: 'Making a difference through acts of service and love.',
      dateObj: new Date(2025, 2, 30),
      date: 'March 30, 2025',
      time: '9:00 AM',
      location: 'Various Locations',
      category: 'Service',
      flier: 'https://images.unsplash.com/photo-1760992004000-69b29eb0384c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjUxODU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Spring Retreat 2025',
      description: 'A weekend getaway focused on spiritual growth and outdoor adventures.',
      dateObj: new Date(2025, 3, 5),
      date: 'April 5-7, 2025',
      time: 'Fri 6PM',
      location: 'Mountain Lake Camp',
      category: 'Retreat',
      multiDay: true,
      endDate: new Date(2025, 3, 7),
      flier: 'https://images.unsplash.com/photo-1760519738367-ab04dacafcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRyZWF0JTIwb3V0ZG9vciUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUyMDYyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Worship Night',
      description: 'An evening dedicated to passionate worship and encountering God\'s presence.',
      dateObj: new Date(2025, 3, 12),
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

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const getEventsForDay = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const dayDate = new Date(year, month, day);
    const dayOfWeek = dayDate.getDay();

    return events.filter(event => {
      // Recurring weekly events
      if (event.recurring === 'weekly' && event.dayOfWeek === dayOfWeek) {
        return true;
      }
      
      // Single day events
      if (event.dateObj && !event.multiDay) {
        return event.dateObj.getDate() === day && 
               event.dateObj.getMonth() === month && 
               event.dateObj.getFullYear() === year;
      }
      
      // Multi-day events
      if (event.dateObj && event.multiDay && event.endDate) {
        return dayDate >= event.dateObj && dayDate <= event.endDate;
      }
      
      return false;
    });
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const renderCalendarView = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="min-h-[120px] bg-gray-50 border border-gray-200"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day);
      const isToday = new Date().getDate() === day && 
                      new Date().getMonth() === currentMonth.getMonth() &&
                      new Date().getFullYear() === currentMonth.getFullYear();

      days.push(
        <div
          key={day}
          className={`min-h-[120px] border border-gray-200 p-2 hover:bg-gray-50 transition-colors ${
            isToday ? 'bg-blue-50 border-blue-300' : 'bg-white'
          }`}
        >
          <div className={`text-sm mb-2 ${isToday ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                className={`text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 ${getCategoryColor(event.category)}`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-xs text-gray-500 pl-1">
                +{dayEvents.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Week day headers */}
        <div className="grid grid-cols-7 bg-gray-100">
          {weekDays.map(day => (
            <div key={day} className="p-3 text-center font-semibold text-gray-700 border-b border-gray-200">
              {day}
            </div>
          ))}
        </div>
        {/* Calendar grid */}
        <div className="grid grid-cols-7">
          {days}
        </div>
      </div>
    );
  };

  const renderListView = () => {
    const allEvents = [...events].sort((a, b) => {
      if (a.recurring === 'weekly' && b.recurring !== 'weekly') return -1;
      if (a.recurring !== 'weekly' && b.recurring === 'weekly') return 1;
      if (a.dateObj && b.dateObj) return a.dateObj.getTime() - b.dateObj.getTime();
      return 0;
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allEvents.map((event) => (
          <div
            key={event.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-[400px] w-full">
              <ImageWithFallback
                src={event.flier}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top Badge */}
                <div className="flex items-start justify-start">
                  <Badge className={`${getCategoryColor(event.category)} backdrop-blur-sm`}>
                    {event.category}
                  </Badge>
                </div>

                {/* Bottom Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="flex flex-col gap-2 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                    onClick={onRegister}
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-border z-10">
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
                  Events Calendar
                </h1>
                <p className="text-muted-foreground text-sm">
                  View all upcoming NewBreed events
                </p>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'calendar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('calendar')}
                className="flex items-center gap-2"
              >
                <Grid3x3 className="h-4 w-4" />
                Calendar
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="flex items-center gap-2"
              >
                <List className="h-4 w-4" />
                List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {viewMode === 'calendar' ? (
          <>
            {/* Calendar Controls */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl">{monthName}</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentMonth(new Date())}
                >
                  Today
                </Button>
                <Button variant="outline" size="sm" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Calendar */}
            {renderCalendarView()}

            {/* Legend */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-gray-700">Event Types:</span>
              {['Weekly', 'Special Event', 'Retreat', 'Service', 'Worship'].map(category => (
                <div key={category} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${getCategoryColor(category)}`}></div>
                  <span className="text-sm text-gray-600">{category}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl">All Events</h2>
              <p className="text-muted-foreground mt-2">Browse all upcoming events</p>
            </div>
            {renderListView()}
          </>
        )}
      </div>
    </div>
  );
}
