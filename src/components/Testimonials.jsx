"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "../icons/Icons"
import "../styles/Testimonials.css"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Content Manager at MediaCorp",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content:
      "Translatea2z has revolutionized our content localization process. What used to take days now takes minutes, and the accuracy is impressive.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Video Producer at GlobalReach",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    content:
      "The ability to quickly generate accurate subtitles in multiple languages has helped us expand our audience reach by over 40% in just three months.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Podcast Host",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    content:
      "As an independent creator, Translatea2z has been a game-changer. I can now offer my podcast in multiple languages without breaking the bank.",
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!autoplay || !inView) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, inView])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="testimonials-section" ref={ref} id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Customers Say</h2>
          <p>Trusted by content creators and media professionals worldwide</p>
        </motion.div>

        <div className="testimonials-container">
          <motion.div
            className="testimonials-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="testimonials-quote">
              <Quote />
            </div>

            <div className="testimonials-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="testimonial"
                >
                  <p>{testimonials[current].content}</p>
                  <div className="testimonial-author">
                    <img src={testimonials[current].image || "/placeholder.svg"} alt={testimonials[current].name} />
                    <div>
                      <h4>{testimonials[current].name}</h4>
                      <p>{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="testimonials-controls">
              <motion.button onClick={handlePrev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronLeft />
              </motion.button>
              <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`dot ${index === current ? "active" : ""}`}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrent(index)
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.button onClick={handleNext} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
