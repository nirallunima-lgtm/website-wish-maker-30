import StarField from "@/components/StarField";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <Navigation />
      <SocialSidebar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
