import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
 Clock,
  Instagram,
  MessageCircle,
  Car,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <p className="eyebrow mb-3">Get In Touch</p>

        <h1 className="text-5xl md:text-6xl text-espresso leading-tight">
          Come say hello.
        </h1>

        <p className="mt-4 text-ink/70 max-w-xl mx-auto leading-relaxed">
          For reservations, conversations, or a slow evening coffee in the
          heart of Hanamkonda.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto pb-24 grid md:grid-cols-2 gap-14 items-start">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-latte"
        >
          <p className="tracking-[0.3em] uppercase text-xs text-caramel mb-4">
            Visit Brew Haven
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight mb-6">
            Coffee,
            <br />
            conversations
            <br />& calm.
          </h2>

          <p className="text-ink/70 leading-relaxed mb-10">
            Whether you're catching up with friends, working remotely,
            or simply slowing down for a while — Brew Haven is your
            quiet corner in Hanamkonda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-latte px-6 py-3 text-espresso hover:bg-cream transition-all"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Contact Details */}
        <div className="space-y-7">
          {[
            {
              icon: MapPin,
              title: "Address",
              value: "Subedari Road, Hanamkonda, Telangana 506001",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "+91 98765 43210",
            },
            {
              icon: Mail,
              title: "Email",
              value: "hello@brewhaven.in",
            },
            {
              icon: Clock,
              title: "Hours",
              value: "Mon – Sun · 8:00 AM – 11:30 PM",
            },
            {
              icon: Car,
              title: "Parking",
              value:
                "Free 2-wheeler parking. Car parking available across the street.",
            },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-full bg-latte/60 grid place-items-center shrink-0">
                <c.icon className="w-5 h-5 text-espresso" />
              </div>

              <div>
                <p className="text-espresso font-medium">
                  {c.title}
                </p>

                <p className="text-ink/70 text-sm mt-1 leading-relaxed">
                  {c.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Intro */}
      <section className="px-6 md:px-12 lg:px-20 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="tracking-[0.3em] uppercase text-xs text-caramel mb-4">
            Find Us
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-5">
            Right in the heart
            <br />
            of Hanamkonda.
          </h2>

          <p className="text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Just a few minutes away from NIT Warangal, Brew Haven is designed
            for slow evenings, coffee breaks, conversations and quiet work
            sessions.
          </p>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-[2rem] border border-latte shadow-sm">
            <iframe
              title="Brew Haven Location"
              src="https://www.google.com/maps?q=Hanamkonda,Telangana&output=embed"
              className="w-full h-[320px] md:h-[480px] border-0"
              loading="lazy"
            />
          </div>

          {/* Map CTA */}
          <div className="flex justify-center mt-8">
            <a
              href="https://maps.google.com/?q=Hanamkonda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-espresso text-white px-7 py-3 hover:opacity-90 transition-all"
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
