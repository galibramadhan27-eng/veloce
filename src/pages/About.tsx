import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { org } from "../data";

const history = [
  ["1964", "Didirikan di Modena oleh Enzo Veloce dengan bengkel kecil berisi 12 teknisi."],
  ["1978", "Meluncurkan V12 pertama yang menjadi fondasi identitas performa VELOCE."],
  ["1999", "Membuka pabrik modern dan tim balap VELOCE Corse."],
  ["2015", "Memperkenalkan platform hybrid pertama dengan sasis serat karbon monokok."],
  ["2026", "Beroperasi 100% energi terbarukan dan hadir di 48 negara."],
];
const misi = [
  "Menciptakan mobil dengan performa dan desain terbaik di kelasnya.",
  "Menjaga tradisi kerajinan tangan dengan teknologi terkini.",
  "Mengurangi jejak karbon di seluruh rantai produksi.",
  "Memberikan pengalaman kepemilikan istimewa seumur hidup.",
];

export default function About() {
  return (
    <>
      <div className="pt-40 pb-16 bg-[radial-gradient(ellipse_at_top_right,#2a2000,#0a0a0a_60%)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10"><h1 className="title">Tentang Kami</h1></div>
      </div>

      <section className="section">
        <Reveal><h2 className="text-3xl text-gold mb-10">Sejarah Perusahaan</h2></Reveal>
        <div className="relative border-l-2 border-gold/40 ml-3 space-y-10">
          {history.map(([y, t], i) => (
            <Reveal key={y} delay={i * 0.05} x={-30} y={0}>
              <div className="pl-8 relative">
                <span className="absolute -left-[9px] top-2 w-4 h-4 bg-gold rotate-45" />
                <div className="font-display text-4xl text-gold">{y}</div>
                <p className="text-white/70 mt-1 max-w-2xl">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-steel">
        <div className="section grid md:grid-cols-2 gap-10">
          <Reveal x={-50} y={0}>
            <div className="cut border border-gold/40 p-10 h-full">
              <h2 className="text-3xl text-gold">Visi</h2>
              <p className="mt-5 text-white/80 text-lg leading-relaxed">
                Menjadi produsen mobil performa tinggi paling dihormati di dunia, yang menyatukan emosi,
                teknologi, dan keberlanjutan.
              </p>
            </div>
          </Reveal>
          <Reveal x={50} y={0}>
            <div className="cut border border-white/10 p-10 h-full">
              <h2 className="text-3xl text-gold">Misi</h2>
              <ul className="mt-5 space-y-3 text-white/80">
                {misi.map((m) => <li key={m} className="flex gap-3"><span className="text-gold">▸</span>{m}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal><h2 className="title">Struktur Organisasi</h2></Reveal>
        <div className="mt-14 flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="cut bg-gold text-ink px-10 py-5 text-center">
            <div className="font-display text-xl">{org[0].role}</div>
            <div className="text-sm">{org[0].name}</div>
          </motion.div>
          <div className="w-px h-10 bg-gold" />
          <div className="hidden md:block w-2/3 h-px bg-gold" />
          <div className="grid md:grid-cols-3 gap-6 w-full md:w-auto md:-mt-0">
            {org.slice(1).map((o, i) => (
              <Reveal key={o.role} delay={i * 0.15}>
                <div className="flex flex-col items-center">
                  <div className="hidden md:block w-px h-8 bg-gold" />
                  <div className="cut border border-gold/50 px-8 py-5 text-center min-w-60 hover:bg-gold/10 transition">
                    <div className="font-display text-gold">{o.role}</div>
                    <div className="text-white/70 text-sm">{o.name}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
