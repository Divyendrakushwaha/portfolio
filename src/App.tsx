import React from 'react';
import { Github, Linkedin, Code2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      {/* Floating Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-24">
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
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="space-y-8">
            <TimelineItem
              title="System Analyst"
              company="Contata Solutions"
              period="2022 - Present"
              achievements={[
                "Led AI-driven sales lead generation system development (30% efficiency gain)",
                "Architected serverless LLM backend on AWS Lambda",
                "Optimized PySpark pipelines handling 2TB+ datasets"
              ]}
              tech={['AWS', 'PySpark', 'LLMs', 'Microservices']}
            />
            <TimelineItem
              title="Junior System Analyst"
              company="Contata Solutions"
              period="2020 - 2022"
              achievements={[
                "Implemented computer vision solutions with VGG models",
                "Automated workflows using Selenium & AWS",
                "Developed real-time monitoring dashboards"
              ]}
              tech={['Python', 'AWS', 'Selenium', 'Dash']}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Content-based Recommendation System"
              description="Developed a content-based recommendation system that vectorized movie metadata (genres,
descriptions, ratings) using TF-IDF and computed similarities with K-Nearest Neighbors (KNN),
achieving 90% accuracy in personalized recommendations."
              tech={['Python', 'KNN', 'NLP', 'Vectorization']}
              link="https://github.com/Divyendrakushwaha/movie-recommendation"
            />
            <ProjectCard
              title="Article-Based Email Automation"
              description="Built a RAG-based system to fetch articles, capture screenshots, process data, and generate LLM-based summaries while storing vectorized titles in Elasticsearch for efficient retrieval and context-aware email generation, enhancing automation and reducing manual effort."
              tech={['Python', 'Elasticsearch', 'OpenAI', 'Langchain']}
              link="https://github.com/Divyendrakushwaha/"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillPill title="Python" color="blue" />
            <SkillPill title="AWS" color="purple" />
            <SkillPill title="PySpark" color="green" />
            <SkillPill title="LLMs" color="pink" />
            <SkillPill title="Docker" color="blue" />
            <SkillPill title="TensorFlow" color="purple" />
            <SkillPill title="Elasticsearch" color="green" />
            <SkillPill title="Google Bigquery" color="pink" />
          </div>
        </section>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, period, achievements, tech }) => (
  <div className="relative pl-8 border-l-2 border-slate-700 group">
    <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-2 ring-4 ring-slate-900"></div>
    <div className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50 hover:border-blue-400/30 transition-all">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between items-start mb-4">
        <p className="text-slate-400">{company}</p>
        <span className="text-sm text-blue-400">{period}</span>
      </div>
      <ul className="space-y-2 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-300">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            {achievement}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-blue-400">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50 hover:border-purple-400/30 transition-all h-full">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <a href={link} className="text-purple-400 hover:text-purple-300">
        <Github size={20} />
      </a>
    </div>
    <p className="text-slate-400 mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((item, index) => (
        <span key={index} className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-purple-400">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const SkillPill = ({ title, color }) => {
  const colorClasses = {
    blue: 'text-blue-400 border-blue-400/30',
    purple: 'text-purple-400 border-purple-400/30',
    green: 'text-green-400 border-green-400/30',
    pink: 'text-pink-400 border-pink-400/30'
  };

  return (
    <div className={`p-3 text-center border rounded-lg backdrop-blur-lg bg-slate-800/50 ${colorClasses[color]} hover:bg-slate-700/30 transition-colors`}>
      {title}
    </div>
  );
};

export default Portfolio;