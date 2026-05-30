import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Instagram,
  Coffee,
  Clock,
  MapPin,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import { menu } from "../data/menu";
import { reviews } from "../data/reviews";
import { galleryImages } from "../data/gallery";

import cafeImage from "../assets/cafe.jpg";

const featured = menu[4].items.slice(0, 3);

const featuredImages = galleryImages.slice(14, 17);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={cafeImage}
          alt="Brew Haven Café interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cream/80 tracking-[0.4em] text-xs uppercase mb-6"
          >
            Hanamkonda · Est. 2022
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-cream text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] max-w-4xl"
          >
            A quiet corner for{" "}
            <em className="text-caramel">coffee</em>, conversation & calm.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-cream/85 max-w-xl text-lg leading-relaxed"
          >
            A second home for students, creatives and coffee lovers in the
            heart of Hanamkonda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="btn-primary bg-cream text-espresso hover:bg-caramel hover:text-cream"
            >
              Explore the Menu
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="btn-primary bg-cream text-espresso hover:bg-caramel hover:text-cream"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-6 inset-x-0 flex justify-center text-cream/60 text-xs tracking-widest">
          SCROLL ↓
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="bg-latte/40 py-6 px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-espresso text-sm">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Open Daily · 8AM – 11:30PM
          </span>

          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Subedari Road, Hanamkonda
          </span>

          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-caramel text-caramel" />
            4.8 / 5 · 1,200+ Google Reviews
          </span>
        </div>
      </section>

      {/* FEATURED DRINKS */}
      <section className="section">
        <SectionHeader
          eyebrow="Signature Pours"
          title="Crafted slowly. Sipped slower."
          subtitle="A handful of recipes our regulars keep coming back for."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={featuredImages[i]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-7">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl text-espresso">{item.name}</h3>

                  <span className="text-caramel font-medium">
                    {item.price}
                  </span>
                </div>

                <p className="text-ink/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu" className="btn-outline">
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section bg-espresso text-cream">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={galleryImages[8]}
              alt="Café experience"
              className="rounded-2xl w-full h-[520px] object-cover"
            />
          </motion.div>

          <div>
            <p className="eyebrow text-caramel mb-3">
              The Brew Haven Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              More than coffee.
              <br />
              <em>A pause in your day.</em>
            </h2>

            <p className="text-cream/80 leading-relaxed mb-4">
              Warm timber, soft jazz, and the smell of fresh-roasted beans.
              Every detail at Brew Haven is designed for slow mornings, long
              study sessions, and quiet first dates.
            </p>

            <p className="text-cream/80 leading-relaxed mb-8">
              We source single-origin beans, work with local bakers, and keep
              our menu small — so we can do it well.
            </p>

            <Link
              to="/about"
              className="btn-primary bg-cream text-espresso hover:bg-caramel hover:text-cream"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <SectionHeader
          center
          eyebrow="The Space"
          title="Designed to feel like home, only quieter."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.slice(0, 8).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`overflow-hidden rounded-xl ${
                i % 5 === 0 ? "row-span-2 h-full" : "h-56"
              }`}
            >
              <img
                src={src}
                alt="Ambience"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-outline">
            See the Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section bg-latte/30">
        <SectionHeader
          center
          eyebrow="What Guests Say"
          title="Loved by Hanamkonda."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${r.color} text-white grid place-items-center text-sm font-medium`}
                  >
                    {r.initials}
                  </div>

                  <div>
                    <p className="text-espresso font-medium text-sm">
                      {r.name}
                    </p>

                    <p className="text-ink/50 text-xs">
                      Local Guide · {r.date}
                    </p>
                  </div>
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-5 object-contain"
                />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-caramel text-caramel"
                  />
                ))}
              </div>

              <p className="text-ink/80 leading-relaxed italic">
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/reviews" className="btn-outline">
            Read All Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section">
        <SectionHeader
          center
          eyebrow="@brewhaven.hnk"
          title="Follow us on Instagram"
          subtitle="A daily diary of latte art, golden-hour windows and the occasional cinnamon roll."
        />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
  {galleryImages.slice(2, 8).map((src, i) => (
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noreferrer"
      key={i}
      className="relative aspect-square overflow-hidden group rounded-lg"
    >
      <img
        src={src}
        alt="Instagram post"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/60 grid place-items-center transition-all">
        <Instagram className="w-6 h-6 text-cream opacity-0 group-hover:opacity-100 transition" />
      </div>
    </a>
  ))}
</div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 py-32 text-center overflow-hidden">
        <img
          src={galleryImages[12]}
          alt="Café ambience"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-espresso/80" />

        <div className="relative z-10 max-w-2xl mx-auto text-cream">
          <Coffee className="w-10 h-10 mx-auto mb-6 text-caramel" />

          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Your table is waiting.
          </h2>

          <p className="text-cream/80 mb-10 text-lg leading-relaxed">
            Book ahead for weekends, or just walk in and find your favourite
            corner.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-cream text-espresso hover:bg-caramel hover:text-cream"
            >
              Reserve a Table
            </Link>

            <a
              href="https://wa.me/919876543210"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 transition-all duration-300 shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
