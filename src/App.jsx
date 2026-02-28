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
      <header
        style={{
          position: "fixed",
          top: "12px",
          right: "16px",
          zIndex: 1000,
          display: "flex",
          gap: "10px",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.92)",
          padding: "8px 10px",
          borderRadius: "10px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <SignedOut>
          <SignInButton mode="modal">
            <button type="button">Sign in</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button type="button">Sign up</button>
          </SignUpButton>
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
