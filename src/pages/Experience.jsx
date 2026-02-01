import { useEffect, useState } from "react";
import neuralseek from "../assets/neuralseek.png";
import deloittelogo from "../assets/deloitteimage.png";
import gwuacc from "../assets/gwuacc.png";
import itdept from "../assets/itdept.png";
import nslc from "../assets/nslc.png";
import soccerref from "../assets/soccerref.png";
import gwusita from "../assets/gwusita.png";
import gwuvets from "../assets/gwuvets.png";
import Pane from "../ui/Pane";

export default function ExperiencePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      title: "Incoming Data Management Solutions Intern",
      company: "Deloitte GPS",
      period: "June 2026-August 2026",
      description: "Incoming data governance, management, quality, and solutions intern...",
      skills: ["ServiceNow", "Azure AD", "PowerShell"],
      placeholder: deloittelogo,
      color: "cyan"
    },
    {
      title: "Founder & President", 
      company: "GWU AWS Cloud Club",
      period: "Spring 2026-Present",
      description: "Founded GW's first officially-partnered AWS Cloud Club chapter, growing it to 50+ members by hosting workshops, networking events, and speaker series with professionals.",
      skills: ["Automation", "Data Management", "Student Services"],
      placeholder: gwuacc,
      color: "orange"
    },
    {
      title: "Founder & President",
      company: "GWU SITA (Student Information Technology Association)",
      period: "Fall 2025-Present", 
      description: "Founded GW's first information systems organization, growing it to 100+ members by hosting workshops, networking events, and speaker series with  professionals.",
      skills: ["Leadership", "Mentoring", "Team Building"],
      placeholder: gwusita,
      color: "purple"
    },
    {
      title: "AI Intern",
      company: "NeuralSeek",
      period: "August 2025-September 2025",
      description: "Built and constructed a full-functional, 100% response, and semantic optimization chatbot to provide Tier 1 Helpdesk support for customers.",
      skills: ["Community Building", "Event Planning", "Partnerships"],
      placeholder: neuralseek,
      color: "green"
    },
    {
      title: "IT Support Assitant",
      company: "GWU IT Department",
      period: "June 2025-August 2025",
      description: "Supported the entire engineering, public health, and library departments by resolving 200+ technical issues monthly with a 99% satisfaction rate.",
      skills: ["AWS", "Cloud Architecture", "Training"],
      placeholder: itdept,
      color: "pink"
    },
    {
      title: "Assistant Team Advisor",
      company: "National Student Leadership Conference (NSLC)",
      period: "August 2025",
      description: "Taught and mentored ~100 high school students leadership and services skills on-site at Georgetown University throughout 3 summer programs.",
      skills: ["React", "Node.js", "Agile"],
      placeholder: nslc,
      color: "purple"
    },
    {
      title: "Veterans Support Assistant",
      company: "Military & Veteran Services Offices",
      period: "Fall 2024-Present",
      description: "Assisted veterans and military-affiliated students with applying their tuition benefits at GWU, helping thousands of students save 500k+ each.",
      skills: ["Research", "Machine Learning", "Data Analysis"],
      placeholder: gwuvets,
      color: "cyan"
    },
    {
      title: "Soccer Referee",
      company: "Metro-DC State Referee Program",
      period: "Summer 2024",
      description: "Reffed ~15 matches per season to hundreds of youth players,ensuring fair play and adherence to rules while managing on-field conflicts effectively.",
      skills: ["Technical Support", "Training", "Community Service"],
      placeholder: soccerref,
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        dot: "bg-cyan-400 shadow-cyan-400/20",
        border: "border-cyan-500/20",
        shadow: "shadow-cyan-500/10",
        title: "text-cyan-300",
        accent: "text-cyan-400",
        tab: "from-cyan-500 to-cyan-600",
        tabBorder: "border-cyan-400/40"
      },
      orange: {
        dot: "bg-orange-400 shadow-orange-400/20", 
        border: "border-orange-500/20",
        shadow: "shadow-orange-500/10",
        title: "text-orange-300",
        accent: "text-orange-400",
        tab: "from-orange-500 to-orange-600",
        tabBorder: "border-orange-400/40"
      },
      purple: {
        dot: "bg-purple-400 shadow-purple-400/20",
        border: "border-purple-500/20", 
        shadow: "shadow-purple-500/10",
        title: "text-purple-300",
        accent: "text-purple-400",
        tab: "from-purple-500 to-purple-600",
        tabBorder: "border-purple-400/40"
      },
      green: {
        dot: "bg-green-400 shadow-green-400/20",
        border: "border-green-500/20",
        shadow: "shadow-green-500/10", 
        title: "text-green-300",
        accent: "text-green-400",
        tab: "from-green-500 to-green-600",
        tabBorder: "border-green-400/40"
      },
      pink: {
        dot: "bg-pink-400 shadow-pink-400/20",
        border: "border-pink-500/20",
        shadow: "shadow-pink-500/10",
        title: "text-pink-300", 
        accent: "text-pink-400",
        tab: "from-pink-500 to-pink-600",
        tabBorder: "border-pink-400/40"
      }
    };
    return colors[color];
  };

  return (
    <div className="space-y-8">
      {/* Experience Roadmap */}
      <div className={`transition-all duration-800 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'  
      }`} style={{ transitionDelay: '100ms' }}>
        <Pane>
          <div className="relative max-w-6xl mx-auto">
            {/* Central timeline line - vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 rounded-full shadow-lg z-0"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colors.dot} rounded-full border-4 border-gray-900 z-20 shadow-lg`}>
                      <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-30`}></div>
                    </div>
                    
                    {/* Horizontal connecting line from dot to card */}
                    <div className={`absolute left-1/2 w-12 h-0.5 bg-gradient-to-r ${isEven ? 'from-white/40 to-transparent -translate-x-full' : 'from-transparent to-white/40'} z-1`}></div>
                    
                    {/* Experience card */}
                    <div className={`w-1/2 ${isEven ? 'pr-12' : 'pl-12 ml-auto'} relative z-30 group-hover:z-[200]`}>
                      <div className={`transition-all duration-800 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`} style={{ transitionDelay: `${200 + (index * 100)}ms` }}>
                        <div className="relative group">
                          <div className={`bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border ${colors.border} shadow-xl ${colors.shadow} hover:scale-105 transition-all duration-300 relative overflow-hidden hover:z-[100]`}>
                            
                            {/* Image overlay - default state */}
                            <div className="absolute inset-0 z-20 group-hover:opacity-0 transition-all duration-500 ease-in-out">
                              <img 
                                src={exp.placeholder}
                                alt={`${exp.title} at ${exp.company}`}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                              
                              {/* Enhanced Glossy glass finish */}
                              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                                {/* Main glass overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/4 to-transparent rounded-2xl"></div>
                                
                                {/* Top highlight stripe */}
                                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent rounded-t-2xl"></div>
                                
                                {/* Left highlight edge */}
                                <div className="absolute top-0 left-0 bottom-0 w-1/4 bg-gradient-to-r from-white/10 to-transparent rounded-l-2xl"></div>
                                
                                {/* Subtle inner glow */}
                                <div className="absolute inset-1 bg-gradient-to-br from-white/5 via-transparent to-white/2 rounded-2xl"></div>
                              </div>
                              
                              <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent rounded-2xl`}></div>
                              
                              {/* Image overlay content */}
                              <div className={`absolute bottom-6 ${isEven ? 'left-6 text-left' : 'right-6 text-right'}`}>
                                <h3 className={`text-xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>{exp.title}</h3>
                                <p className="text-white/90 font-medium drop-shadow-md">{exp.company}</p>
                                <div className={`${colors.accent} font-bold text-sm bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full mt-2 inline-block drop-shadow-md`}>
                                  {exp.period}
                                </div>
                              </div>
                            </div>

                            {/* Content - revealed on hover */}
                            <div className="p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out relative z-10">
                              {/* Header */}
                              <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-start justify-between mb-4`}>
                                <div className={isEven ? 'text-left' : 'text-right'}>
                                  <h3 className={`text-xl font-bold ${colors.title} mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]`}>{exp.title}</h3>
                                  <p className="text-zinc-400 font-medium">{exp.company}</p>
                                </div>
                                <div className={`${colors.accent} font-bold text-sm bg-white/10 px-3 py-1 rounded-full`}>
                                  {exp.period}
                                </div>
                              </div>

                              {/* Description */}
                              <p className={`text-zinc-300 leading-relaxed ${isEven ? 'text-left' : 'text-right'}`}>
                                {exp.description}
                              </p>
                            </div>

                            {/* Skill tabs flush with bottom - appear on hover */}
                            <div className={`absolute bottom-0 ${isEven ? 'left-6' : 'right-6'} flex gap-1 translate-y-full z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}>
                              {exp.skills.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className={`backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-b-lg shadow-lg border-l border-r border-b ${colors.tabBorder} relative transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out`}
                                  style={{
                                    transform: `translateX(${skillIndex * 1}px)`,
                                    zIndex: 3 - skillIndex,
                                    backgroundColor: `rgba(${exp.color === 'cyan' ? '6, 182, 212' : 
                                                           exp.color === 'orange' ? '249, 115, 22' : 
                                                           exp.color === 'purple' ? '147, 51, 234' : 
                                                           exp.color === 'green' ? '34, 197, 94' : 
                                                           '236, 72, 153'}, 0.25)`,
                                    transitionDelay: `${skillIndex * 100}ms`
                                  }}
                                >
                                  {/* Enhanced glossy effect */}
                                  <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/10 to-transparent rounded-b-lg pointer-events-none"></div>
                                  <span className="relative z-10 drop-shadow-sm">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Pane>
      </div>
    </div>
  );
}
