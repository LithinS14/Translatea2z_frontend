"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.13456 9.36C9.24756 9.36 9.36056 9.36 9.47356 9.36C9.91956 9.36 10.3656 9.36 10.8116 9.36C10.9246 9.36 10.9246 9.36 10.9246 9.47C10.9246 10.06 10.9246 10.65 10.9246 11.24C10.9246 11.35 10.9246 11.35 10.8116 11.35C10.3656 11.35 9.91956 11.35 9.47356 11.35C9.36056 11.35 9.24756 11.35 9.13456 11.35C9.02156 11.35 9.02156 11.35 9.02156 11.46C9.02156 12.05 9.02156 12.64 9.02156 13.23C9.02156 13.34 9.02156 13.34 9.13456 13.34C9.24756 13.34 9.36056 13.34 9.47356 13.34C9.91956 13.34 10.3656 13.34 10.8116 13.34C10.9246 13.34 10.9246 13.34 10.9246 13.45C10.9246 14.04 10.9246 14.63 10.9246 15.22C10.9246 15.33 10.9246 15.33 10.8116 15.33C9.47356 15.33 8.13556 15.33 6.79756 15.33C6.68456 15.33 6.68456 15.33 6.68456 15.22C6.68456 13.34 6.68456 11.46 6.68456 9.58C6.68456 9.47 6.68456 9.47 6.79756 9.47C7.57856 9.36 8.35956 9.36 9.13456 9.36Z"
                  fill="currentColor"
                />
                <path
                  d="M17.2025 9.36C17.3155 9.36 17.4285 9.36 17.5415 9.36C17.9875 9.36 18.4335 9.36 18.8795 9.36C18.9925 9.36 18.9925 9.36 18.9925 9.47C18.9925 10.06 18.9925 10.65 18.9925 11.24C18.9925 11.35 18.9925 11.35 18.8795 11.35C18.4335 11.35 17.9875 11.35 17.5415 11.35C17.4285 11.35 17.3155 11.35 17.2025 11.35C17.0895 11.35 17.0895 11.35 17.0895 11.46C17.0895 12.05 17.0895 12.64 17.0895 13.23C17.0895 13.34 17.0895 13.34 17.2025 13.34C17.3155 13.34 17.4285 13.34 17.5415 13.34C17.9875 13.34 18.4335 13.34 18.8795 13.34C18.9925 13.34 18.9925 13.34 18.9925 13.45C18.9925 14.04 18.9925 14.63 18.9925 15.22C18.9925 15.33 18.9925 15.33 18.8795 15.33C17.5415 15.33 16.2035 15.33 14.8655 15.33C14.7525 15.33 14.7525 15.33 14.7525 15.22C14.7525 13.34 14.7525 11.46 14.7525 9.58C14.7525 9.47 14.7525 9.47 14.8655 9.47C15.6465 9.36 16.4275 9.36 17.2025 9.36Z"
                  fill="currentColor"
                />
              </svg>
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
              <motion.button
                className="control-button prev"
                onClick={handlePrev}
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary-light)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Previous</span>
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

              <motion.button
                className="control-button next"
                onClick={handleNext}
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary-light)" }}
                whileTap={{ scale: 0.9 }}
              >
                <span>Next</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
