import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";

const info = [
  { Icon: MapPin, t: "Alamat", v: "Jl. Jenderal Sudirman No. 88, Jakarta Selatan 12190" },
  { Icon: Phone, t: "Telepon", v: "+62 21 5555 0123", href: "tel:+622155550123" },
  { Icon: Mail, t: "Gmail", v: "hello.veloce@gmail.com", href: "mailto:hello.veloce@gmail.com" },
  { Icon: MessageCircle, t: "WhatsApp", v: "+62 812 3456 7890", href: "https://wa.me/6281234567890" },
];

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [st, setSt] = useState<"idle" | "ok">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${f.name}`);
    const body = encodeURIComponent(`Nama: ${f.name}\nEmail: ${f.email}\n\n${f.message}`);
    window.location.href = `mailto:hello.veloce@gmail.com?subject=${subject}&body=${body}`;
    setSt("ok");
    setF({ name: "", email: "", message: "" });
  };

  const input = "w-full bg-ink border border-white/20 focus:border-gold outline-none px-4 py-3 transition";

  return (
    <>
      <div className="pt-40 pb-16 bg-[radial-gradient(ellipse_at_top_right,#2a2000,#0a0a0a_60%)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10"><h1 className="title">Kontak</h1></div>
      </div>
      <section className="section grid lg:grid-cols-2 gap-12">
        <Reveal x={-50} y={0}>
          <div className="space-y-6">
            {info.map(({ Icon, t, v, href }) => (
              <motion.div key={t} whileHover={{ x: 8 }} className="flex gap-5 items-start">
                <div className="cut bg-gold text-ink p-3"><Icon /></div>
                <div>
                  <h3 className="text-gold">{t}</h3>
                  {href ? <a href={href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold">{v}</a> : <p className="text-white/80">{v}</p>}
                </div>
              </motion.div>
            ))}
          </div>
          <iframe title="Google Maps" className="w-full h-72 mt-10 border border-gold/40 grayscale invert-[0.9] contrast-90" loading="lazy"
            src="https://www.google.com/maps?q=Jalan+Jenderal+Sudirman+Jakarta&output=embed" />
        </Reveal>

        <Reveal x={50} y={0}>
          <form onSubmit={submit} className="cut bg-steel p-8 space-y-5">
            <h2 className="text-3xl text-gold">Kirim Pesan</h2>
            <input required className={input} placeholder="Nama" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required type="email" className={input} placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
            <textarea required rows={6} className={input} placeholder="Pesan Anda" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
            <button className="btn">Kirim</button>
            {st === "ok" && <p className="text-green-400">Aplikasi email Anda dibuka. Silakan tekan kirim di sana. Terima kasih!</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}