import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { 
  Calculator, 
  TrendingUp, 
  FileCheck, 
  Bot, 
  ArrowRight, 
  CheckCircle,
  Users,
  Building,
  DollarSign,
  Home,
  Hammer,
  Target,
  Sparkles,
  Play,
  AlertTriangle,
  Clock
} from "lucide-react";
import { useLocation, Link } from "wouter";

const waitlistUrl = import.meta.env.VITE_WAITLIST_URL || "#";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSignup = () => {
    if (waitlistUrl !== "#") {
      window.open(waitlistUrl, '_blank');
    } else {
      // Fallback for demo - simulate signup
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleConsumerMode = () => {
    setLocation("/consumer");
  };

  const handleProMode = () => {
    setLocation("/pro");
  };

  const handleDemoAccess = () => {
    setLocation("/dashboard?demo=true");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:to-indigo-400/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Now in Early Access
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-green-300 mb-4 leading-tight">
              BuildAIde
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6 leading-tight text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your AI-Powered Construction & Renovation Assistant
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed text-center font-semibold">
              Plan smarter, estimate faster, and make informed decisions with our AI tools - whether you're a contractor or a homeowner.
            </p>

            <div className="flex flex-col items-center mb-12 px-4">
              {/* Mode Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl mb-8">
                <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 cursor-pointer group dark:border-orange-600 dark:hover:border-orange-500">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-200 transition-colors dark:bg-orange-900 dark:group-hover:bg-orange-800">
                      <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 dark:text-orange-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">I'm a Contractor/Pro</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                      <strong>Win more bids with estimates</strong> • Prevent costly overruns with real-time price alerts • Get instant expert guidance at a fraction of the cost
                    </p>
                    <Button
                      onClick={handleProMode}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <span className="block sm:hidden">Get AI Estimate in 2 Min</span>
                      <span className="hidden sm:block">Get Your First AI Estimate in 2 Minutes</span>
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">14-day free trial • No credit card required</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer group dark:border-blue-600 dark:hover:border-blue-500">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors dark:bg-blue-900 dark:group-hover:bg-blue-800">
                      <Home className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">I'm a Homeowner/Investor</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                      <strong>Avoid costly renovation mistakes</strong> • Find profitable investment properties instantly • Get professional-grade insights without the consultant fees
                    </p>
                    <Button
                      onClick={handleConsumerMode}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <span className="block sm:hidden">Start Journey (Free)</span>
                      <span className="hidden sm:block">Start Your Renovation Journey (Free)</span>
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Setup takes 60 seconds • Cancel anytime</p>
                  </CardContent>
                </Card>
              </div>

              {/* Secondary Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <Button
                    onClick={() => setLocation("/consumer")}
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 hover:border-blue-500 px-6 py-3 text-base font-semibold transition-all duration-300"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Try Interactive Demo
                  </Button>
                  <p className="text-xs text-slate-500 mt-1">coming soon</p>
                </div>
                
                <Button
                  onClick={handleWaitlistSignup}
                  variant="ghost"
                  size="lg"
                  className="text-blue-600 hover:text-blue-700 px-6 py-3 text-base font-semibold"
                >
                  Join Early Access List
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                No Credit Card
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Free Trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Early Access Pricing
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Point Section */}
      <div className="bg-red-50 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Stop These Costly Mistakes Before They Happen
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">The hidden costs that are killing your profits right now</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">No More Underbidding</h3>
              <p className="text-slate-600 dark:text-slate-300">Stop losing money on projects that cost more than you quoted. Our AI prevents the estimation errors that kill profit margins.</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">No More Permit Surprises</h3>
              <p className="text-slate-600 dark:text-slate-300">Avoid project delays and unexpected fees. Get permit requirements upfront so you can plan and budget accurately from day one.</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">No More Material Waste</h3>
              <p className="text-slate-600 dark:text-slate-300">Stop over-ordering materials and eating into profits. Smart recommendations ensure you buy exactly what you need, when you need it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            🧰 What You Can Do with BuildAIde
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive tools for every stage of your construction or renovation project
          </p>
        </div>

        {/* Professional/Contractor Tools */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4">
              <Hammer className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">🔧 Professional Tools</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">Advanced features for contractors, builders, and construction professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/estimator">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🧮 Project Estimator</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Generate detailed project estimates with AI-powered cost analysis and comprehensive breakdowns.</p>
              </Card>
            </Link>

            <Link href="/bid-generator">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <FileCheck className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">📝 Bid Generator</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Create professional bid proposals with AI-powered writing and legal compliance features.</p>
              </Card>
            </Link>

            <Link href="/scheduler">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Building className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">📅 Schedule Builder</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Plan and optimize project timelines with intelligent scheduling and resource management.</p>
              </Card>
            </Link>

            <Link href="/material-prices">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">📦 Material Price Center</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Track material costs with real-time pricing data and AI-powered cost optimization suggestions.</p>
              </Card>
            </Link>

            <Link href="/ai-assistant">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🤖 Construction AI Assistant</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Get instant expert guidance at a fraction of the cost with AI-powered construction advice and project insights.</p>
              </Card>
            </Link>

            <Link href="/subcontractor-tracker">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🔍 Subcontractor Tracker</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Manage subcontractors with AI-powered matching by location, trade, and performance history.</p>
              </Card>
            </Link>

            <Link href="/lead-finder">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">📬 Lead Finder</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Discover profitable project leads with AI analysis of investment potential and market opportunities.</p>
              </Card>
            </Link>
            
            <Link href="/expense-tracker">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">💰 AI Expense Tracker</h4>
                  <Badge className="ml-2 bg-green-100 text-green-800 text-xs">NEW</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Track project expenses in real-time with intelligent cost analysis and budget monitoring for both pros and homeowners.</p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Homeowner/Consumer Tools */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">🏠 Homeowner Tools</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">Smart planning tools for homeowners, investors, and DIY enthusiasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/budget-planner">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🧮 Budget Planner</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Plan your renovation costs with smart budget breakdowns and AI-powered recommendations.</p>
              </Card>
            </Link>

            <Link href="/investment-roi-tool">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">📈 ROI Calculator</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Calculate investment returns and profit margins with comprehensive ROI analysis and market insights.</p>
              </Card>
            </Link>

            <Link href="/permit-research">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <FileCheck className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🗺️ Permit Research Tool</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Research permit requirements for your project with AI-powered location and project type analysis.</p>
              </Card>
            </Link>

            <Link href="/renovation-concierge">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Sparkles className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🧞 Renovation Concierge</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Get comprehensive project planning with AI-generated timelines, budgets, and step-by-step guidance.</p>
              </Card>
            </Link>

            <Link href="/homeowner-chat">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">💬 Homeowner AI Chat</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ask questions about renovation projects and get expert AI advice in real-time conversations.</p>
              </Card>
            </Link>

            <Link href="/properties">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Home className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🏘️ Property Search and Flip Analyzer</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Analyze investment properties with AI-powered market insights and renovation opportunity assessments.</p>
              </Card>
            </Link>

            <Link href="/contractor-comparison">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">🧾 Contractor Quote Comparison</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare contractor quotes with AI analysis to identify the best value and potential red flags.</p>
              </Card>
            </Link>
            
            <Link href="/expense-tracker">
              <Card className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">💰 AI Expense Tracker</h4>
                  <Badge className="ml-2 bg-green-100 text-green-800 text-xs">NEW</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Track renovation expenses in real-time with intelligent cost analysis and budget monitoring.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From first estimate to final inspection, we've got the tools that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 hover:shadow-lg transition-all duration-300 dark:bg-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Smart Estimating</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                AI-powered cost calculations with real market data. No more guessing on bids.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 dark:border-slate-600 hover:border-green-300 hover:shadow-lg transition-all duration-300 dark:bg-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">ROI Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Instant profit projections and market insights for every project decision.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 dark:border-slate-600 hover:border-purple-300 hover:shadow-lg transition-all duration-300 dark:bg-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Permit Planning</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Automated permit research and requirements for any location.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 dark:border-slate-600 hover:border-orange-300 hover:shadow-lg transition-all duration-300 dark:bg-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Assistant</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Expert construction advice and insights, available 24/7.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Built for Smarter Projects
            </h2>
            <p className="text-xl text-slate-600">
              Designed for contractors, homeowners, and investors who want to plan with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <div className="font-bold text-blue-600 text-lg mb-1">Estimate Smarter</div>
              <div className="text-slate-600">Ballpark costs in minutes using AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📅</div>
              <div className="font-bold text-green-600 text-lg mb-1">Save Time</div>
              <div className="text-slate-600">Generate quotes, bids, and timelines automatically</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="font-bold text-purple-600 text-lg mb-1">Maximize ROI</div>
              <div className="text-slate-600">Compare renovations and prioritize high-return upgrades</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Smarter?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our early access program and get premium features at launch pricing.
            Limited spots available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWaitlistSignup}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {submitted ? (
                <>
                  <CheckCircle className="mr-2 w-5 h-5" />
                  Thanks! We'll be in touch
                </>
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </div>

          <p className="text-sm text-blue-200 mt-4">
            No spam, just updates on your early access status
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}