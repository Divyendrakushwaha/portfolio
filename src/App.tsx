import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, Phone, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const App = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: true });

  const experiences = [
    {
      title: "System Analyst",
      company: "Contata Solutions",
      period: "2022 - Present",
      achievements: [
        "Developed AI-driven sales lead system (30% sales increase)",
        "LLM backend on AWS Lambda (50% quality improvement)",
        "Microservice architecture (40% reliability boost)",
        "PySpark pipelines (30% faster processing)",
        "AWS Glue migration (50% time reduction)"
      ],
      tech: ['AWS', 'PySpark', 'LLMs', 'Python']
    },
    // Add other experiences
  ];

  const projects = [
    {
      title: "Movie Recommendation System",
      description: "TF-IDF vectorization with KNN achieving 90% accuracy",
      tech: ['Python', 'Scikit-learn', 'NLP'],
      link: "#"
    },
    // Add other projects
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      {/* Interactive Background */}
      <div className="fixed inset-0 bg-particle-pattern opacity-10 animate-flow"></div>

      <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
        {/* Animated Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Divyendra Kushwaha
              </h1>
              <h2 className="text-2xl font-light text-slate-400 mb-8">
                Software Developer & Data Engineer
              </h2>
              <div className="flex flex-wrap gap-6 mb-8">
                <a href="mailto:divyendra.kushwaha@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail size={20} className="flex-shrink-0" />
                  <span>divyendra.kushwaha@gmail.com</span>
                </a>
                <a href="tel:7906369497" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone size={20} className="flex-shrink-0" />
                  <span>7906369497</span>
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={20} className="flex-shrink-0" />
                  <span>Gurugram, India</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/divyendra/" target="_blank" 
                  className="px-6 py-3 bg-slate-800 rounded-lg flex items-center gap-3 hover:bg-slate-700 transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Divyendrakushwaha" target="_blank"
                  className="px-6 py-3 bg-slate-800 rounded-lg flex items-center gap-3 hover:bg-slate-700 transition-colors">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-auto lg:max-w-md space-y-4">
              <div className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4">Technical Highlights</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    AWS Cloud Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Large Language Models (LLMs)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Big Data Processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    Machine Learning Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Interactive Experience Section */}
        <section className="mb-20" ref={experienceRef}>
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className={`p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border cursor-pointer transition-all
                    ${expandedExperience === index ? 'border-blue-400/50 h-auto' : 'border-slate-700/50 h-[180px] overflow-hidden'}`}
                  onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <motion.div
                      animate={{ rotate: expandedExperience === index ? 180 : 0 }}
                    >
                      <ChevronDown className="text-blue-400" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {expandedExperience === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p className="text-slate-400 mt-4">{exp.company} | {exp.period}</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-300">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-blue-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Gallery with Modal */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-purple-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Skill Cloud */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Python', 'AWS', 'PySpark', 'LLMs', 'Docker', 'TensorFlow'].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 max-w-2xl w-full border border-slate-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-slate-400 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-purple-400">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                className="px-6 py-2 bg-blue-400/10 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-colors"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;