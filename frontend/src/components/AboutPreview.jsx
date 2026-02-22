import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'

const AboutPreview = () => {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering the <span className="text-primary text-glow">Leaders</span> of Tomorrow
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Elite Club is more than just a network. It is a community of innovators, visionaries, and achievers dedicated to excellence. We provide the resources, mentorship, and environment necessary for talented individuals to thrive and leave a lasting impact on the world.
          </p>
          <Button to="/about">
            Learn Our Story
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full w-full flex justify-center lg:justify-end"
        >
          <div className="glass p-10 rounded-3xl border border-white/10 hover:-translate-y-4 transition-transform duration-500 hover:shadow-[0_20px_40px_-15px_rgba(142,3,211,0.3)] w-full max-w-md">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 border border-primary/30">
              <span className="text-primary text-3xl font-bold shadow-[0_0_10px_rgba(142,3,211,0.8)]">E</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 mb-6 flex-1">
              To build a global ecosystem where exceptional minds collide, collaborate, and create transformative solutions for the challenges of our time.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-2 h-2 rounded-full bg-primary violet-glow"></div>
                <span>Exclusive Networking</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-2 h-2 rounded-full bg-primary violet-glow"></div>
                <span>World-Class Mentorship</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-2 h-2 rounded-full bg-primary violet-glow"></div>
                <span>High-Impact Projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
