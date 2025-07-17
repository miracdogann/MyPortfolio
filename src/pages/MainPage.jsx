import Header from "../components/Header";
import HeroSection from "../components/HeroSeciton";
import Contact from "../components/Contact";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/Projects";

export default function MainPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection />
      {/* <SkillsComponent /> */}
      <ProjectsSection />
      <Contact />
    </>
  );
}
