import Hero from "@/components/custom/Hero";
import Features from "@/components/custom/Features";
import AboutSection from "@/components/custom/AboutSection";
import Gallery from "@/components/custom/Gallery";
import StudentFeedback from "@/components/custom/StudentFeedback";
import Partners from "@/components/custom/Partners";
import Inspiration from "@/components/custom/Inspiration";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
      <Inspiration />
      <Gallery />
      <StudentFeedback />
      <Partners />
    </main>
  );
}
