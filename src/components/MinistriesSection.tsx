import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Music, Heart, Zap, Globe, Mic, Camera } from 'lucide-react';

interface MinistriesSectionProps {
  onJoinCommunity?: () => void;
}

export function MinistriesSection({ onJoinCommunity }: MinistriesSectionProps) {
  const ministries = [
    {
      id: 1,
      title: 'Worship Team',
      description: 'Join our passionate worship team and help lead others into God\'s presence through music.',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1726679402113-beb32b857a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8Y2h1cmNoJTIweW91dGglMjBncm91cCUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzU2MTk5NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Vocals', 'Instruments', 'Production', 'Songwriting']
    },
    {
      id: 2,
      title: 'Care Team',
      description: 'Be part of a team that shows God\'s love through caring for others in practical ways.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1742497360477-93195f2e5bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBpbnRlcmlvciUyMHlvdXRofGVufDF8fHx8MTc1NjE5OTQ5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Prayer Ministry', 'Hospitality', 'Welcome Team', 'Support Groups']
    },
    {
      id: 3,
      title: 'Next Gen Leaders',
      description: 'Develop your leadership skills and help shape the future of our youth ministry.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1708578200684-3aa944b73237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NTYxOTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Leadership Training', 'Event Planning', 'Small Group Leaders', 'Mentorship']
    },
    {
      id: 4,
      title: 'Mission Team',
      description: 'Take the love of Jesus beyond our walls and make a difference in our community and world.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1631238150753-255c3a2f89e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNodXJjaCUyMHdvcnNoaXAlMjBoYW5kcyUyMHJhaXNlZHxlbnwxfHx8fDE3NTYxOTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Community Service', 'Mission Trips', 'Outreach Events', 'Social Justice']
    },
    {
      id: 5,
      title: 'Media Team',
      description: 'Use your creative skills to capture and share the amazing things God is doing.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1726679402113-beb32b857a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8Y2h1cmNoJTIweW91dGglMjBncm91cCUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzU2MTk5NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Photography', 'Videography', 'Social Media', 'Graphic Design']
    },
    {
      id: 6,
      title: 'Teaching Team',
      description: 'Share God\'s Word and help others grow in their faith journey.',
      icon: Mic,
      image: 'https://images.unsplash.com/photo-1742497360477-93195f2e5bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBpbnRlcmlvciUyMHlvdXRofGVufDF8fHx8MTc1NjE5OTQ5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Youth Messages', 'Bible Studies', 'Workshops', 'Discipleship']
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="text-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Get Involved
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover your passion and find your place in our ministry teams. 
                Every gift matters and every person has a role to play!
              </p>
            </div>
          </div>

          {/* Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <Card key={ministry.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <ministry.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{ministry.title}</h3>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <CardDescription className="text-base">{ministry.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-gray-900">What we do:</h4>
                      <div className="flex flex-wrap gap-2">
                        {ministry.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-auto" onClick={onJoinCommunity}>
                      Join This Team
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-gray-900">Not Sure Where to Start?</h3>
                <p className="text-gray-600">
                  Take our quick ministry gifts assessment to discover where your passions and abilities 
                  can make the biggest impact in our community.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" onClick={onJoinCommunity}>
                  Take Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}