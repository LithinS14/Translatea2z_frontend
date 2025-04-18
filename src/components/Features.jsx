"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "../styles/Features.css"

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="features-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Powerful Features for Media Professionals</h2>
          <p>
            Everything you need to transform speech to text and create professional-quality subtitles for global
            audiences.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
          >
            <h3>Industry standard Speech to text engine</h3>
            <p>
              Our advanced speech recognition technology accurately transcribes audio in multiple accents and
              environments.
            </p>
            <ul>
              <li>Industry leading accuracy for clear speech</li>
              <li>Noise reduction for field recordings</li>
              <li>Support for 125+ languages and dialects</li>
              <li>Speaker identification and diarization</li>
            </ul>
          </motion.div>

          <motion.div
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
          >
            <h3>Advanced Speech to text options</h3>
            <p>Fine-tune your transcription settings for maximum accuracy and customization.</p>
            <ul>
              <li>Customize segment length and duration</li>
              <li>Speaker management and identification</li>
              <li>Advanced timing controls</li>
              <li>Quality optimization settings</li>
            </ul>
          </motion.div>

          <motion.div
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
          >
            <h3>Custom Dictionaries</h3>
            <p>Improve accuracy for industry-specific terminology and proper nouns with custom dictionaries.</p>
            <ul>
              <li>Create specialized terminology lists</li>
              <li>Automatic entity recognition</li>
              <li>Higher accuracy for technical terms</li>
              <li>Multiple language support</li>
            </ul>
          </motion.div>

          <motion.div
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
          >
            <h3>Team Collaboration</h3>
            <p>Edit and refine transcripts and translations with your entire team through shared project access.</p>
            <ul>
              <li>Team-based project collaboration</li>
              <li>Comment and annotation tools</li>
              <li>Role-based access control</li>
              <li>Real-time updates</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
