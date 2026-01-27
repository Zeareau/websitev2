import { useEffect, useState } from "react";

import { Calendar, MapPin, Lightbulb, Target, TrendingUp, Users, Coffee, Utensils, Dumbbell } from "lucide-react";
import Pane from "../ui/Pane";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount/page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure smooth animation

    return () => clearTimeout(timer);
  }, []);

  const philosophyItems = [
    {
      title: "Do.",
      icon: Target,
      color: "from-orange-500 to-red-500",
      content: "Everytime you go to sleep is one less day you have. Don't hesitate or stay stagnant and let time pass you by. Whatever stage of life you're in, ensure you can look back and be proud of it. Maximize how you spend your days and consistency will reward you. It has for me."
    },
    {
      title: "Believe.",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500",
      content: "I've transitioned from political science to tech, and within a matter of 6 months, I've gotten 4 AWS certs, founded 2 orgs, and landed a great internship. (At the expense of my GPA...) That proved to me that you can do anything you want, as long as you believe in yourself."
    },
    {
      title: "Scale.",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      content: "Dream big. Once you've proved to yourself that you can do something, scale it. Help more people. Grow it larger. Do it twice or three times. Volume is transformative, and Steve Jobs said \"Everything around you that you call life was made up by people no smarter than you.\""
    },
    {
      title: "Contribute.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      content: "Once you've learned how to do something, help others get it. I hated when my first two years of college, because I felt like I wasn't accomplishing anything. Now, the fulfillment I get from helping others is unmatched. I'll definitely become a professor someday in the future."
    }
  ];

  const timelineEvents = [
    {
      date: "Fall 2025 - Present",
      title: "Junior Year",
      description: "Internship offers from every major industry, scaling clubs, ACC, AWS SAA and DVA...",
      color: "bg-cyan-400",
      shadowColor: "shadow-cyan-400/20",
      borderColor: "border-cyan-500/20"
    },
    {
      date: "Summer 2025",
      title: "Action.",
      description: "I bet on myself: GWU SITA, 3 Jobs, SF, 2 AWS Certs, 4 Projects...",
      color: "bg-orange-400",
      shadowColor: "shadow-orange-400/20",
      borderColor: "border-orange-500/20"
    },
    {
      date: "April 2025",
      title: "AWS Comes to Campus",
      description: "It clicked. I knew this is what I wanted to do. This was the catalyst.",
      color: "bg-purple-400",
      shadowColor: "shadow-purple-400/20",
      borderColor: "border-purple-500/20"
    },
    {
      date: "March 2025",
      title: "Pre-Mid-Life Crisis",
      description: "Dropped from business frat, lost in degree, personal challenges, stagnant life progress...",
      color: "bg-cyan-400",
      shadowColor: "shadow-cyan-400/20",
      borderColor: "border-cyan-500/20"
    },
    {
      date: "2023",
      title: "Started at GWU",
      description: "Began studying politcal science, unknowing the tech journey that lay ahead.",
      color: "bg-green-400",
      shadowColor: "shadow-green-400/20",
      borderColor: "border-green-500/20"
    },
    {
      date: "2019-2023",
      title: "Hayfield High School",
      description: "First discovered passion for political science and was the president of my school's advocacy club.",
      color: "bg-yellow-400",
      shadowColor: "shadow-yellow-400/20",
      borderColor: "border-yellow-500/20"
    }
  ];

  const funFacts = [
    {
      number: "100+",
      label: "Restaurants",
      subtitle: "In My Masterlist...",
      icon: Utensils,
      color: "text-orange-300"
    },
    {
      number: "2+",
      label: "Years",
      subtitle: "Bodybuilding",
      icon: Dumbbell,
      color: "text-cyan-300"
    },
    {
      number: "∞",
      label: "Cups of Coffee",
      subtitle: "Fuel For Coding",
      icon: Coffee,
      color: "text-purple-300"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left side - 3 stacked cards (2/3 width) */}
      <div className="lg:col-span-2 space-y-8">
        {/* About Me Card */}
        <div className={`transition-all duration-800 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '100ms' }}>
          <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-6 hover:border-white/20 transition-all duration-300">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2 text-left">
                    About Me
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-zinc-300 leading-relaxed text-left">
                <p className="text-base text-left">
                  <span className="text-cyan-300 font-semibold">"Be the master of your destiny."</span> - my personal mantra that fuels my passion for technology and leadership. To start, I'm a military brat who's moved all across the country, eventually settling in Northern Virginia for my freshman year of high school. Kentucky, Texas, Kansas, upstate New York, Colorado, you name it, I've probably lived there at some point. Ever since I could remember, I've had to adapt to new environments and make new friends, or else I'd be stuck eating lunch alone in the corner.
                </p>
                
                <p className="text-base text-left">
                  Fast forward to nowadays, I was a political science major until the summer of 2025. I've been transitioning into a career of modern technology ever since. That transition wasn't particularly smooth, I had no sense of guidance or community, especially at a predominantly liberal arts school like GW. So! I started founding tech orgs and getting certifications to create that community myself. That risk turned out to be one of the best and most fulfilling decisions I've ever made.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy & Values Card */}
        <div className={`transition-all duration-800 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-6 hover:border-white/20 transition-all duration-300">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Philosophy
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {philosophyItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className={`transition-all duration-600 ease-out ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-base font-semibold text-white text-left">{item.title}</h3>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed text-left">{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Card */}
        <div className={`transition-all duration-800 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '500ms' }}>
          <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-6 hover:border-white/20 transition-all duration-300">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-44 h-44 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 right-4 w-36 h-36 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-green-400 to-cyan-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Fun Facts
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {funFacts.map((fact, index) => {
                  const IconComponent = fact.icon;
                  return (
                    <div key={index} className={`text-center space-y-3 transition-all duration-600 ease-out ${
                      isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                    }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <IconComponent className="w-7 h-7 mx-auto mb-3 text-white" />
                        <div className={`text-4xl font-bold mb-2 ${fact.color}`}>{fact.number}</div>
                        <div className="text-zinc-400 text-sm font-medium">{fact.label}</div>
                        <div className="text-xs text-zinc-500">{fact.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Timeline */}
      <div className="lg:col-span-1">
        <div className={`transition-all duration-800 ease-out h-full ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-6 h-full flex flex-col hover:border-white/20 transition-all duration-300">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-400 to-orange-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Roadmap
                  </h2>
                </div>
              </div>
              
              {/* Timeline content takes remaining space */}
              <div className="relative flex-1">
                {/* Timeline line - extends full height */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 rounded-full"></div>
                
                <div className="space-y-10 h-full flex flex-col justify-between">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className={`relative transition-all duration-600 ease-out ${
                      isLoaded ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-4 translate-x-4'
                    }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                      <div className={`absolute left-6 transform -translate-x-1/2 w-3 h-3 ${event.color} rounded-full border-2 border-gray-900 z-10 shadow-lg ${event.shadowColor}`}>
                        <div className={`absolute inset-0 ${event.color} rounded-full animate-ping opacity-30`}></div>
                      </div>
                      <div className="ml-12">
                        <div className={`bg-white/5 rounded-2xl p-5 border ${event.borderColor} hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-h-[120px]`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <div className="text-cyan-300 font-bold text-xs text-left">{event.date}</div>
                          </div>
                          <h3 className="text-white font-bold text-base mb-3 text-left">{event.title}</h3>
                          <p className="text-zinc-300 text-xs leading-relaxed text-left">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}