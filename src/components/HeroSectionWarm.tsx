import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Coffee, Calendar, MapPin } from 'lucide-react';
import newBreedLogo from 'figma:asset/b917b32b04eb9543e0537d95537c01906e2ec12e.png';

export function HeroSectionWarm() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute -top-40 -right-40 w-96 h-96 text-orange-200 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.1,-57.1C59.9,-45.6,68.5,-29.2,71.8,-11.5C75.1,6.2,73.1,25.2,64.4,40.8C55.7,56.4,40.3,68.6,22.8,73.2C5.3,77.8,-14.3,74.8,-31.2,66.3C-48.1,57.8,-62.3,43.8,-69.8,26.2C-77.3,8.6,-78.1,-12.6,-72.4,-30.4C-66.7,-48.2,-54.5,-62.6,-39.8,-73.2C-25.1,-83.8,-7.9,-90.6,7.2,-89.8C22.3,-89,44.6,-80.6,47.1,-57.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-32 -left-32 w-80 h-80 text-amber-200 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M41.3,-48.8C54.7,-38.2,67.5,-26.5,71.8,-11.9C76.1,2.7,71.9,20.2,63.2,35.1C54.5,50,41.3,62.3,25.8,69.1C10.3,75.9,-7.5,77.2,-23.8,72.4C-40.1,67.6,-54.9,56.7,-63.4,42.2C-71.9,27.7,-74.1,9.6,-72.2,-7.7C-70.3,-25,-64.3,-41.5,-53.8,-52.8C-43.3,-64.1,-28.3,-70.2,-13.1,-69.8C2.1,-69.4,17.5,-62.5,41.3,-48.8Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-orange-800 text-sm font-medium mb-8">
              <Coffee className="h-4 w-4 mr-2" />
              Come as you are, leave transformed
            </div>

            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Welcome to
              </h1>
              <img src={newBreedLogo} alt="NewBreed" className="h-12 lg:h-16 w-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl text-gray-600 font-normal">Family</h2>
            </div>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              A warm, welcoming community where every young person finds their place, 
              grows in faith, and discovers the joy of authentic relationships centered on Christ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg">
                Join Our Family
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                Visit This Sunday
              </Button>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-orange-100">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sunday Service</div>
                  <div className="text-sm text-gray-600">6:00 PM Weekly</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-orange-100">
                <div className="p-2 bg-amber-100 rounded-full">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Main Sanctuary</div>
                  <div className="text-sm text-gray-600">Main Campus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708578200684-3aa944b73237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NTYxOTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community gathering"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
                  <h3 className="font-bold text-gray-900 mb-2">This Week</h3>
                  <p className="text-sm text-gray-600">Game Night Friday 7PM</p>
                  <p className="text-sm text-gray-600">Small Groups Wednesday</p>
                </div>
              </div>
              <div className="mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631238150753-255c3a2f89e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNodXJjaCUyMHdvcnNoaXAlMjBoYW5kcyUyMHJhaXNlZHxlbnwxfHx8fDE3NTYxOTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Worship service"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}