import { Link } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navLinks = ["SONGS", "POEMS", "REFLECTIONS", "PEOPLE", "FILMS"];
  const icons = ["search", "radio"];

  return (
    <header className="relative z-40 w-full py-6 px-10 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src="/logo.svg" className="h-16 w-auto" alt="logo" />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`} 
              className="hover:text-pink-700 transition"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/about" className="text-sm font-medium">
          ABOUT
        </Link>

        {icons.map((icon) => (
          <button
            key={icon}
            className="h-[50px] w-[50px] flex items-center justify-center rounded-md"
            aria-label={icon}
          >
            <img
              src={`/${icon}.svg`}
              className="h-[22px] w-[22px] object-contain invert"
              alt={icon}
            />
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {[...Array(3)].map((_, i) => (
          <span key={i} className="w-6 h-[2px] bg-black"></span>
        ))}
      </button>
    </header>
  );
}
