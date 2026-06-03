import { motion } from "framer-motion";
import { Coffee, Users, Wifi, Heart } from "lucide-react";
import { galleryImages } from "../data/gallery";
import instaImage from "../assets/insta.jpg";
import { ArrowRight } from "lucide-react";

const values = [
  { icon: Coffee, title: "Craft Over Speed", text: "Every cup is pulled by hand. We'd rather you wait a minute than serve you something average." },
  { icon: Users, title: "A Place for Everyone", text: "Students with laptops, friends catching up, solo readers — there's a corner here for every kind of day." },
  { icon: Wifi, title: "Built for Long Sessions", text: "Strong wifi, plenty of plug points, and bottomless water. Stay as long as you'd like." },
  { icon: Heart, title: "Local at Heart", text: "We work with bakers, roasters and artists from Telangana — because the best café reflects its city." },
];

export default function About() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 text-center max-w-3xl mx-auto">
        <p className="eyebrow mb-3">Our Story</p>
        <h1 className="text-5xl md:text-6xl text-espresso leading-tight">A café born from a small idea in a small corner of Hanamkonda.</h1>
      </section>

      <section className="px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto pb-24">
        <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900" alt="Founder" className="rounded-2xl w-full h-[520px] object-cover" />
        <div>
          <p className="eyebrow mb-3">The Founder</p>
          <h2 className="text-4xl text-espresso mb-6">Started with a borrowed espresso machine.</h2>
          <p className="text-ink/75 leading-relaxed mb-4">In 2022, Aditya Reddy came back to Hanamkonda after years of working in Bangalore. He missed the city — but he also missed the unhurried, warmly-lit cafés he'd grown to love there.</p>
          <p className="text-ink/75 leading-relaxed mb-4">So he started small. One borrowed espresso machine. A second-hand grinder. A handful of tables in a quiet corner near Subedari.</p>
          <p className="text-ink/75 leading-relaxed">Three years on, Brew Haven is what he hoped it would be — a place where regulars know each other by name, where exam-week students get free refills, and where the coffee is, by everyone's quiet agreement, the best in town.</p>
        </div>
      </section>

      <section className="bg-espresso text-cream px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow text-caramel mb-3">Our Philosophy</p>
          <h2 className="text-4xl md:text-5xl">What we believe in.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-cream/10 grid place-items-center mb-5"><v.icon className="w-6 h-6 text-caramel" /></div>
              <h3 className="text-xl mb-3">{v.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <p className="eyebrow mb-3">A Community Café</p>
          <h2 className="text-4xl text-espresso mb-6">Not just a space. A regular thing.</h2>
          <p className="text-ink/75 leading-relaxed mb-4">Open mic nights every other Friday. Local artists on our walls. A community noticeboard near the entrance — for tutors, freelancers, dog adoptions, and the occasional lost wallet.</p>
          <p className="text-ink/75 leading-relaxed">If Hanamkonda has a living room, we'd like to think it's somewhere around here.</p>
        </div>
        <img src={galleryImages[17]} alt="Community" className="rounded-2xl w-full h-[480px] object-cover" />
      </section>
	  <section className="bg-[#0f0f0f] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
  {/* Decorative Circles */}
  <div className="absolute top-24 right-16 w-8 h-8 rounded-full border border-caramel/40" />
  <div className="absolute bottom-24 left-20 w-5 h-5 rounded-full border border-caramel/30" />

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* Instagram Preview */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <img
        src={instaImage}
        alt="Brew Haven Instagram"
        className="w-full rounded-[28px] shadow-2xl border border-white/10"
      />
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="uppercase tracking-[0.35em] text-caramel text-xs mb-6">
        Instagram
      </p>

      <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mb-8">
        Fresh brews,
        <br />
        cozy corners &
        <br />
        everyday moments.
      </h2>

      <p className="text-white/70 text-lg leading-relaxed max-w-md mb-12">
        Follow Brew Haven for event announcements, new menu launches,
        latte art, behind-the-scenes stories and everyday café life.
      </p>

      <div className="flex flex-wrap items-center gap-8">

        <a
          href="https://instagram.com/brew_haven_cafe"
          target="_blank"
          rel="noreferrer"
          className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Follow Us
        </a>

        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center"
        >
          <div className="w-3 h-3 rounded-full bg-caramel" />
          <div className="w-16 h-[2px] bg-caramel" />
          <ArrowRight className="w-5 h-5 text-caramel -ml-1" />
        </motion.div>

      </div>
    </motion.div>

  </div>
</section>
    </>
  );
}
