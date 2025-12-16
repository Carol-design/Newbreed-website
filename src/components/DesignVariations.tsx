import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { HeroSection } from './HeroSection';
import { HeroSectionMinimal } from './HeroSectionMinimal';
import { HeroSectionModern } from './HeroSectionModern';
import { HeroSectionWarm } from './HeroSectionWarm';
import { Palette, Sparkles, Heart, Zap } from 'lucide-react';

export function DesignVariations() {
  const [selectedDesign, setSelectedDesign] = useState('original');

  const designs = [
    {
      id: 'original',
      name: 'Original',
      description: 'Bold and dynamic with vibrant gradients',
      icon: Zap,
      component: HeroSection,
      preview: 'bg-gradient-to-r from-blue-600 to-purple-600'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Clean typography with subtle patterns',
      icon: Palette,
      component: HeroSectionMinimal,
      preview: 'bg-gradient-to-br from-slate-50 to-blue-50 border'
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Tech-forward with glass morphism effects',
      icon: Sparkles,
      component: HeroSectionModern,
      preview: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'
    },
    {
      id: 'warm',
      name: 'Warm',
      description: 'Community-focused with earthy tones',
      icon: Heart,
      component: HeroSectionWarm,
      preview: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border'
    }
  ];

  const CurrentHeroComponent = designs.find(d => d.id === selectedDesign)?.component || HeroSection;

  return (
    <div className="min-h-screen">
      {/* Design Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border p-4 max-w-sm">
        <h3 className="font-bold text-gray-900 mb-3">Design Variations</h3>
        <div className="grid grid-cols-2 gap-2">
          {designs.map((design) => (
            <Button
              key={design.id}
              variant={selectedDesign === design.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDesign(design.id)}
              className="h-auto p-3 flex flex-col items-center gap-2"
            >
              <div className={`w-full h-8 rounded ${design.preview}`}></div>
              <span className="text-xs">{design.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Current Design */}
      <CurrentHeroComponent />

      {/* Design Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              NewBreed Design Variations
            </h2>
            <p className="text-lg text-gray-600">
              Choose the design that best represents your church's personality and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.map((design) => (
              <Card 
                key={design.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedDesign === design.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedDesign(design.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-full h-24 rounded-lg mb-4 ${design.preview}`}></div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <design.icon className="h-5 w-5" />
                    <CardTitle className="text-lg">{design.name}</CardTitle>
                  </div>
                  <CardDescription>{design.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={selectedDesign === design.id ? "default" : "outline"}
                    size="sm" 
                    className="w-full"
                  >
                    {selectedDesign === design.id ? 'Selected' : 'Select'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Characteristics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Visual Style</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Original: Bold gradients and dynamic energy</li>
                  <li>• Minimal: Clean lines and subtle elegance</li>
                  <li>• Modern: Tech-forward with animated elements</li>
                  <li>• Warm: Organic shapes and earthy tones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Original: Energetic, contemporary churches</li>
                  <li>• Minimal: Traditional churches with modern values</li>
                  <li>• Modern: Tech-savvy, innovation-focused</li>
                  <li>• Warm: Community-centered, family-oriented</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}