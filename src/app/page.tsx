import About from "@/Components/HomoComponent/about";
import Carousel from "@/Components/HomoComponent/carousel";
import Farmhouse from "@/Components/HomoComponent/farmhouse";
import HeroSection from "@/Components/HomoComponent/heroSection";
import Location from "@/Components/HomoComponent/location";
import Mruganayani from "@/Components/HomoComponent/mruganayani";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <Mruganayani />
      <Farmhouse />
      <About />
      <Carousel/>
      <Location/>
    </main>
  );
}
