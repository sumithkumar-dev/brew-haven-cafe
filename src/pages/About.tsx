import { motion } from "framer-motion";
import { Coffee, Users, Wifi, Heart } from "lucide-react";
import { galleryImages } from "../data/gallery";

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
    </>
  );
}
