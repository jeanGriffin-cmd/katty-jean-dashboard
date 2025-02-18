import { Hero } from "@/components/animated-hero";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="block bg-[url('/img/bg-imagen3.png')] bg-cover bg-center bg-no-repeat min-h-screen relative">
      {/* Add Meteors effect */}
      <Meteors number={30} />

      <Hero />
    </div>
  );
}
