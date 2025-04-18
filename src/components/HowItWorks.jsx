"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Upload, Processing, Edit, Export } from "../icons/Icons"
import "../styles/HowItWorks.css"

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <Upload />,
      title: "Upload Media",
      description:
        "Upload your video or audio files in any common format. Supports files up to 10GB or connect your cloud storage.",
    },
    {
      icon: <Processing />,
      title: "AI Processing",
      description:
        "Our AI automatically transcribes your content with up to world-class accuracy and can translate into 125+ languages.",
    },
    {
      icon: <Edit />,
      title: "Review & Edit",
      description: "Use our intuitive editor to make any necessary adjustments to transcripts or translations.",
    },
    {
      icon: <Export />,
      title: "Export & Deliver",
      description:
        "Export your subtitles in multiple formats (SRT, VTT, XML) or distribute directly to supported platforms.",
    },
  ]

  return (
    <section className="how-it-works-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>How It Works</h2>
          <p>
            Creating professional subtitles and translations has never been easier. Our streamlined process gets you
            from raw media to final delivery in just minutes.
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              className="step-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="step-icon"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="processing-times"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
        >
          <h3>Processing Time Estimates</h3>
          <div className="time-estimates">
            <div className="estimate">
              <span className="estimate-label">1 hour audio (audio-only file)</span>
              <span className="estimate-time">~2 minutes</span>
            </div>
            <div className="estimate">
              <span className="estimate-label">10 minute video (standard quality)</span>
              <span className="estimate-time">~2 minutes</span>
            </div>
            <div className="estimate">
              <span className="estimate-label">30 minute video podcast</span>
              <span className="estimate-time">~5 minutes</span>
            </div>
            <div className="estimate">
              <span className="estimate-label">60 minute high-quality documentary</span>
              <span className="estimate-time">~12 minutes</span>
            </div>
            <div className="estimate">
              <span className="estimate-label">Translation to each additional language</span>
              <span className="estimate-time">+1-3 minutes</span>
            </div>
          </div>

          <motion.a href="#" className="try-free-button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Try it for free
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </motion.a>
          <p className="no-credit-card">No credit card required. 1 hour of processing included in free trial.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
