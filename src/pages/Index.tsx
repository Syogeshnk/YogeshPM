import { useRef } from "react";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white relative">
      <Header
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          skills: () => scrollToSection(skillsRef),
          education: () => scrollToSection(educationRef),
          certifications: () => scrollToSection(certificationsRef),
          awards: () => scrollToSection(awardsRef),
          experience: () => scrollToSection(experienceRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      <main className="container mx-auto px-4 pt-20 space-y-4">
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={certificationsRef}>
          <Certifications />
        </div>
        <div ref={awardsRef}>
          <Awards />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#64FFDA] rounded-full p-3 hover:bg-[#64FFDA]/80 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-[#0A192F]" size={24} />
      </button>
    </div>
  );
};

export default Index;