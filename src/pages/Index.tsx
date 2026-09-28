import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
