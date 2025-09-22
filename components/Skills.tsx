'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Cloud, 
  Palette,
  Server,
  Layers,
  Zap
} from 'lucide-react'

export default function Skills() {
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

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 85 },
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'Flask', level: 65 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'Authentication', level: 70 },
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MySQL', level: 65 },
        { name: 'SQL', level: 75 },
        { name: 'Data Modeling', level: 70 },
        { name: 'Database Design', level: 65 },
      ]
    },
    {
      icon: Cloud,
      title: 'Tools & Deployment',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Vercel', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
        { name: 'Linux/Unix', level: 70 },
        { name: 'AWS Basics', level: 60 },
      ]
    }
  ]

  const additionalSkills = [
    { name: 'Vue.js Framework', icon: Smartphone },
    { name: 'Python Development', icon: Palette },
    { name: 'Version Control', icon: GitBranch },
    { name: 'Agile Methodologies', icon: Layers },
    { name: 'Performance Optimization', icon: Zap },
    { name: 'Cross-browser Compatibility', icon: Globe },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary-50 to-white">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive skill set built through education at OSU Cascades and hands-on development experience
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-secondary-700">{skill.name}</span>
                      <span className="text-sm text-secondary-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-secondary-900 mb-8"
          >
            Additional Expertise
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <skill.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h4 className="font-medium text-secondary-900 text-sm">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Mindset</h3>
            <p className="text-lg mb-6 opacity-90 max-w-4xl mx-auto leading-relaxed">
            As a recent OSU Cascades Bachelor degree graduate, I bring fresh perspectives and up-to-date knowledge of modern development practices. 
            My over 1-year journey has been marked by rapid skill acquisition and a deep commitment to staying current with 
            industry trends. I'm always eager to learn new technologies and contribute to innovative projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1+</div>
                <div className="text-sm opacity-90">Year Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-sm opacity-90">Learning Enthusiasm</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

