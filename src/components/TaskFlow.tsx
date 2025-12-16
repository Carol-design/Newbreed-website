import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  User, 
  UserCheck, 
  Users, 
  ArrowRight, 
  ArrowDown,
  Home,
  Info,
  Calendar,
  Heart,
  Mail,
  Play,
  UserPlus,
  CheckCircle,
  Clock
} from 'lucide-react';

export function TaskFlow() {
  const [selectedPersona, setSelectedPersona] = useState('newcomer');

  const personas = [
    {
      id: 'newcomer',
      name: 'New Visitor',
      icon: User,
      description: 'First-time visitor exploring the church',
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      id: 'member',
      name: 'Current Member',
      icon: UserCheck,
      description: 'Active member checking updates',
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      id: 'parent',
      name: 'Parent/Guardian',
      icon: Users,
      description: 'Parent looking for youth programs',
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    }
  ];

  const taskFlows = {
    newcomer: {
      title: "New Visitor Journey",
      description: "First-time exploration of NewBreed",
      steps: [
        {
          id: 1,
          title: "Landing on Homepage",
          description: "User arrives via search, social media, or referral",
          icon: Home,
          actions: ["See hero message", "Notice service times", "Get first impression"],
          nextSteps: ["Learn more about church", "Find upcoming events"]
        },
        {
          id: 2,
          title: "Exploring About Section",
          description: "Understanding church mission and values",
          icon: Info,
          actions: ["Read mission statement", "View community values", "See leadership"],
          nextSteps: ["Check out events", "Look at ministries"]
        },
        {
          id: 3,
          title: "Checking Events",
          description: "Finding ways to get involved immediately",
          icon: Calendar,
          actions: ["Browse upcoming events", "Note service times", "Find newcomer-friendly events"],
          nextSteps: ["Contact church", "Plan first visit"]
        },
        {
          id: 4,
          title: "Making Contact",
          description: "Reaching out with questions or to visit",
          icon: Mail,
          actions: ["Fill contact form", "Get directions", "Save contact info"],
          nextSteps: ["Attend service", "Follow social media"]
        }
      ]
    },
    member: {
      title: "Current Member Journey",
      description: "Regular member checking for updates",
      steps: [
        {
          id: 1,
          title: "Quick Homepage Check",
          description: "Checking for announcements and updates",
          icon: Home,
          actions: ["Look for announcements", "Check upcoming events", "See any changes"],
          nextSteps: ["View specific events", "Check ministry updates"]
        },
        {
          id: 2,
          title: "Event Registration",
          description: "Signing up for events and activities",
          icon: Calendar,
          actions: ["Register for events", "Check dates/times", "RSVP for special events"],
          nextSteps: ["Share with friends", "Add to calendar"]
        },
        {
          id: 3,
          title: "Ministry Involvement",
          description: "Checking ministry opportunities and updates",
          icon: Heart,
          actions: ["View team updates", "Sign up for service", "Check ministry schedules"],
          nextSteps: ["Coordinate with team", "Invite others"]
        },
        {
          id: 4,
          title: "Staying Connected",
          description: "Maintaining community connection",
          icon: Users,
          actions: ["Check social links", "Share events", "Connect with leaders"],
          nextSteps: ["Engage on social media", "Invite friends"]
        }
      ]
    },
    parent: {
      title: "Parent/Guardian Journey",
      description: "Parent evaluating youth programs for their teen",
      steps: [
        {
          id: 1,
          title: "Initial Research",
          description: "Learning about the youth program",
          icon: Home,
          actions: ["Read about youth focus", "Check age appropriateness", "Assess safety/values"],
          nextSteps: ["Dig deeper into programs", "Look at schedule"]
        },
        {
          id: 2,
          title: "Program Deep Dive",
          description: "Understanding specific offerings",
          icon: Heart,
          actions: ["Review ministry teams", "Check activity types", "Read about leadership"],
          nextSteps: ["Check schedule fit", "Plan visit"]
        },
        {
          id: 3,
          title: "Schedule & Logistics",
          description: "Ensuring practical fit for family",
          icon: Clock,
          actions: ["Check service times", "Review event calendar", "Note location/directions"],
          nextSteps: ["Contact with questions", "Plan trial visit"]
        },
        {
          id: 4,
          title: "Making Contact",
          description: "Reaching out to youth leaders",
          icon: Mail,
          actions: ["Contact youth pastors", "Ask specific questions", "Schedule meeting"],
          nextSteps: ["Bring teen to visit", "Start regular attendance"]
        }
      ]
    }
  };

  const currentFlow = taskFlows[selectedPersona as keyof typeof taskFlows];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          NewBreed Website Task Flows
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding how different users navigate through our website to accomplish their goals
        </p>
      </div>

      {/* Persona Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {personas.map((persona) => (
          <Button
            key={persona.id}
            variant={selectedPersona === persona.id ? "default" : "outline"}
            onClick={() => setSelectedPersona(persona.id)}
            className="flex items-center gap-2 h-auto p-4"
          >
            <persona.icon className="h-5 w-5" />
            <div className="text-left">
              <div className="font-semibold">{persona.name}</div>
              <div className="text-xs opacity-75">{persona.description}</div>
            </div>
          </Button>
        ))}
      </div>

      {/* Flow Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentFlow.title}</h2>
        <p className="text-lg text-gray-600">{currentFlow.description}</p>
      </div>

      {/* Task Flow Steps */}
      <div className="space-y-8">
        {currentFlow.steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connector Line */}
            {index < currentFlow.steps.length - 1 && (
              <div className="absolute left-1/2 top-full w-0.5 h-8 bg-gray-300 transform -translate-x-0.5 z-0"></div>
            )}
            
            <Card className="relative z-10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="font-normal">
                        Step {step.id}
                      </Badge>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* User Actions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      User Actions
                    </h4>
                    <ul className="space-y-2">
                      {step.actions.map((action, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Next Steps */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-600" />
                      Possible Next Steps
                    </h4>
                    <ul className="space-y-2">
                      {step.nextSteps.map((nextStep, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 text-purple-500" />
                          {nextStep}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">New Visitor Conversion</h4>
            <p className="text-gray-600">Percentage of visitors who attend a service or event</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Event Engagement</h4>
            <p className="text-gray-600">Number of event views and registrations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Contact Submissions</h4>
            <p className="text-gray-600">Quality inquiries and connection requests</p>
          </div>
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="mt-12 p-8 bg-white border rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Flow Optimization Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Current Strengths</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Clear navigation structure
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Prominent contact information
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Multiple engagement entry points
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Mobile-responsive design
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enhancement Opportunities</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                Add online event registration
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                Include newcomer-specific landing page
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                Add live chat or instant contact
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                Integrate social media feeds
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}