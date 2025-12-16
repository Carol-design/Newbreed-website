import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, BookOpen, Star } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Love & Acceptance',
      description: 'We believe every young person deserves to be loved unconditionally and accepted just as they are.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building authentic relationships and creating a family where everyone belongs and grows together.'
    },
    {
      icon: BookOpen,
      title: 'Biblical Foundation',
      description: 'Grounding our lives in God\'s Word and applying biblical truths to everyday challenges.'
    },
    {
      icon: Star,
      title: 'Purpose & Calling',
      description: 'Helping young people discover their unique purpose and calling in God\'s amazing plan.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="text-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NewBreed is more than a youth group - we're a family of young believers passionate about 
                following Jesus and making a difference in our generation.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <div className="flex flex-col gap-6">
                <p className="text-lg text-gray-700">
                  To raise up a new generation of young people who are deeply rooted in faith, 
                  equipped for purpose, and passionate about transforming their communities through God's love.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that young people are not just the church of tomorrow - they are the church of today, 
                  with incredible potential to impact the world around them.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Don't let anyone look down on you because you are young, but set an example for the believers 
                    in speech, in conduct, in love, in faith and in purity."
                  </p>
                  <p className="text-sm text-gray-600">- 1 Timothy 4:12</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708578200684-3aa944b73237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYxOTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Young people community gathering"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex flex-col gap-4 text-center">
                    <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}