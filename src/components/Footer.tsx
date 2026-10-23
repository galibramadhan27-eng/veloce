import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-steel border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 text-white/60 max-w-sm">Rekayasa presisi dan desain berani sejak 1964. Setiap VELOCE adalah karya seni yang bergerak.</p>
        </div>
        <div>
          <h3 className="text-gold mb-4">Menu</h3>
          <ul className="space-y-2 text-white/70">
            {[["/about", "Tentang Kami"], ["/services", "Layanan"], ["/gallery", "Galeri"], ["/articles", "Artikel"], ["/contact", "Kontak"]].map(([to, l]) => (
              <li key={to}><Link className="hover:text-gold" to={to}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gold mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
            <Instagram className="hover:text-gold cursor-pointer" />
            <Youtube className="hover:text-gold cursor-pointer" />
            <Facebook className="hover:text-gold cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center text-white/40 text-sm py-5 border-t border-white/10">
        © 2026 VELOCE Automotive (merek fiktif). Semua hak dilindungi.
      </div>
    </footer>
  );
}
