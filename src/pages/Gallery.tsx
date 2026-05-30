import { motion } from "framer-motion";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <p className="eyebrow mb-3">Gallery</p>
        <h1 className="text-5xl md:text-6xl text-espresso">Inside Brew Haven.</h1>
        <p className="mt-4 text-ink/70 max-w-xl mx-auto">A look at the space, the drinks, and the small moments in between.</p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {galleryImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Brew Haven ${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="w-full rounded-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500 object-cover"
            />
          ))}
        </div>
      </section>
    </>
  );
}
