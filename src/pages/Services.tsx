import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "../components/Reveal";
import { services } from "../data";

export default function Services() {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <>
      <div className="pt-40 pb-16 bg-[radial-gradient(ellipse_at_top_right,#2a2000,#0a0a0a_60%)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10"><h1 className="title">Layanan & Produk</h1></div>
      </div>
      <section className="section grid sm:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 0.15}>
            <motion.article whileHover={{ y: -8 }} className="cut bg-steel border border-white/10 hover:border-gold transition-colors overflow-hidden h-full flex flex-col">
              <div className="overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-64 object-cover hover:scale-110 transition duration-700" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-2xl text-gold">{s.name}</h3>
                <p className="text-white/70 mt-3 flex-1">{s.desc}</p>
                <button onClick={() => setSel(i)} className="btn mt-6 self-start">Detail</button>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </section>

      <AnimatePresence>
        {sel !== null && (
          <motion.div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div initial={{ scale: 0.85, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} className="cut bg-steel max-w-2xl w-full relative">
              <button className="absolute top-3 right-3 bg-black/60 p-2 hover:text-gold" onClick={() => setSel(null)}><X /></button>
              <img src={services[sel].img} alt="" className="w-full h-60 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl text-gold">{services[sel].name}</h3>
                <p className="mt-4 text-white/80 leading-relaxed">{services[sel].detail}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
