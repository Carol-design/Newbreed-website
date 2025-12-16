import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Heart, Shield, CreditCard, Clock, CheckCircle, DollarSign } from 'lucide-react';

interface GiveOnlineScreenProps {
  onBack: () => void;
}

export function GiveOnlineScreen({ onBack }: GiveOnlineScreenProps) {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState('monthly');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to NewBreed
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12">
                <div className="flex flex-col items-center gap-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Thank You for Your Gift!</h1>
                    <p className="text-lg text-gray-600">
                      Your generous contribution helps us continue our mission to reach young hearts with God's love.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg w-full">
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-blue-900 italic text-center">
                        "Each of you should give what you have decided in your heart to give, not reluctantly 
                        or under compulsion, for God loves a cheerful giver."
                      </p>
                      <p className="text-sm text-blue-700 text-center">- 2 Corinthians 9:7</p>
                    </div>
                  </div>

                  <Button onClick={onBack} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Return to Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to NewBreed
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXZpbmclMjBoYW5kcyUyMGNoYXJpdHl8ZW58MXx8fHwxNzU2MjAwNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Giving hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Give Online</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your generosity helps us create a space where young people can encounter God, 
              grow in faith, and make a difference in their communities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Giving Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-8 sticky top-8">
              {/* Impact Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Impact</CardTitle>
                  <CardDescription>See how your giving makes a difference</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Youth Reached</span>
                        <span className="text-sm font-bold text-blue-600">2,500+</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Programs Funded</span>
                        <span className="text-sm font-bold text-green-600">15</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Community Events</span>
                        <span className="text-sm font-bold text-purple-600">48</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Secure Giving</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3 text-sm text-gray-600">
                    <p>• 256-bit SSL encryption</p>
                    <p>• PCI compliant processing</p>
                    <p>• Automatic tax receipts</p>
                    <p>• Cancel anytime</p>
                  </div>
                </CardContent>
              </Card>

              {/* Scripture */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex flex-col gap-3">
                  <p className="font-medium text-gray-800 italic">
                    "Remember this: Whoever sows sparingly will also reap sparingly, 
                    and whoever sows generously will also reap generously."
                  </p>
                  <p className="text-sm text-gray-600">- 2 Corinthians 9:6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Giving Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Make a Donation
                </CardTitle>
                <CardDescription>
                  Choose your gift amount and frequency below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Amount Selection */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Select Amount</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {presetAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={selectedAmount === amount ? "default" : "outline"}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className="aspect-square"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="customAmount" className="text-sm font-medium text-gray-700">
                        Or enter custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="customAmount"
                          type="number"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount('');
                          }}
                          placeholder="0.00"
                          className="pl-8"
                          min="1"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Recurring Options */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recurring"
                        checked={isRecurring}
                        onCheckedChange={(checked) => setIsRecurring(checked === true)}
                      />
                      <label htmlFor="recurring" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Make this a recurring donation
                      </label>
                    </div>
                    
                    {isRecurring && (
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Frequency</label>
                        <Select value={frequency} onValueChange={setFrequency}>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Payment Method</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">
                          Card Number *
                        </label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">
                          Expiry Date *
                        </label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="cvv" className="text-sm font-medium text-gray-700">
                          CVV *
                        </label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="zipCode" className="text-sm font-medium text-gray-700">
                          Zip Code *
                        </label>
                        <Input
                          id="zipCode"
                          placeholder="12345"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-gray-900">Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total Amount:</span>
                      <span className="text-2xl font-bold text-green-600">
                        ${customAmount || selectedAmount || '0.00'}
                        {isRecurring && ` / ${frequency}`}
                      </span>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 gap-2"
                      size="lg"
                      disabled={!selectedAmount && !customAmount}
                    >
                      <CreditCard className="h-5 w-5" />
                      Complete Donation
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      You will receive an email receipt for tax purposes. All donations are secure and encrypted.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}