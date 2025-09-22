'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code2, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const stats = [
    { icon: Code2, label: '1+ Year', value: 'Development Experience' },
    { icon: Users, label: 'Team Player', value: 'Collaborative Spirit' },
    { icon: TrendingUp, label: 'Growth Mindset', value: 'Continuous Learning' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Kevin Woo</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            A passionate{' '}
            <span className="font-semibold text-primary-600">Full Stack Developer</span>{' '}
            and recent graduate from{' '}
            <span className="font-semibold text-primary-600">Oregon State University - Cascades Campus</span>,
            ready to bring fresh ideas and collaborative energy to your team.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-secondary-500 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            With over 1 year of hands-on experience in modern web development, I specialize in creating 
            responsive, user-friendly applications using React, Vue.js, Node.js, Django, and cutting-edge technologies. 
            My journey is driven by a commitment to teamwork, continuous learning, and delivering 
            exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-secondary-600">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-secondary-400 hover:text-primary-600 transition-colors cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

