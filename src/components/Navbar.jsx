import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const main = [
  { label: "Home", to: "/" },
  { label: "About", to: "/aboutpage" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const more = [
  { label: "Skills", to: "/skills" },
  { label: "Achievements", to: "/achievements" },
];

function Item({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        [
          "px-3 py-2 rounded-full text-sm font-medium transition",
          isActive ? "bg-white/10 text-white" : "text-zinc-300 hover:text-white hover:bg-white/5",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl rounded-b-2xl mx-4 mt-4">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          Christopher Jan Caburao Enriquez
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {main.map((i) => (
            <Item key={i.to} {...i} />
          ))}

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="px-3 py-2 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition"
            >
              More ▾
            </button>

            {open && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-2"
                onMouseLeave={() => setOpen(false)}
              >
                {more.map((i) => (
                  <NavLink
                    key={i.to}
                    to={i.to}
                    className={({ isActive }) =>
                      [
                        "block px-3 py-2 rounded-xl text-sm transition",
                        isActive ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white",
                      ].join(" ")
                    }
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link
          to="/contact"
          className="rounded-full bg-cyan-400/90 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-300 transition"
        >
          Hire Me ↘
        </Link>
      </div>

      <div className="md:hidden border-t border-white/10 rounded-b-2xl">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap gap-1">
          {main.concat(more).map((i) => (
            <Item key={i.to} {...i} />
          ))}
        </div>
      </div>
    </header>
  );
}
