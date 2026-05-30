import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu as MenuIcon, X, Coffee } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
  scrolled
    ? "bg-cream/95 backdrop-blur shadow-sm"
    : "bg-black/30 backdrop-blur-md"}`}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <Link to="/" className={`flex items-center gap-2 ${ scrolled ? "text-espresso" : "text-white"}`}>
          <Coffee className="w-5 h-5" />
          <span className="font-serif text-xl tracking-wide">Brew Haven</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
  scrolled
    ? isActive
      ? "text-espresso font-medium"
      : "text-ink/70 hover:text-espresso"
    : isActive
      ? "text-white font-medium"
      : "text-white/80 hover:text-white"
}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="hidden md:inline-flex items-center rounded-full bg-espresso/90 hover:bg-espresso text-white text-sm px-4 py-2 transition-all">Reserve a Table</Link>
        <button className="md:hidden text-espresso" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-cream border-t border-latte px-6 py-6">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink onClick={() => setOpen(false)} to={l.to} className={({ isActive }) => `block text-base ${isActive ? "text-espresso font-medium" : "text-ink/70"}`}>{l.label}</NavLink>
              </li>
            ))}
            <Link onClick={() => setOpen(false)} to="/contact" className="btn-primary justify-center mt-2">Reserve a Table</Link>
          </ul>
        </div>
      )}
    </header>
  );
}
