"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Integrations from "./components/Integrations"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import Testimonials from "./components/Testimonials"
import ScrollToTop from "./components/ScrollToTop"
import "./App.css"

function App() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

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

      // Simulate loading for initial animation
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Prevent flash of incorrect theme
  if (!mounted) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          className="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <HowItWorks />
            <Testimonials />
            <Integrations />
            <Pricing />
            <FAQ />
            <CallToAction />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
