import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles, Users, Heart } from 'lucide-react';

export function HeroSectionModern() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Sparkles className="h-6 w-6 text-yellow-300" />
        </div>
        <div className="absolute top-32 right-16 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Users className="h-6 w-6 text-blue-300" />
        </div>
        <div className="absolute bottom-32 left-20 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Heart className="h-6 w-6 text-pink-300" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            Where faith meets the future
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              NewBreed
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            A next-generation faith community where young hearts discover their divine purpose through 
            innovative worship, authentic relationships, and cutting-edge ministry.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none shadow-lg">
              Experience NewBreed
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Virtual Tour
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Live Streaming', desc: 'Join from anywhere', icon: '🎥' },
              { title: 'Community App', desc: 'Stay connected 24/7', icon: '📱' },
              { title: 'Interactive Worship', desc: 'Engage in new ways', icon: '🎵' }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add keyframe animations using CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `
      }} />
    </section>
  );
}