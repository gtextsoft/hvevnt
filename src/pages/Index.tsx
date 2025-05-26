
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, MapPin, Users, TrendingUp, Globe } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import { useState } from "react";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const timeZones = [
    { region: "Central (US)", time: "10 AM CST" },
    { region: "United Kingdom / West Africa", time: "4 PM" },
    { region: "Doha", time: "6 PM" },
    { region: "UAE", time: "7 PM" },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Scale Teams Without Burning Culture",
      description: "Learn frameworks that preserve your company's DNA while growing rapidly"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Growth with Cash Sanity",
      description: "Master the art of scaling revenue while maintaining healthy cash flow"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Market Intelligence",
      description: "Fresh insights on US–UK–Africa–GCC market pivots and opportunities"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Elite Peer Network",
      description: "Connect with founders who understand your P&L challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-400/30 px-4 py-2 text-sm font-medium">
              Strictly for Founders & CEOs
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Business Owner Management
              <span className="block text-3xl lg:text-5xl text-amber-400 mt-2">
                Harvard Debrief
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-300">
              with <strong className="text-white">Dr Stephen Akintayo</strong>
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-slate-700">
              <p className="text-lg italic text-slate-300">
                "Leadership is lonely, but it doesn't have to be silent." — DSA
              </p>
            </div>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              No wannabes, no tag-alongs—only the people who sign the pay-checks and carry the weight.
            </p>
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg"
              onClick={() => setShowForm(true)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Dr Stephen Akintayo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-lg p-8 shadow-sm">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="relative max-w-sm mx-auto">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcjHdl6VFNKt1YrmGMn_mZbjB7YohABHlOw&s"
                    alt="Dr Stephen Akintayo"
                    className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Meet Your Facilitator
                </h2>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  Dr Stephen Akintayo
                </h3>
                <div className="space-y-4 text-lg text-slate-700">
                  <p>
                    With <strong>25 years of battlefield evidence</strong>, Dr Stephen Akintayo transforms Harvard's theoretical case studies into actionable playbooks that work Monday morning.
                  </p>
                  <p>
                    He bridges the gap between <strong>legacy wisdom</strong> that built empires and <strong>Gen Z realism</strong> that dominates today's markets.
                  </p>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-l-amber-500 shadow-sm">
                    <p className="font-medium text-slate-900 mb-2">
                      "Who mentors the mentor?"
                    </p>
                    <p className="text-slate-600">
                      This exclusive session answers that question for founders and CEOs who understand that continuous learning is the price of staying ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Date & Time */}
            <Card className="border-l-4 border-l-blue-600 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Date</h3>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-6">
                  Saturday, 7 June 2025
                </p>
                
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Time Zones</h3>
                </div>
                <div className="space-y-3">
                  {timeZones.map((tz, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                      <span className="text-slate-700 font-medium">{tz.region}</span>
                      <span className="text-slate-900 font-bold">{tz.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4 italic">
                  Check your calendar, block the slot, silence the distractions.
                </p>
              </CardContent>
            </Card>

            {/* Fee & Selection */}
            <Card className="border-l-4 border-l-amber-500 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Investment</h3>
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 mb-6">
                    <p className="text-4xl font-bold text-amber-600 mb-2">FREE</p>
                    <p className="text-lg text-slate-700 font-medium">by selection only</p>
                  </div>
                  <p className="text-slate-600">
                    Exclusivity keeps the signal high and the noise low.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center">
              Why This Matters
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Harvard's case studies are great in theory. Dr Stephen Akintayo strips them down, 
                  welds on 25 years of battlefield evidence, and hands you a playbook you can actually run{" "}
                  <strong className="text-slate-900">Monday morning</strong>—without needing a doctorate in jargon.
                </p>
                
                <h4 className="text-xl font-bold text-slate-900 mb-4">Expect a lively mix of:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700"><strong>Legacy wisdom</strong> (the stuff that built empires before smartphones).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700"><strong>Gen Z realism</strong> (because TikTok attention spans rule the market).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">Brutally honest Q&A ("nice" isn't useful, truth is).</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-lg text-slate-800 font-medium italic text-center">
                    If you've ever whispered <em>"Who mentors the mentor?"</em>—this room is the answer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Take Home */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              What You'll Take Home
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border hover:border-blue-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              How Selection Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Submit Application</h3>
                <p className="text-slate-300">Complete the form and get instant confirmation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Curation Process</h3>
                <p className="text-slate-300">Our team reviews and curates the final cohort</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Private Access</h3>
                <p className="text-slate-300">Selected founders receive access link 72 hours before</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-lg text-slate-300 mb-8">
                No marketing bait-and-switch, no hidden upsell—just real value, laser-focused.
              </p>
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg"
                onClick={() => setShowForm(true)}
              >
                Apply Now
              </Button>
              <p className="text-sm text-slate-400 mt-4 italic">
                Because the future belongs to builders who keep learning—even after the spreadsheet turns green.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <ApplicationForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default Index;
