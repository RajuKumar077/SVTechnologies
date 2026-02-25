import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import Hero from "./components/Hero.js";
import HowItWorks from "./sections/HowItWorks.js";
import ProjectCategories from "./sections/ProjectCategories.js";
import Testimonials from "./sections/Testimonials.js";
import Footer from "./components/Footer.js";

export default function App() {
  document.title = "SV Technologies Project-Based Learning & Placement";

  return (
    <>
      <header style={{ padding: "16px", display: "flex", justifyContent: "flex-end", gap: "12px" }}>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <div dangerouslySetInnerHTML={{ __html: Hero() }} />
      <div dangerouslySetInnerHTML={{ __html: HowItWorks() }} />
      <div dangerouslySetInnerHTML={{ __html: ProjectCategories() }} />
      <div dangerouslySetInnerHTML={{ __html: Testimonials() }} />
      <div dangerouslySetInnerHTML={{ __html: Footer() }} />
    </>
  );
}
