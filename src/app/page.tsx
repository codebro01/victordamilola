import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import AccomplishmentsSection from "@/components/sections/accomplishments-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AccomplishmentsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
