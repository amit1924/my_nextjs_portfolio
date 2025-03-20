import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FloatingContactButton from "./FloatingContactButton";
import Footer from "./Footer";

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (sectionName: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      Home: homeRef,
      About: aboutRef,
      Projects: projectsRef,
      Skills: skillsRef,
      Contact: contactRef,
    };

    const ref = sectionMap[sectionName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-background text-foreground min-h-screen">
      <Navbar onSectionClick={scrollToSection} />

      <div ref={homeRef}>
        <HomeSection />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={skillsRef}>
        <SkillsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <FloatingContactButton scrollToContact={scrollToContact} />

      <Footer
        onScrollToTop={() => scrollToSection("Home")}
        socialLinks={{
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          email: "mailto:contact@example.com",
        }}
        copyrightName="Amit Kumar"
      />
    </div>
  );
};

export default Home;
