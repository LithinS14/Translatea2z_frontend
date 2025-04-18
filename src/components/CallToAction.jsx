"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "../styles/CallToAction.css"

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Transform Your Media Content for Global Audiences</h2>
          <p>
            Join hundreds of media companies using our platform to create accurate subtitles and translations in
            minutes, not days.
          </p>

          <div className="cta-features">
            <div className="feature">
              <i className="fas fa-check"></i>
              <span>Start for free</span>
            </div>
            <div className="feature">
              <i className="fas fa-check"></i>
              <span>No credit card required to get started</span>
            </div>
            <div className="feature">
              <i className="fas fa-check"></i>
              <span>Access to essential features</span>
            </div>
            <div className="feature">
              <i className="fas fa-check"></i>
              <span>Dedicated support to help you succeed</span>
            </div>
          </div>

          <a href="#" className="cta-button">
            Get started for free
          </a>
          <p className="upgrade-note">Upgrade anytime for more features.</p>
        </motion.div>

        <motion.div
          className="cta-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat">
            <h3>~2 minutes</h3>
            <p>to process 1 hour of speech</p>
          </div>
          <div className="stat">
            <h3>10x</h3>
            <p>Faster Than Manual Methods</p>
          </div>
          <div className="stat">
            <h3>125+</h3>
            <p>Supported Languages</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
