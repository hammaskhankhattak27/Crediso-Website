import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Projects } from "@/components/sections/Projects";
import { Offers } from "@/components/sections/Offers";
import { Sustainability } from "@/components/sections/Sustainability";
import { Newsletter } from "@/components/sections/Newsletter";
import { Certifications } from "@/components/sections/Certifications";
import { SocialProof } from "@/components/sections/SocialProof";
import { Ticker } from "@/components/sections/Ticker";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        {/* Order mirrors the Figma frame's vertical (Y) layout, top to bottom */}
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Projects />
        <Offers />
        <Sustainability />
        <Newsletter />
        <Certifications />
        <SocialProof />
        <Ticker />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
