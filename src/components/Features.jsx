"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import "../styles/Features.css"

const Features = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

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
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6 
      },
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  }

  const features = [
    {
      title: "Industry Standard Speech-to-Text",
      description: "Advanced speech recognition for accurate transcription in any environment.",
      icon: "https://cdn-icons-png.flaticon.com/512/2593/2593075.png",
      points: [
        "Industry-leading accuracy",
        "Noise reduction technology",
        "125+ languages support",
        "Speaker identification"
      ],
      accentColor: "#6366f1"
    },
    {
      title: "Advanced Transcription Options",
      description: "Fine-tune settings for maximum accuracy and customization.",
      icon: "https://cdn-icons-png.flaticon.com/512/3721/3721619.png",
      points: [
        "Custom segment length",
        "Speaker management",
        "Advanced timing controls",
        "Quality optimization"
      ],
      accentColor: "#10b981"
    },
    {
      title: "Custom Dictionaries",
      description: "Improve accuracy for specialized terminology and proper nouns.",
      icon: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
      points: [
        "Specialized terminology lists",
        "Automatic entity recognition",
        "Technical terms accuracy",
        "Multi-language support"
      ],
      accentColor: "#f59e0b"
    },
    {
      title: "Team Collaboration",
      description: "Edit and refine transcripts with your entire team in real-time.",
      icon: "https://cdn-icons-png.flaticon.com/512/1534/1534938.png",
      points: [
        "Shared project access",
        "Comment & annotation tools",
        "Role-based permissions",
        "Real-time updates"
      ],
      accentColor: "#3b82f6"
    },
  ]

  return (
    <section className="features-section" ref={ref} id="features">
      <div className="features-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
              }
            }
          }}
        >
          <motion.h2 
            className="section-title"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Powerful Features for Media Professionals
          </motion.h2>
          <motion.p className="section-subtitle">
            Transform speech to text and create professional-quality subtitles for global audiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              style={{ 
                '--accent-color': feature.accentColor,
                '--accent-light': `${feature.accentColor}20`
              }}
            >
              <div className="card-glow" />
              <div className="feature-icon">
                <motion.img 
                  src={feature.icon} 
                  alt={feature.title}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    delay: 0.2 + index * 0.1,
                    stiffness: 150
                  }}
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.4 + index * 0.1 + i * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="card-hover-effect"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features