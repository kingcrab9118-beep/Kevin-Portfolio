'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Target, Users, Lightbulb, Heart, Zap } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const values = [
    {
      icon: GraduationCap,
      title: 'Education Foundation',
      description: 'Proud Bachelor degree graduate of Oregon State University - Cascades Campus with a solid foundation in full-stack development principles and modern programming practices.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Committed to delivering high-quality solutions that meet both technical requirements and business objectives, with a focus on user experience.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Thrives in collaborative environments, bringing positive energy and effective communication skills to cross-functional teams.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Always exploring new technologies and methodologies to stay current with industry trends and best practices.'
    },
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Genuine enthusiasm for coding and problem-solving, with a dedication to continuous learning and professional growth.'
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Adaptable and eager to tackle new challenges, with a proven ability to quickly master new technologies and frameworks.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            A dedicated full-stack developer with a fresh perspective and unwavering commitment to excellence
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                My Journey at Oregon State University - Cascades Campus
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                My educational journey at OSU Cascades provided me with a comprehensive Bachelor's degree in Computer Science. 
                Through hands-on projects and collaborative learning, I developed strong skills in both frontend and 
                backend technologies, preparing me for real-world development challenges.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Professional Growth & Future Vision
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                With over 1 year of practical experience, I've cultivated a deep understanding of modern web development 
                practices. My goal is to contribute to innovative projects while continuously expanding my technical 
                expertise and leadership capabilities within collaborative teams.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Why Choose Me?
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                I bring a unique combination of fresh perspectives, strong technical foundation, and collaborative spirit. 
                My enthusiasm for learning, combined with my commitment to quality and teamwork, makes me an ideal 
                candidate for any development team looking to innovate and grow.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-secondary-500 ml-4">kevin-woo-portfolio.jsx</span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-blue-600">
                      <span className="text-purple-600">const</span> developer = {'{'}
                    </div>
                    <div className="ml-4 text-green-600">
                      name: <span className="text-orange-600">'Kevin Woo'</span>,
                    </div>
                    <div className="ml-4 text-green-600">
                      education: <span className="text-orange-600">'OSU Cascades Bachelor'</span>,
                    </div>
                    <div className="ml-4 text-green-600">
                      experience: <span className="text-orange-600">'1+ year'</span>,
                    </div>
                    <div className="ml-4 text-green-600">
                      passion: <span className="text-orange-600">'Full Stack Dev'</span>,
                    </div>
                    <div className="ml-4 text-green-600">
                      teamWork: <span className="text-blue-600">true</span>,
                    </div>
                    <div className="ml-4 text-green-600">
                      readyToContribute: <span className="text-blue-600">true</span>
                    </div>
                    <div className="text-blue-600">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-secondary-50 rounded-xl p-6 shadow-lg border border-secondary-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{value.title}</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how my skills, enthusiasm, and collaborative spirit can contribute to your team's success.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors duration-200"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

