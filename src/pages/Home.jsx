import Pane from "../ui/Pane";
import headshot from "../assets/headshot.png";
import awssaa from "../assets/awssaa.png";
import awsdva from "../assets/awsdva.png";
import awsccp from "../assets/awsccp.png";
import awsaip from "../assets/awsaip.png";
import deloitte from "../assets/deloitte.png";
import gwusita from "../assets/gwusita.png";
import sitapic1 from "../assets/sitapic1.jpg";
import sitapic2 from "../assets/sitapic2.png";
import accpic1 from "../assets/accpic1.png";
import accpic2 from "../assets/accpic2.png";
import gwuacc from "../assets/gwuacc.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function AnimatedSection({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ClubCarousel({ images, alt, glowColor = "cyan" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interval, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    const id = setInterval(nextImage, 1500);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (interval) {
      clearInterval(interval);
      setIntervalId(null);
    }
  };

  const shadowClass = glowColor === "orange" 
    ? "hover:shadow-orange-500/20 hover:border-orange-500/30" 
    : "hover:shadow-cyan-500/20 hover:border-cyan-500/30";

  const hoverIndicatorColor = glowColor === "orange" 
    ? "bg-orange-500/30 text-orange-200" 
    : "bg-cyan-500/30 text-cyan-200";

  return (
    <div className="flex justify-center my-6">
      <div 
        className={`relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${shadowClass} hover:saturate-150 cursor-pointer group`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-64 w-64 overflow-hidden rounded-xl" style={{ perspective: '1000px' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${alt} ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                index === currentIndex ? 'opacity-100 z-[5]' : 'opacity-0 z-0'
              }`}
              style={{
                transform: index === currentIndex 
                  ? 'rotateY(0deg) scale(1)' 
                  : `rotateY(${(index - currentIndex) * 120}deg) scale(0.8)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}
          
          {/* Hover indicator */}
          <div className={`absolute top-2 right-2 px-2 py-1 ${hoverIndicatorColor} rounded-md text-[10px] font-bold shadow-xl border border-white/20 transition-all duration-300 z-[50] ${
            isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`} style={{ zIndex: 999 }}>
            Hover Here!
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Pane className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-left">
            {/* Left-aligned text content */}
            <div className="space-y-2">
              <p className="text-sm text-cyan-400 uppercase tracking-widest">
                Aspiring IT Professional, Founder & President
              </p>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-left">
                Chris <span className="text-red-500">Enriquez</span>
              </h1>
            </div>
            
            <p className="text-lg text-zinc-300 leading-relaxed max-w-lg text-left">
              I'm a student, founder, and aspiring IT professional. With a strong
              foundation in cloud computing, management, and scaling
              organizations, I want to change the landscape of STEM organizations at
              GWU and eventually the world.
            </p>
            
            <div className="flex gap-4 justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors font-medium"
              >
                View Projects →
              </Link>
              <button className="inline-flex items-center px-6 py-3 border border-white/20 hover:bg-white/5 text-white rounded-full transition-colors">
                Contact Me
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Pill>ISTM @ GWU</Pill>
              <Pill>2x Founder</Pill>
              <Pill>4x AWS Certified</Pill>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-200">
                Incoming @ 
                <img src={deloitte} alt="Deloitte" className="h-6 ml-2" />
              </span>
            </div>
          </div>
          
          {/* Updated headshot section - moved right and made larger */}
          <div className="flex justify-end lg:justify-center xl:justify-end xl:pr-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src={headshot}
                alt="Christopher Enriquez"
                className="relative h-96 w-96 rounded-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-3xl group-hover:ring-2 group-hover:ring-cyan-500/30 transform-gpu perspective-1000"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  const mouseX = e.clientX - centerX;
                  const mouseY = e.clientY - centerY;
                  
                  const rotateX = (mouseY / rect.height) * -20;
                  const rotateY = (mouseX / rect.width) * 20;
                  const translateZ = 20;
                  
                  e.currentTarget.style.transform = `
                    scale(1.05) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(${translateZ}px)
                    perspective(1000px)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg) translateZ(0px) perspective(1000px)';
                }}
              />
            </div>
          </div>
        </div>
      </Pane>

      {/* AWS Certifications */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatedSection delay={200}>
          <Pane className="text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 hover:bg-white/10 cursor-pointer">
            <div className="mx-auto w-32 h-32 mb-3">
              <img
                src={awssaa}
                alt="AWS Solutions Architect Associate"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-white">Solutions Architect</h3>
            <p className="text-xs text-cyan-300 mt-1">Associate Level</p>
            <div className="text-xs text-zinc-400 mt-2">AWS Certified</div>
          </Pane>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <Pane className="text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/30 hover:bg-white/10 cursor-pointer">
            <div className="mx-auto w-32 h-32 mb-3">
              <img
                src={awsdva}
                alt="AWS Developer Associate"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-white">Developer</h3>
            <p className="text-xs text-cyan-300 mt-1">Associate Level</p>
            <div className="text-xs text-zinc-400 mt-2">AWS Certified</div>
          </Pane>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <Pane className="text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 hover:bg-white/10 cursor-pointer">
            <div className="mx-auto w-32 h-32 mb-3">
              <img
                src={awsccp}
                alt="AWS Cloud Practitioner"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-white">Cloud Practitioner</h3>
            <p className="text-xs text-cyan-300 mt-1">Foundational Level</p>
            <div className="text-xs text-zinc-400 mt-2">AWS Certified</div>
          </Pane>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <Pane className="text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/30 hover:bg-white/10 cursor-pointer">
            <div className="mx-auto w-32 h-32 mb-3">
              <img
                src={awsaip}
                alt="AWS AI Practitioner"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-white">AI Practitioner</h3>
            <p className="text-xs text-cyan-300 mt-1">Foundational Level</p>
            <div className="text-xs text-zinc-400 mt-2">AWS Certified</div>
          </Pane>
        </AnimatedSection>
      </div>

      {/* Organizations Founded */}
      <div className="grid gap-4 md:grid-cols-2">
        <AnimatedSection delay={1000}>
          <Pane>
            <div className="flex justify-between items-start mb-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white text-left">GWU SITA (Student IT Association)</h3>
                <p className="text-cyan-300 text-left">Founder & President</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-zinc-300 text-sm font-medium">Members</div>
              </div>
            </div>
            
            <div className="flex justify-center my-6">
              <ClubCarousel 
                images={[gwusita, sitapic1, sitapic2]} 
                alt="GWU SITA" 
                glowColor="cyan"
              />
            </div>
            
            <div className="flex justify-center mb-4">
              <a 
                href="https://www.instagram.com/gwusita/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-instagram-gradient hover:bg-instagram-gradient-hover text-white rounded-full transition-all duration-300 hover:scale-105 text-sm font-medium animate-gradient shadow-lg hover:shadow-pink-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Pill>Workshops</Pill>
              <Pill>Guest Speakers</Pill>
              <Pill>Networking</Pill>
            </div>
          </Pane>
        </AnimatedSection>

        <AnimatedSection delay={1200}>
          <Pane>
            <div className="flex justify-between items-start mb-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white text-left">GWU AWS Cloud Club</h3>
                <p className="text-cyan-300 text-left">Founder & President</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-zinc-300 text-sm font-medium">Members</div>
              </div>
            </div>
            
            <div className="flex justify-center my-6">
              <ClubCarousel 
                images={[gwuacc, accpic1, accpic2]} 
                alt="GWU AWS Cloud Club" 
                glowColor="orange"
              />
            </div>
            
            <div className="flex justify-center mb-4">
              <a 
                href="https://www.instagram.com/gwucloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-instagram-gradient hover:bg-instagram-gradient-hover text-white rounded-full transition-all duration-300 hover:scale-105 text-sm font-medium animate-gradient shadow-lg hover:shadow-pink-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Pill>Officially-Partnered</Pill>
              <Pill>Certifications</Pill>
              <Pill>Projects</Pill>
            </div>
          </Pane>
        </AnimatedSection>
      </div>
    </div>
  );
}

