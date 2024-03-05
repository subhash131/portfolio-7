import Approach from "@/components/approach";
import Hero from "@/components/hero";
import SmoothScroll from "@/components/scroll/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full h-full">
        <Hero />
        <Approach />
      </main>
    </SmoothScroll>
  );
}
