"use client"

import { motion } from "framer-motion"
import "../styles/Loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loader-logo"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, ease: "linear", repeat: Number.POSITIVE_INFINITY },
            scale: { duration: 1, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <span>T</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Translatea2z
        </motion.h1>
        <motion.div
          className="loader-bar"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

export default Loader
