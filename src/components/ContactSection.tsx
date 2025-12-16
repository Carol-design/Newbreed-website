import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['NewBreed Youth Church', 'Accra, Ghana'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+233 24 123 4567', '+233 50 987 6543'],
      action: 'Call Us'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@newbreedyouth.org', 'connect@newbreedyouth.org'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Service Times',
      details: ['Sunday: 8:00 AM & 6:00 PM', 'Wednesday: 6:00 PM'],
      action: 'View Schedule'
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@newbreedyouth' },
    { icon: Youtube, name: 'YouTube', handle: 'NewBreed Youth' },
    { icon: Facebook, name: 'Facebook', handle: 'NewBreed Youth Ghana' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="text-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We'd love to hear from you! Reach out with questions, prayer requests, 
                or just to say hello. We're here for you.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            {info.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex-1">
                      <social.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-gray-900">{social.name}</p>
                        <p className="text-sm text-gray-600">{social.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Have a question or want to get involved? We'd love to hear from you!
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone (Optional)
                      </label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us what's on your heart..." 
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Find Us</h3>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center flex flex-col gap-4">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto" />
                <div className="flex flex-col gap-1">
                  <p className="text-gray-600">Interactive map would be here</p>
                  <p className="text-sm text-gray-500">NewBreed Youth Church, Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}