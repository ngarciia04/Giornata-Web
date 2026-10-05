// APP — multipágina pensada para Elementor (1 ruta = 1 página/plantilla WP).
// /                 → Portada (Home: Hero + Services + About + Features + Testimonials + CTA)
// /nosotros         → Página "Sobre Nosotros"
// /servicios        → Página "Servicios" (listado CPT) | /servicios/:slug → Single CPT Servicio
// /galeria          → Página "Galería" (Loop Grid + filtros)
// /blog             → Página "Blog" | /blog/:slug → Single Entrada
// /contacto         → Página "Contacto" (Form + Mapa + FAQ)
// Solo animación/layout/estado visual local. Sin backend ni APIs.

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";

function Preloader() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => {
        if (v >= 100) {
          clearInterval(id);
          return 100;
        }
        return v + Math.ceil(Math.random() * 12);
      });
    }, 90);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[100] bg-ink text-bone flex flex-col items-center justify-center"
    >
      <div className="font-display italic font-light text-4xl md:text-6xl">Giornata<span className="text-clay not-italic">.</span></div>
      <div className="mt-4 font-display text-7xl md:text-8xl font-light tabular-nums">{Math.min(n, 100)}<span className="text-2xl align-top">%</span></div>
      <div className="mt-6 w-56 h-px bg-bone/15 overflow-hidden">
        <div className="h-full bg-clay transition-all duration-200" style={{ width: `${Math.min(n, 100)}%` }} />
      </div>
      <p className="mt-4 text-[11px] tracking-[0.35em] uppercase text-bone/50">preparando el taller…</p>
    </motion.div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (!fine) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[95] w-5 h-5 rounded-full bg-ochre mix-blend-difference"
      style={{ transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`, transition: "transform 0.12s ease-out" }}
    />
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Shell() {
  return (
    <div className="grain bg-bone text-ink font-sans min-h-screen">
      <Cursor />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>{loading && <Preloader key="pre" />}</AnimatePresence>
      <Shell />
    </BrowserRouter>
  );
}
