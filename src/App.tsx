import ConceptNotice from "./components/ConceptNotice";
import FoodDrinks from "./components/FoodDrinks";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Reserve from "./components/Reserve";
import Story from "./components/Story";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Story />
        <FoodDrinks />
        <Gallery />
        <Reserve />
        <Location />
      </main>
      <Footer />
      <ConceptNotice />
    </>
  );
}
