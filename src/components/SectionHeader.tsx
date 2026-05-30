import { motion } from "framer-motion";
type Props = { eyebrow?: string; title: string; subtitle?: string; center?: boolean };
export default function SectionHeader({ eyebrow, title, subtitle, center }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-4xl md:text-5xl text-espresso leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-ink/70 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
