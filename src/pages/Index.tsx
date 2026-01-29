import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Target, Building2, Mail, Phone } from "lucide-react";

const Index = () => {
  const programFocus = [
    "Strategic leadership, not hustle",
    "Organizational structure, not guesswork",
    "Decision-making at the ownership and presidency level",
    "Sustainable systems, not personality-driven management",
  ];

  const whoIsFor = [
    "Business owners and founders",
    "Presidents and CEOs",
    "Senior executives and top management",
    "Leaders managing teams, departments, or institutions",
    "Entrepreneurs transitioning from operator to strategic leader",
  ];

  const gains = [
    "Clear understanding of the role of an owner vs operator",
    "Practical management and leadership frameworks",
    "Tools to build systems that run without constant supervision",
    "Improved decision-making at executive level",
    "Exposure to global leadership perspectives",
    "Access to a curated room of serious business leaders",
  ];

  const speakers = [
    {
      name: "Pastor Dave Burrow",
      role: "International leadership teacher and systems thinker",
      bio: "Decades of experience equipping leaders to build values-driven organizations.",
    },
    {
      name: "Dr. Stephen Akintayo",
      role: "Convener, Owners & President Management Program",
      bio: "Entrepreneur, leadership strategist, and institutional builder with a track record of training high-impact business leaders across sectors.",
    },
    {
      name: "Michael Roberts",
      role: "Global management expert",
      bio: "Deep insight into executive leadership, organizational control, and sustainable business growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-400/30 px-4 py-2 text-sm font-medium">
              Executive-Level Program
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Owners & President Management Program
              <span className="block text-3xl lg:text-5xl text-amber-400 mt-2">
                (OPM)
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-300">
              Built for Owners. Designed for Presidents. Structured for Scale.
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-slate-700">
              <p className="text-lg italic text-slate-300">
                A high-level management and leadership experience curated for business owners, founders, presidents, and senior executives who are ready to move from operational pressure to strategic control.
              </p>
            </div>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              A closed, executive-level program designed to help leaders think clearly, decide confidently, and build organizations that work without constant firefighting.
            </p>
            <a
              href="https://www.stephenakintayo.com/opm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg rounded-md transition-colors"
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      </section>

      {/* Program Dates & Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Program Dates & Schedule
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-l-4 border-l-blue-600 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-slate-900">Date</h3>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-6">
                    3rd – 4th February, 2025
                  </p>
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-slate-900">Time</h3>
                  </div>
                  <p className="text-xl text-slate-700 mb-4">9:00 AM daily</p>
                  <p className="text-slate-600 font-medium">Format: Intensive live sessions</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Program</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    As organizations grow, the demands on leadership change. What worked at the early stage no longer works at scale. OPM is designed to address this transition.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Participants will be exposed to proven management frameworks, leadership systems, and governance principles used by high-performing organizations across the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* This Program Focuses On */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center">
              This Program Focuses On
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {programFocus.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Program Is For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center">
              Who This Program Is For
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-3 mb-8">
                  {whoIsFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-200 pt-6 space-y-3">
                  <p className="text-slate-600 italic">
                    If you are still figuring out what business to start, this program is not for you.
                  </p>
                  <p className="text-slate-900 font-medium">
                    If you already lead people, systems, or capital, this room is for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speakers & Faculty */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Speakers & Faculty
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <Card key={index} className="border-l-4 border-l-amber-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{speaker.name}</h3>
                    <p className="text-amber-600 font-medium text-sm mb-3">{speaker.role}</p>
                    <p className="text-slate-700 leading-relaxed">{speaker.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Gain */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              What You Will Gain
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gains.map((gain, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border hover:border-blue-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Target className="w-5 h-5" />
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1">{gain}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why OPM Matters */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Why OPM Matters
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Leadership failure is rarely about lack of effort.
            </p>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              It is usually about lack of structure.
            </p>
            <p className="text-lg text-amber-400 font-medium max-w-2xl mx-auto">
              OPM is designed to help leaders replace stress with systems, confusion with clarity, and pressure with control.
            </p>
          </div>
        </div>
      </section>

      {/* Registration & Reservations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Registration & Reservations
            </h2>
            <Card className="shadow-lg border-l-4 border-l-amber-500">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 mb-8">
                  To reserve your seat for the Owners & President Management Program:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Visit</p>
                      <a
                        href="https://www.stephenakintayo.com/opm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        www.stephenakintayo.com/opm
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">For further enquiries</p>
                      <p className="text-slate-700">Email: products@stephenakintayo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Call or WhatsApp</p>
                      <p className="text-slate-700">+234 816 790 1719 | +234 818 000 0618</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a
                    href="https://www.stephenakintayo.com/opm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg rounded-md transition-colors"
                  >
                    Reserve Your Seat
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
