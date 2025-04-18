"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, X } from "../icons/Icons"
import "../styles/Pricing.css"

const pricingPlans = [
  {
    name: "Free",
    description: "For individuals and hobby projects. With Rate limits",
    price: "$0",
    period: "/month",
    popular: false,
    bestFor: "",
    buttonText: "Get started",
    features: [
      { name: "Up to 200 mb of media processing", included: true },
      { name: "Transcription in 36 languages", included: true },
      { name: "Translation in 36 languages", included: true },
      { name: "Basic subtitle editor", included: true },
      { name: "Export in SRT & VTT formats", included: true },
      { name: "Email support", included: false },
      { name: "Glossary customization", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For podcasters, content creators, and small teams. Up to 15-20x higher rate limits than free",
    price: "$20",
    period: "/month",
    popular: true,
    bestFor: "Most Popular",
    buttonText: "Get Started",
    features: [
      { name: "Up to 20 hours of speech processing", included: true },
      { name: "20 GB storage limit per month", included: true },
      { name: "Transcription in 125 languages", included: true },
      { name: "Translation in 125 languages", included: true },
      { name: "Upto 2 translations per media project", included: true },
      { name: "Advanced subtitle editor with batch processing", included: true },
    ],
  },
  {
    name: "Super",
    description: "For growing teams and agencies. Up to 25-30x higher rate limits than free",
    price: "$60",
    period: "/month",
    popular: false,
    bestFor: "Best for Teams",
    buttonText: "Get Started",
    features: [
      { name: "Up to 50 hours of speech processing", included: true },
      { name: "50 GB storage limit per month", included: true },
      { name: "Transcription in 125 languages", included: true },
      { name: "Translation in 125 languages", included: true },
      { name: "Upto 10 translations per media project", included: true },
      { name: "Advanced subtitle editor with batch processing", included: true },
    ],
  },
]

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="pricing-section" id="pricing" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
        </motion.div>

        <div className="pricing-plans">
          {pricingPlans.map((plan, index) => (
            <motion.div
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {plan.bestFor && <div className="best-for">{plan.bestFor}</div>}

              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <a href="#" className="plan-button">
                {plan.buttonText}
              </a>

              <div className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div className="feature" key={featureIndex}>
                    {feature.included ? <Check /> : <X />}
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="enterprise-plan"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="enterprise-header">
            <h2>High-Volume Media Solutions</h2>
            <p>
              Unlock enterprise-grade capabilities designed for media companies, broadcasters, and content networks with
              demanding workloads. Scale effortlessly with our high-performance infrastructure, dedicated support, and
              customizable workflows.
            </p>
          </div>

          <div className="enterprise-plans">
            <div className="enterprise-card">
              <div className="best-value">Best Value</div>
              <h3>Business</h3>
              <p>For power users and growing organizations. Up to 30-50x higher rate limits than free</p>

              <div className="plan-price">
                <span className="price">$200</span>
                <span className="period">/month</span>
              </div>

              <a href="#" className="plan-button">
                Get Started
              </a>
            </div>

            <div className="enterprise-card">
              <h3>Enterprise</h3>
              <p>For media companies and broadcasters</p>

              <div className="plan-price">
                <p>Starts from</p>
                <span className="price">$2k+</span>
                <span className="period">/month</span>
              </div>

              <a href="#" className="plan-button contact">
                Contact sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
