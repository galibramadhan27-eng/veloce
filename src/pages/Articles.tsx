import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import { articles, LAMBO_NEWSROOM, LAMBO_HOME } from "../data";

export default function Articles() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <div className="pt-40 pb-16 bg-[radial-gradient(ellipse_at_top_right,#2a2000,#0a0a0a_60%)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h1 className="title">Artikel & Berita</h1>
          <p className="text-white/70 mt-6 max-w-2xl">
            Kabar terbaru dari Automobili Lamborghini. Semua artikel bersumber dari situs resmi{" "}
            <a href={LAMBO_HOME} target="_blank" rel="noopener noreferrer" className="text-gold underline">lamborghini.com</a>.
          </p>
        </div>
      </div>
      <section className="section flex flex-col gap-12">
        {articles.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <article className="cut bg-steel border border-white/10 hover:border-gold transition-colors overflow-hidden grid md:grid-cols-5 group">
              <div className="overflow-hidden md:col-span-2 min-h-64">
                <img
                  src={a.img}
                  alt={a.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = a.fallback; } }}
                  className="w-full h-full min-h-64 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 md:p-10 md:col-span-3 flex flex-col">
                <div className="flex flex-wrap items-center gap-4 text-gold text-sm">
                  <span className="flex items-center gap-2"><CalendarDays size={16} />{a.date}</span>
                  <span className="border border-gold/60 px-2 py-0.5 uppercase tracking-widest text-xs">{a.tag}</span>
                </div>
                <h2 className="text-2xl md:text-3xl mt-4 normal-case tracking-normal">{a.title}</h2>
                <p className="text-white/70 mt-4">{a.excerpt}</p>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
                        {a.body.map((p, k) => <p key={k}>{p}</p>)}
                      </div>
                      <dl className="mt-8 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        {a.facts.map(([l, v]) => (
                          <div key={l} className="bg-ink p-4">
                            <dt className="text-gold text-xs uppercase tracking-widest">{l}</dt>
                            <dd className="mt-1 text-white/90 text-sm">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={() => setOpen(open === i ? null : i)} className="btn text-sm">
                    {open === i ? "Tutup" : "Baca Selengkapnya"}
                  </button>
                  <a href={a.source} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm inline-flex items-center gap-2">
                    Baca di lamborghini.com <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="text-center">
          <a href={LAMBO_NEWSROOM} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-2">
            Lihat Semua Berita Resmi <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </>
  );
}