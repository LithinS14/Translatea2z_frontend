"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "../styles/Integrations.css"

const integrations = [
  {
    name: "Google Drive",
    icon: "/icons/google-drive.svg",
    description: "Seamlessly integrate with Google Drive for file management",
  },
  {
    name: "Dropbox",
    icon: "/icons/dropbox.svg",
    description: "Connect directly with Dropbox for easy file handling",
  },
  {
    name: "Amazon S3",
    icon: "/icons/amazon-s3.svg",
    description: "Enterprise-grade storage with Amazon S3 integration",
  },
  {
    name: "YouTube",
    icon: "/icons/youtube.svg",
    description: "Upload subtitles directly to your YouTube videos",
  },
  {
    name: "Brightcove",
    icon: "/icons/brightcove.svg",
    description: "Integrate with Brightcove for enterprise video management",
  },
  {
    name: "Wistia",
    icon: "/icons/wistia.svg",
    description: "Connect with Wistia for professional video hosting and analytics",
  },
]

const Integrations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="integrations-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Available Platform Integrations</h2>
          <div className="ready-badge">Ready to Use</div>
        </motion.div>

        <div className="integrations-grid">
          {integrations.map((integration, index) => (
            <motion.div
              className="integration-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="integration-icon">
                <img src={integration.icon || "/placeholder.svg"} alt={integration.name} />
              </div>
              <h3>{integration.name}</h3>
              <p>{integration.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="enterprise-integrations"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="enterprise-header">
            <h2>Enterprise-Grade Integrations & Custom Solutions</h2>
            <p>From ready-to-use platform integrations to custom-built solutions, we adapt to your workflow needs.</p>
          </div>

          <div className="enterprise-content">
            <div className="custom-integrations">
              <div className="enterprise-badge">Enterprise Solutions</div>
              <h3>Custom Integrations Built for Your Needs</h3>
              <p>
                Need a specialized integration? Our enterprise plans include custom-built solutions tailored to your
                specific workflow requirements.
              </p>

              <ul className="benefits-list">
                <li>Dedicated integration engineering team</li>
                <li>Custom-built connectors for your existing tools</li>
                <li>Enterprise-grade security and compliance</li>
                <li>Priority support and implementation assistance</li>
              </ul>

              <a href="#" className="contact-sales-button">
                Contact Sales
              </a>
            </div>

            <div className="integration-workflow">
              <h4>Example custom integration workflow</h4>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">Initial consultation</div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">Requirements gathering</div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">Custom development</div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-content">Testing & validation</div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">5</div>
                  <div className="step-content">Deployment & training</div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">6</div>
                  <div className="step-content">Ongoing support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Integrations
