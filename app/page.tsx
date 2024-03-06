import Approach from "@/components/approach";
import CreativeFrontendDeveloper from "@/components/creative-frontend-developer";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import SmoothScroll from "@/components/scroll/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full h-full">
        <Hero />
        <Approach />
        <Experience />
        <CreativeFrontendDeveloper />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
