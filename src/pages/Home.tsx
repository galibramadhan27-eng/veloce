import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { stats, strengths, services } from "../data";

const Car3D = lazy(() => import("../components/Car3D"));

export default function Home() {
  return (
    <>
      {/* BANNER */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#2a2000_0%,#0a0a0a_60%)]">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,transparent_45%,#F5B800_45%,#F5B800_45.3%,transparent_45.3%)]" />
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
          <Suspense fallback={null}><Car3D /></Suspense>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-24 w-full pointer-events-none">
          <motion.p initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="text-gold font-display tracking-[0.5em] text-sm">SEJAK 1964</motion.p>
          <h1 className="text-[18vw] md:text-[10rem] font-bold leading-none flex overflow-hidden">
            {"VELOCE".split("").map((c, i) => (
              <motion.span key={i} initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.7, ease: "easeOut" }}>{c}</motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="font-display text-2xl md:text-4xl tracking-widest text-white/90 mt-2">
            Kecepatan Adalah <span className="text-gold">Seni</span>
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
            className="mt-10 flex gap-4 flex-wrap pointer-events-auto">
            <Link to="/services" className="btn">Jelajahi Model</Link>
            <Link to="/contact" className="btn-ghost">Hubungi Kami</Link>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"><ChevronsDown /></motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-gold text-ink overflow-hidden py-3">
        <div className="flex w-max animate-marquee font-display text-2xl tracking-[0.4em] whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => <span key={i} className="px-8">VELOCE ✦ PERFORMA ✦ DESAIN ✦</span>)}
        </div>
      </div>

      {/* RINGKASAN */}
      <section className="section grid md:grid-cols-2 gap-12 items-center">
        <Reveal x={-60} y={0}>
          <h2 className="title">Profil Perusahaan</h2>
          <p className="mt-8 text-white/70 leading-relaxed">
            VELOCE Automotive adalah produsen mobil performa tinggi yang berdiri sejak 1964. Kami memadukan
            rekayasa presisi, material serat karbon, dan kerajinan tangan untuk menciptakan hypercar dan grand
            tourer yang menjadi simbol kecepatan, keindahan, dan prestise.
          </p>
          <Link to="/about" className="btn mt-8">Selengkapnya</Link>
        </Reveal>
        <Reveal x={60} y={0}>
          <div className="grid grid-cols-2 gap-px bg-gold/30">
            {stats.map((s) => (
              <div key={s.l} className="bg-ink p-8 text-center">
                <div className="font-display text-5xl text-gold"><Counter n={s.n} s={s.s} /></div>
                <div className="text-white/60 mt-2 text-sm uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-steel">
        <div className="section">
          <Reveal><h2 className="title">Keunggulan Kami</h2></Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.12}>
                <motion.div whileHover={{ y: -8 }} className="cut border border-white/10 hover:border-gold p-8 h-full bg-ink transition-colors">
                  <div className="font-display text-6xl text-gold/30">0{i + 1}</div>
                  <h3 className="text-xl mt-3">{s.t}</h3>
                  <p className="text-white/60 mt-3 text-sm">{s.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW PRODUK */}
      <section className="section">
        <Reveal><h2 className="title">Lini Produk</h2></Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <Link to="/services" className="group block relative overflow-hidden cut">
                <img src={s.img} alt={s.name} className="w-full h-72 object-cover transition duration-700 group-hover:scale-110 group-hover:grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl">{s.name}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
