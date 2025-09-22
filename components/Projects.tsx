'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Server, Users } from 'lucide-react'

export default function Projects() {
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

  const projects = [
    {
      title: 'Kevin Shopify Project',
      description: 'A comprehensive Shopify project for freelancers, built with Liquid templating language. Features include custom theme development, product management, and e-commerce functionality.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Liquid', 'HTML/CSS', 'JavaScript', 'Shopify API'],
      features: ['Custom Theme Development', 'Product Management', 'E-commerce Integration', 'Responsive Design'],
      github: 'https://github.com/kingcrab9118-beep/KevinShopify',
      demo: 'https://demo.com',
      category: 'Frontend',
      icon: Globe
    },
    {
      title: 'Mock-Up Server',
      description: 'A mock-up server for microservices architecture, built with TypeScript. Provides API simulation and testing capabilities for distributed systems.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['TypeScript', 'Node.js', 'Express', 'Microservices'],
      features: ['API Simulation', 'Microservices Testing', 'Mock Data Generation', 'RESTful APIs'],
      github: 'https://github.com/kingcrab9118-beep/Mock-Up-server',
      demo: 'https://demo.com',
      category: 'Backend',
      icon: Server
    },
    {
      title: 'Collin Suckow Project',
      description: 'A collaborative project with Collin Suckow focusing on modern web development practices and full-stack implementation.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      features: ['Collaborative Development', 'Modern Web Practices', 'Full-Stack Implementation', 'Team Collaboration'],
      github: 'https://github.com/collin-suckow',
      demo: 'https://demo.com',
      category: 'Full Stack',
      icon: Users
    },
    {
      title: 'Kevin Ecotone Web',
      description: 'An eco-friendly web application focusing on environmental awareness and sustainable practices. Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'HTML/CSS', 'JavaScript', 'Environmental APIs'],
      features: ['Environmental Awareness', 'Sustainable Practices', 'Interactive Web App', 'Modern UI/UX'],
      github: 'https://github.com/kevin-ecotone-webf',
      demo: 'https://demo.com',
      category: 'Frontend',
      icon: Globe
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

  return (
    <section id="projects" className="py-20 bg-white">
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
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing my journey from OSU Cascades student to full-stack developer through hands-on projects
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary-100 rounded-lg mr-3">
                    <project.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900">{project.title}</h3>
                </div>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-secondary-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary text-center"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Project Impact & Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-primary-400">4+</div>
                <div className="text-sm opacity-90">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-primary-400">15+</div>
                <div className="text-sm opacity-90">Technologies Used</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-primary-400">100%</div>
                <div className="text-sm opacity-90">Mobile Responsive</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-primary-400">∞</div>
                <div className="text-sm opacity-90">Learning Enthusiasm</div>
              </div>
            </div>
            <p className="text-center mt-6 opacity-90 max-w-3xl mx-auto">
            Each project represents a step forward in my journey from OSU Cascades student to professional developer, 
            showcasing my ability to learn quickly, solve problems creatively, and deliver quality solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
