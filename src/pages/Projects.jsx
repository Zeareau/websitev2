import { useEffect, useState } from "react";
import constructing from "../assets/constructing.png";
import awscloudclub from "../assets/gwuacc.png";
import gwusita from "../assets/gwusita.png";
import gwusitasite from "../assets/gwusitasite.png";
import pjisengard from "../assets/pjisengard.png";
import terraformec2 from "../assets/terraformec2.png";
import linuxvm from "../assets/linuxvm.png";
import website from "../assets/website.png";
import chatbot from "../assets/chatbot.png";
import Pane from "../ui/Pane";

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Bilder",
      category: "App",
      description: "Constructing...",
      stack: ["iOS", "Full-Stack", "Swift"],
      link: "#",
      image: constructing,
      color: "cyan"
    },
    {
      title: "Origins Research",
      category: "AI/ML",
      description: "Constructing...",
      stack: ["AI/ML", "Machine Learning", "Python"],
      link: "#",
      image: constructing,
      color: "orange"
    },
    {
      title: "PyTorch NLTK Chatbot",
      category: "AI/ML",
      description: "Text preprocessing, tokenization, lemmatization, and a simple neural network for intent classification.",
      stack: ["AI/ML", "Machine Learning", "Python"],
      link: "https://github.com/Zeareau/NLTK-PyTorch-Chatbot",
      image: chatbot,
      color: "purple"
    },
    {
      title: "AWS Cloud Club Workshops",
      category: "Multiple",
      description: "Collection of workshops from the AWS Cloud Club: EC2 in VPC...",
      stack: ["AWS", "Cloud", "Full-Stack"],
      link: "https://instagram.com/gwucloud",
      image: awscloudclub,
      color: "green"
    },
    {
      title: "GWU SITA Workshops",
      category: "Multiple",
      description: "Collection of workshops from SITA: CloudFormation Weather API, Full-Stack System Ideation, AI Client Presentation, etc.",
      stack: ["React", "Vite", "TailwindCSS"],
      link: "https://instagram.com/gwusita",
      image: gwusita,
      color: "pink"
    },
    {
      title: "gwusita.com",
      category: "Frontend",
      description: "React + Vite + TailwindCSS, HTML, and JavaScript.",
      stack: ["React", "Vite", "TailwindCSS"],
      link: "https://gwusita.com",
      image: gwusitasite,
      color: "cyan"
    },
    {
      title: "Project Isengard",
      category: "Cloud",
      description: "Migrated portfolio website to AWS with CI/CD pipeline.",
      stack: ["AWS", "Networking", "Security"],
      link: "https://chrisenriquez.org",
      image: pjisengard,
      color: "orange"
    },
    {
      title: "Terraform EC2",
      category: "Cloud",
      description: "Infrastructure as code with AWS best practices.", 
      stack: ["Terraform", "AWS", "Infrastructure"],
      link: "https://github.com/Zeareau/-Terraform-EC2",
      image: terraformec2,
      color: "purple"
    },
    {
      title: "LinuxVM",
      category: "IaC",
      description: "Deployed a personal Linux VM using VirtualBox.",
      stack: ["Linux", "IaC", "Virtual Machines"],
      link: "https://github.com/Zeareau/Linux-VM",
      image: linuxvm,
      color: "green"
    },
    {
      title: "chrisenriquez.org",
      category: "Frontend",
      description: "React + Vite + TailwindCSS, HTML, and JavaScript.",
      stack: ["React", "Vite", "TailwindCSS"],
      link: "https://chrisenriquez.org",
      image: website,
      color: "pink"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: "border-cyan-500/20",
        shadow: "shadow-cyan-500/10",
        title: "text-cyan-300",
        accent: "text-cyan-400",
        category: "bg-cyan-500/20 text-cyan-300"
      },
      orange: {
        border: "border-orange-500/20",
        shadow: "shadow-orange-500/10", 
        title: "text-orange-300",
        accent: "text-orange-400",
        category: "bg-orange-500/20 text-orange-300"
      },
      purple: {
        border: "border-purple-500/20",
        shadow: "shadow-purple-500/10",
        title: "text-purple-300",
        accent: "text-purple-400",
        category: "bg-purple-500/20 text-purple-300"
      },
      green: {
        border: "border-green-500/20",
        shadow: "shadow-green-500/10",
        title: "text-green-300",
        accent: "text-green-400",
        category: "bg-green-500/20 text-green-300"
      },
      pink: {
        border: "border-pink-500/20",
        shadow: "shadow-pink-500/10",
        title: "text-pink-300",
        accent: "text-pink-400",
        category: "bg-pink-500/20 text-pink-300"
      }
    };
    return colors[color];
  };

  return (
    <div className="space-y-8">
      {/* Projects Grid */}
      <div className={`transition-all duration-800 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '100ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className={`transition-all duration-800 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <div className="group relative">
                  <a 
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : '_self'}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <div className={`bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border ${colors.border} shadow-xl ${colors.shadow} hover:scale-105 transition-all duration-300 relative overflow-hidden h-80 cursor-pointer`}>
                      
                      <div className="absolute inset-0 z-20 group-hover:opacity-0 transition-all duration-500 ease-in-out">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>
                        
                        <div className="absolute top-6 left-6">
                          <div className={`${colors.category} px-3 py-1 rounded-full text-xs font-medium drop-shadow-md`}>
                            {project.category}
                          </div>
                        </div>
                        
                        <div className="absolute bottom-6 left-6">
                          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                        </div>
                      </div>

                      {/* Content - revealed on hover */}
                      <div className="p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out relative z-10 h-full flex flex-col">
                        <div className={`${colors.category} px-3 py-1 rounded-full text-xs font-medium mb-4 self-start`}>
                          {project.category}
                        </div>

                        <h3 className={`text-xl font-bold ${colors.title} mb-3`}>
                          {project.title}
                        </h3>

                        <p className="text-zinc-300 text-sm leading-relaxed mb-4 grow">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-white/10 text-zinc-300 px-2 py-1 rounded-md text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View Link */}
                        <span className={`${colors.accent} text-sm font-medium inline-flex items-center gap-1 mt-auto`}>
                          View →
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
