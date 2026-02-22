import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'

const CTA = () => {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden flex justify-center items-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Ready to Step Up?
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
          Join the <span className="text-white font-semibold">Elite Club</span> today and start your journey towards greatness alongside the brightest minds in the world.
        </p>

        <Button to="/join" className="group">
          <span>Apply for Membership</span>
          <span className="text-primary group-hover:text-glow transition duration-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>
      </motion.div>
    </section>
  )
}

export default CTA
