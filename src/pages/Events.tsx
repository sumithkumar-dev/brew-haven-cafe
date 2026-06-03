import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/gallery";
import { events } from "../data/events";

export default function Events() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <p className="eyebrow mb-3">Community Events</p>

        <h1 className="text-5xl md:text-6xl text-espresso">
          More than coffee.
        </h1>

        <p className="mt-5 text-ink/70 max-w-2xl mx-auto">
          Live music, workshops, open mics and gatherings that bring
          Hanamkonda together.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl text-espresso mb-4">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-5 text-sm text-ink/70">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Brew Haven Café
                  </div>
                </div>

                <p className="text-ink/75 leading-relaxed mb-6">
                  {event.description}
                </p>

                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Reserve Spot
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}