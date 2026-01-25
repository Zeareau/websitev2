import Pane from "../ui/Pane";
import { useState } from "react";
import { Mail, MapPin, Instagram, Linkedin, Github, Link2, Cloud } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:chrisenriquezwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Pane>
        <h2 className="text-2xl font-bold text-cyan-300 text-left">Contact</h2>
        <p className="mt-2 text-zinc-300 text-left">Get in touch with me for collaborations or opportunities.</p>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-zinc-300 text-sm font-medium mb-2 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-zinc-300 text-sm font-medium mb-2 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-zinc-300 text-sm font-medium mb-2 text-left">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-zinc-300 text-sm font-medium mb-2 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Send Message
          </button>
        </form>
      </Pane>

      <Pane>
        <h2 className="text-2xl font-bold text-cyan-300 text-left">Connect</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-zinc-300">chrisenriquezwork@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-zinc-300">Washington, DC</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="space-y-3">
            <a
              href="https://instagram.com/chrisbyhimself"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300 flex-shrink-0" />
              <div className="text-left">
                <span className="text-white font-medium block">Instagram</span>
                <p className="text-zinc-400 text-sm">@chrisbyhimself</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/chrisenriquezwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
              <div className="text-left">
                <span className="text-white font-medium block">LinkedIn</span>
                <p className="text-zinc-400 text-sm">chrisenriquezwork</p>
              </div>
            </a>

            <a
              href="https://github.com/Zeareau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-green-400 group-hover:text-green-300 flex-shrink-0" />
              <div className="text-left">
                <span className="text-white font-medium block">GitHub</span>
                <p className="text-zinc-400 text-sm">Zeareau</p>
              </div>
            </a>

            <a
              href="https://linktr.ee/gwusita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <Link2 className="w-5 h-5 text-purple-400 group-hover:text-purple-300 flex-shrink-0" />
              <div className="text-left">
                <span className="text-white font-medium block">GWU SITA</span>
                <p className="text-zinc-400 text-sm">linktr.ee/gwusita</p>
              </div>
            </a>

            <a
              href="https://linktr.ee/gwuawscloudclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
            >
              <Cloud className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 flex-shrink-0" />
              <div className="text-left">
                <span className="text-white font-medium block">AWS Cloud Club</span>
                <p className="text-zinc-400 text-sm">linktr.ee/gwuawscloudclub</p>
              </div>
            </a>
          </div>
        </div>
      </Pane>
    </div>
  );
}
