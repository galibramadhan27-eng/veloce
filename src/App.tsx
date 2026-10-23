import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.main>
);

export default function App() {
  const loc = useLocation();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [loc.pathname]);
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/gallery" element={<Page><Gallery /></Page>} />
          <Route path="/articles" element={<Page><Articles /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}