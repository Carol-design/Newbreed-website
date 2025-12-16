import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Palette, Eye, X, Workflow, ArrowRight } from 'lucide-react';

interface DesignToggleProps {
  showDesignDemo: boolean;
  setShowDesignDemo: (show: boolean) => void;
  showTaskFlow?: boolean;
  setShowTaskFlow?: (show: boolean) => void;
}

export function DesignToggle({ 
  showDesignDemo, 
  setShowDesignDemo, 
  showTaskFlow = false, 
  setShowTaskFlow 
}: DesignToggleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (showDesignDemo || showTaskFlow) {
    return (
      <div className="fixed top-8 left-8 z-[999] flex gap-3">
        <Button 
          onClick={() => {
            setShowDesignDemo(false);
            if (setShowTaskFlow) setShowTaskFlow(false);
          }}
          className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl border-2 border-gray-200"
          size="lg"
        >
          <Eye className="h-5 w-5 mr-2" />
          Back to Website
        </Button>
        
        {showDesignDemo && setShowTaskFlow && (
          <Button 
            onClick={() => {
              setShowDesignDemo(false);
              setShowTaskFlow(true);
            }}
            variant="outline"
            className="bg-white shadow-2xl border-2 border-blue-200"
            size="lg"
          >
            <Workflow className="h-5 w-5 mr-2" />
            View Task Flow
          </Button>
        )}
        
        {showTaskFlow && (
          <Button 
            onClick={() => {
              setShowTaskFlow(false);
              setShowDesignDemo(true);
            }}
            variant="outline"
            className="bg-white shadow-2xl border-2 border-purple-200"
            size="lg"
          >
            <Palette className="h-5 w-5 mr-2" />
            View Designs
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {isExpanded ? (
        <Card className="shadow-2xl border-2 border-purple-200 w-80">
          <CardContent className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Explore NewBreed</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-600">
                Explore different design options and understand user journeys through the website
              </p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={() => {
                    setShowDesignDemo(true);
                    setIsExpanded(false);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    Design Variations
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                {setShowTaskFlow && (
                  <Button 
                    onClick={() => {
                      setShowTaskFlow(true);
                      setIsExpanded(false);
                    }}
                    variant="outline"
                    className="w-full justify-between border-blue-200 hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-2">
                      <Workflow className="h-4 w-4" />
                      User Task Flow
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <Palette className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}