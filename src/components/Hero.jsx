"use client"

import { motion } from "framer-motion"
import "../styles/Hero.css"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <motion.div className="hero-badges" variants={containerVariants} initial="hidden" animate="visible">
          <motion.span className="badge" variants={itemVariants} transition={{ duration: 0.5 }}>
            <span className="badge-dot"></span>
            125+ Languages Supported
          </motion.span>
          <motion.span className="badge" variants={itemVariants} transition={{ duration: 0.5 }}>
            <span className="badge-dot"></span>
            Speech to Text platform
          </motion.span>
        </motion.div>

        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Generate <span className="gradient-text">Subtitles</span> in seconds
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Transform your audio and video content with accurate speech-to-text, subtitles, and translations. Perfect
              for reaching global audiences.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.a
                href="#"
                className="btn btn-primary hero-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 112, 243, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get started free
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#how-it-works"
                className="btn btn-secondary"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--primary-light)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                How it works
              </motion.a>
            </motion.div>

            <motion.div
              className="trusted-by"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p>Trusted by leading organizations</p>
              <div className="trusted-logos">
                <motion.span whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  FA
                </motion.span>
                <motion.span whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  10 LOC
                </motion.span>
                <motion.span whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  Welocalize
                </motion.span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="dashboard-preview">
              <img
                src="https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Subtitle Dashboard Preview"
              />

              <motion.div
                className="processing-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="processing-info">
                  <p>Processing Speed</p>
                  <p className="small">(1 hour of audio)</p>
                </div>
                <p className="processing-time">~2 minutes</p>
              </motion.div>

              <motion.div
                className="feature-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{
                  x: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span className="feature-icon">✓</span>
                <div>
                  <h4>125+ Languages</h4>
                  <p>Global reach with one click</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
