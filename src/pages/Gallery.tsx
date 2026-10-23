import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "../data";

export default function Gallery() {
  const [sel, setSel] = useState<string | null>(null);
  return (
    <>
      <div className="pt-40 pb-16 bg-[radial-gradient(ellipse_at_top_right,#2a2000,#0a0a0a_60%)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10"><h1 className="title">Galeri</h1></div>
      </div>
      <section className="section columns-1 sm:columns-2 lg:columns-4 gap-4">
        {gallery.map((g, i) => (
          <motion.div key={g.src}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08 }}
            className="mb-4 break-inside-avoid overflow-hidden cut cursor-zoom-in group"
            onClick={() => setSel(g.src)}>
            <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition duration-700 group-hover:scale-110 group-hover:brightness-110" />
          </motion.div>
        ))}
      </section>
      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <button className="absolute top-5 right-5 hover:text-gold"><X size={32} /></button>
            <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} src={sel} alt=""
              className="max-h-[90vh] max-w-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
