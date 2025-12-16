import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onJoinCommunity?: () => void;
}

export function HeroSection({ onJoinCommunity }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1631238150753-255c3a2f89e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYxOTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Youth worship with hands raised"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Welcome to NewBreed
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            A vibrant community where young hearts encounter God's love, purpose, and endless possibilities
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none"
            onClick={onJoinCommunity}
          >
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Service Info */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 text-lg">
            <Calendar className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <span>Sundays at 6:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}