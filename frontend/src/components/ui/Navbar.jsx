import { useState } from "react";

const links = ["Home", "Events", "About Us", "Contact Us"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Glass Pill Container */}
      <div
        className="
        relative flex items-center gap-8
        px-8 py-3
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
      "
      >
        {/* Top Gloss Highlight */}
        <div
          className="
          pointer-events-none
          absolute inset-0 rounded-full
          bg-gradient-to-b from-white/25 to-transparent
        "
        />

        {/* Logo */}
        <div className="relative text-white font-medium tracking-wide text-sm">
          Elite
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 relative">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`
                relative px-4 py-1.5 rounded-full text-sm transition-all duration-300
                ${
                  active === link
                    ? "text-white bg-white/20 shadow-inner backdrop-blur-md"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {link}

              {active === link && (
                <span
                  className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-b from-white/30 to-white/5
                  pointer-events-none
                "
                />
              )}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 relative"
        >
          <span className="w-5 h-[1px] bg-white/80" />
          <span className="w-5 h-[1px] bg-white/80" />
          <span className="w-5 h-[1px] bg-white/80" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
          mt-3
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          px-6 py-4
          space-y-3
          md:hidden
        "
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`
                block w-full text-left text-sm px-3 py-2 rounded-xl transition-all
                ${
                  active === link
                    ? "text-white bg-white/20"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
