import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, Phone, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio = () => {
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
          {/* Hero content */}
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
                  {/* Content */}
                  <AnimatePresence>
                    {expandedExperience === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Detailed content */}
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
                  {/* Project content */}
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
              {/* Modal content */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};