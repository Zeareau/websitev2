import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 relative overflow-hidden">
      {/* Glossy background overlay */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-slate-900/50 via-black to-slate-800/30" />
      
      {/* Subtle glowing orbs background */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        {/* Cyan glowing orbs */}
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-300/12 blur-2xl animate-float" style={{animationDelay: '2s'}} />
        
        {/* Red glowing orbs */}
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-red-500/12 blur-3xl animate-drift" />
        <div className="absolute bottom-1/3 right-1/3 h-48 w-48 rounded-full bg-red-400/10 blur-xl animate-glow-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Multiple glossy shine effects for depth */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-200/[0.01] to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/[0.02] to-transparent" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-4 py-10 backdrop-glossy">
        <Outlet />
      </main>
    </div>
  );
}
