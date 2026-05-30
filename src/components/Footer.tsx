import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/90 px-6 md:px-12 lg:px-20 pt-20 pb-8">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="w-5 h-5" />
            <span className="font-serif text-2xl">Brew Haven</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">A second home for students, creatives and coffee lovers in Hanamkonda.</p>
        </div>
        <div>
          <h4 className="text-cream text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-caramel">Menu</Link></li>
            <li><Link to="/about" className="hover:text-caramel">Our Story</Link></li>
            <li><Link to="/gallery" className="hover:text-caramel">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-caramel">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream text-lg mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Subedari Road, Hanamkonda, Telangana 506001</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5" /> hello@brewhaven.in</li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream text-lg mb-4">Hours</h4>
          <p className="text-sm text-cream/80">Mon — Sun<br />8:00 AM — 11:30 PM</p>
          <div className="flex gap-3 mt-4">
  <a
    href="https://instagram.com/"
    target="_blank"
    rel="noreferrer"
    className="w-9 h-9 rounded-full border border-cream/30 grid place-items-center hover:bg-cream hover:text-espresso transition"
  >
    <Instagram className="w-4 h-4" />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="w-9 h-9 rounded-full border border-cream/30 grid place-items-center hover:bg-cream hover:text-espresso transition"
  >
    <Facebook className="w-4 h-4" />
  </a>
</div>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-cream/15 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Brew Haven Café · Hanamkonda · Crafted with warmth.
      </div>
    </footer>
  );
}
