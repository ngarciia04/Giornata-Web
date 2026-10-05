// INICIO — Home original intacta (mismo diseño que te encanta).
// ELEMENTOR: Portada / Front Page.
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
