"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "../icons/Icons"
import "../styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-badges">
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            125+ Languages Supported
          </motion.span>
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Speech to Text platform
          </motion.span>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Generate Subtitles in seconds
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your audio and video content with accurate speech-to-text, subtitles, and translations. Perfect
              for reaching global audiences.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a href="#" className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get started free
                <ArrowRight />
              </motion.a>
            </motion.div>

            <div className="trusted-by">
              <p>Trusted by leading organizations</p>
              <div className="trusted-logos">
                <span>FA</span>
                <span>10 LOC</span>
                <span>Welocalize</span>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="dashboard-preview">
              <img
                src="https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=1974&auto=format&fit=crop"
                alt="Subtitle Dashboard Preview"
              />

              <div className="processing-card">
                <div className="processing-info">
                  <p>Processing Speed</p>
                  <p className="small">(1 hour of audio)</p>
                </div>
                <p className="processing-time">~2 minutes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
