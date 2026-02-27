import Hero from "./components/Hero.js";
import HowItWorks from "./sections/HowItWorks.js";
import ProjectCategories from "./sections/ProjectCategories.js";
import Testimonials from "./sections/Testimonials.js";
import Footer from "./components/Footer.js";

export default function App() {
  document.title = "SV Technologies Project-Based Learning & Placement";

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Hero() }} />
      <div dangerouslySetInnerHTML={{ __html: HowItWorks() }} />
      <div dangerouslySetInnerHTML={{ __html: ProjectCategories() }} />
      <div dangerouslySetInnerHTML={{ __html: Testimonials() }} />
      <div dangerouslySetInnerHTML={{ __html: Footer() }} />
    </>
  );
}
