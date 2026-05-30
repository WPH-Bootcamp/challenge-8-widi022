// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import ContactSection from "../components/sections/ContactSection";
import StatsSection from "../components/sections/StatsSection";
import ProcessSection from "../components/sections/ProcessSection";
import ProjectsSection from "../components/sections/ProjectsSection";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* <Navbar /> */}

      <main>
        <HeroSection />
        <StatsSection />
        <ProcessSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialSection />
        <ContactSection />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
