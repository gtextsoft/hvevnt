import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Target, Mail, Phone, Check, ArrowRight } from "lucide-react";

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
      image: "/Pst-Dave.png",
    },
    {
      name: "Dr. Stephen Akintayo",
      role: "Convener, Owners & President Management Program",
      bio: "Entrepreneur, leadership strategist, and institutional builder with a track record of training high-impact business leaders across sectors.",
      image: "/SAF2.jpg",
    },
    {
      name: "Michael Roberts",
      role: "Global management expert",
      bio: "Deep insight into executive leadership, organizational control, and sustainable business growth.",
      image: "/Robert.png",
    },
  ];

  const ctaUrl = "https://www.stephenakintayo.com/opm";

  return (
    <div className="min-h-screen bg-stone-50/80">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_50%,_#0f172a_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(245,158,11,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative container mx-auto px-6 py-24 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-amber-500/15 text-amber-300 border border-amber-400/25 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              Executive-Level Program
            </Badge>
            <h1 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-semibold mb-6 leading-[1.1] tracking-tight">
              Owners & President
              <span className="block text-amber-400 mt-1">Management Program (OPM)</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
              Built for Owners. Designed for Presidents. Structured for Scale.
            </p>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-slate-700/60 text-left">
              <p className="text-lg text-slate-300 leading-relaxed italic">
                A high-level management and leadership experience curated for business owners, founders, presidents, and senior executives who are ready to move from operational pressure to strategic control.
              </p>
            </div>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              A closed, executive-level program designed to help leaders think clearly, decide confidently, and build organizations that work without constant firefighting.
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 text-base rounded-full transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Reserve Your Seat
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Program Dates & Schedule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
              Schedule
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-slate-900 mb-14 text-center">
              Program Dates & Schedule
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow duration-300">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-slate-900">Date</h3>
                  </div>
                  <p className="font-serif text-2xl lg:text-3xl font-semibold text-slate-900 mb-8">
                    3rd – 4th February, 2025
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-slate-900">Time</h3>
                  </div>
                  <p className="text-xl text-slate-700 mb-2">9:00 AM daily</p>
                  <p className="text-slate-600">Format: Intensive live sessions</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow duration-300 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="p-8 lg:p-10">
                  <h3 className="font-serif text-xl font-semibold text-slate-900 mb-4">About the Program</h3>
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
      <section className="py-20 lg:py-28 bg-stone-100/80">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
              Focus
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-slate-900 mb-10 text-center">
              This Program Focuses On
            </h2>
            <Card className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <ul className="space-y-5">
                  {programFocus.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Program Is For */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
              Audience
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-slate-900 mb-10 text-center">
              Who This Program Is For
            </h2>
            <Card className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <ul className="space-y-4 mb-8">
                  {whoIsFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-200 pt-8 space-y-4">
                  <p className="text-slate-500 italic">
                    If you are still figuring out what business to start, this program is not for you.
                  </p>
                  <p className="text-slate-900 font-semibold text-lg">
                    If you already lead people, systems, or capital, this room is for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speakers & Faculty */}
      <section className="py-20 lg:py-28 bg-stone-100/80">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
              Faculty
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-slate-900 mb-14 text-center">
              Speakers & Faculty
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <CardContent className="p-8 lg:p-10 h-full flex flex-col">
                    <div className="w-full aspect-square max-w-[200px] mx-auto mb-6 rounded-2xl overflow-hidden bg-stone-200 shadow-inner">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">{speaker.name}</h3>
                    <p className="text-amber-600 font-medium text-sm mb-4">{speaker.role}</p>
                    <p className="text-slate-600 leading-relaxed flex-1">{speaker.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Gain */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
              Outcomes
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-slate-900 mb-14 text-center">
              What You Will Gain
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gains.map((gain, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg shadow-slate-200/40 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200/50 border border-transparent transition-all duration-300 group"
                >
                  <CardContent className="p-6 lg:p-8 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors">
                      <Target className="w-6 h-6" />
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
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,_rgba(245,158,11,0.08),transparent)]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-6">
              Why OPM
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-12">
              Why OPM Matters
            </h2>
            <blockquote className="space-y-6">
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Leadership failure is rarely about lack of effort.
              </p>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                It is usually about lack of structure.
              </p>
            </blockquote>
            <p className="text-lg text-amber-400 font-medium mt-10 max-w-xl mx-auto leading-relaxed">
              OPM is designed to help leaders replace stress with systems, confusion with clarity, and pressure with control.
            </p>
          </div>
        </div>
      </section>

      {/* Registration & Reservations */}
      <section className="py-20 lg:py-28 bg-stone-100/80" id="register">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
              Join Us
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-slate-900 mb-10 text-center">
              Registration & Reservations
            </h2>
            <Card className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <p className="text-slate-700 mb-8 leading-relaxed">
                  To reserve your seat for the Owners & President Management Program:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">For further enquiries</p>
                      <p className="text-slate-700">products@stephenakintayo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Call or WhatsApp</p>
                      <p className="text-slate-700">+234 816 790 1719 | +234 818 000 0618</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 text-base rounded-full transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  >
                    Reserve Your Seat
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-lg text-white mb-2">Owners & President Management Program</p>
            <p className="text-sm mb-6">Built for Owners. Designed for Presidents. Structured for Scale.</p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors focus:outline-none focus:underline"
            >
              stephenakintayo.com/opm
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
