"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Integrations from "./components/Integrations"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  // Enhanced theme toggle with animation preparation
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  // Initialize theme from localStorage and set mounted state
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const savedTheme =
        localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
      setMounted(true)
    }
  }, [])

  // Prevent flash of incorrect theme
  if (!mounted) {
    return null
  }

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
