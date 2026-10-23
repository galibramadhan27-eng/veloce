import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  ["/", "Home"], ["/about", "Tentang Kami"], ["/services", "Layanan"],
  ["/gallery", "Galeri"], ["/articles", "Artikel"], ["/contact", "Kontak"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const cls = ({ isActive }: { isActive: boolean }) =>
    `font-display uppercase tracking-widest text-sm transition hover:text-gold ${isActive ? "text-gold" : "text-white"}`;

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${solid || open ? "bg-black/90 backdrop-blur" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}><Logo /></Link>
        <nav className="hidden lg:flex gap-8">
          {links.map(([to, l]) => <NavLink key={to} to={to} end className={cls}>{l}</NavLink>)}
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden flex flex-col gap-5 px-5 pb-6"
          >
            {links.map(([to, l]) => (
              <NavLink key={to} to={to} end className={cls} onClick={() => setOpen(false)}>{l}</NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
