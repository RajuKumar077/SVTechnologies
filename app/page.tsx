import Hero from "../src/components/Hero.js";
import HowItWorks from "../src/sections/HowItWorks.js";
import ProjectCategories from "../src/sections/ProjectCategories.js";
import Testimonials from "../src/sections/Testimonials.js";
import Footer from "../src/components/Footer.js";

export default function Home() {
  const pageHtml = [Hero(), HowItWorks(), ProjectCategories(), Testimonials(), Footer()].join("\n");

  return <main dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
