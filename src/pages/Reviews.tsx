import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import googleLogo from "../assets/google-logo.svg";
import { reviews } from "../data/reviews";

export default function Reviews() {
  const avg = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-14 px-6 md:px-12 lg:px-20 text-center">
        <p className="eyebrow mb-3">Google Reviews</p>

        <h1 className="text-5xl md:text-6xl text-espresso leading-tight">
          Loved by guests
          <br />
          across Hanamkonda.
        </h1>

        <p className="mt-5 text-ink/70 max-w-2xl mx-auto leading-relaxed">
          From coffee dates and remote work sessions to slow evening
          conversations — Brew Haven has quietly become a favourite local spot.
        </p>
      </section>

      {/* Google Summary Card */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto pb-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] border border-latte shadow-sm p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left Side */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center">
                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-5xl font-serif text-espresso">
                    {avg}
                  </h2>

                  <div className="flex items-center gap-1 text-[#FBBC04]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-5 h-5 fill-current stroke-none"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-ink/60 mt-2">
                  Based on 1,247 Google reviews
                </p>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="flex-1 max-w-md space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const pct =
                  stars === 5
                    ? 86
                    : stars === 4
                    ? 10
                    : stars === 3
                    ? 3
                    : 1;

                return (
                  <div
                    key={stars}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-3 text-ink/60">{stars}</span>

                    <Star className="w-3 h-3 fill-[#FBBC04] text-[#FBBC04]" />

                    <div className="flex-1 h-2 bg-latte/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FBBC04] rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <span className="w-10 text-right text-ink/60">
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
              }}
              className="bg-white border border-latte rounded-[1.75rem] p-7 shadow-sm hover:shadow-md transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${r.color} text-white grid place-items-center text-sm font-medium shrink-0`}
                  >
                    {r.initials}
                  </div>

                  <div>
                    <p className="text-espresso font-medium leading-none">
                      {r.name}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex gap-[2px] text-[#FBBC04]">
                        {Array.from({ length: r.rating }).map((_, k) => (
                          <Star
                            key={k}
                            className="w-4 h-4 fill-current stroke-none"
                          />
                        ))}
                      </div>

                      <span className="text-xs text-ink/50">
                        {r.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Google Logo */}
                <div className="w-8 h-8 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <img
                    src={googleLogo}
                    alt="Google"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-ink/75 leading-relaxed text-[15px]">
                {r.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="flex justify-center mt-14">
          <a
            href="https://maps.google.com/?q=Hanamkonda+cafe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-espresso text-white px-7 py-3 hover:opacity-90 transition-all"
          >
            View More Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}