import "./styles/globals.css"
import Hero from "./components/Hero.js"
import HowItWorks from "./sections/HowItWorks.js"
import ProjectCategories from "./sections/ProjectCategories.js"
import Testimonials from "./sections/Testimonials.js"
import Footer from "./components/Footer.js"

document.addEventListener("DOMContentLoaded", () => {
  // Set page title dynamically (optional but professional)
  document.title = "SV Technologies Project-Based Learning & Placement";

  const app = document.getElementById("app")

  app.innerHTML = `
    ${Hero()}
    ${HowItWorks()}
    ${ProjectCategories()}
    ${Testimonials()}
    ${Footer()}
  `

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const href = anchor.getAttribute("href")
      if (!href || href === "#") return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })
})
