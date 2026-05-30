import { motion } from "framer-motion";
import { useState } from "react";
import { menu } from "../data/menu";

export default function MenuPage() {
  const [active, setActive] = useState(menu[0].id);
  return (
    <>
      <section className="pt-36 pb-12 px-6 md:px-12 lg:px-20 text-center bg-latte/30">
        <p className="eyebrow mb-3">Our Menu</p>
        <h1 className="text-5xl md:text-6xl text-espresso">Small menu. Big care.</h1>
        <p className="mt-4 text-ink/70 max-w-xl mx-auto">Every drink, dessert and bite is crafted in-house with locally sourced ingredients.</p>
      </section>

      <div className="sticky top-[72px] z-40 bg-cream/95 backdrop-blur border-b border-latte">
        <div className="flex gap-2 overflow-x-auto px-6 md:px-12 lg:px-20 py-4 justify-start md:justify-center">
          {menu.map((c) => (
            <button key={c.id} onClick={() => { setActive(c.id); document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition ${active === c.id ? "bg-espresso text-cream" : "text-ink/70 hover:text-espresso"}`}>
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 max-w-6xl mx-auto">
        {menu.map((cat) => (
          <section id={cat.id} key={cat.id} className="mb-20 scroll-mt-44">
            <h2 className="text-4xl text-espresso mb-10 border-b border-latte pb-4">{cat.title}</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {cat.items.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl text-espresso group-hover:text-caramel transition-colors">{item.name}</h3>
                    <div className="flex-1 border-b border-dashed border-latte mx-1 translate-y-[-4px]" />
                    <span className="text-caramel font-medium">{item.price}</span>
                  </div>
                  <p className="mt-1 text-ink/65 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
