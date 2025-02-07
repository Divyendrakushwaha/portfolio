import React from 'react';
import { Github, Linkedin, Code2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Divyendra Kushwaha</h1>
              <h2 className="text-2xl mb-8">Software Developer | Data Engineer</h2>
              <div className="space-y-4">
                <a href="mailto:divyendra.kushwaha@gmail.com" className="flex items-center gap-3 hover:text-teal-200">
                  <Mail size={20} /> divyendra.kushwaha@gmail.com
                </a>
                <a href="tel:7906369497" className="flex items-center gap-3 hover:text-teal-200">
                  <Phone size={20} /> 7906369497
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={20} /> Gurugram
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/divyendra/" target="_blank" 
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                <Linkedin size={24} />
                <span className="flex-grow">Connect on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://github.com/Divyendrakushwaha" target="_blank"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                <Github size={24} />
                <span className="flex-grow">View GitHub Profile</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://leetcode.com/u/princekushwaha49/" target="_blank"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                <Code2 size={24} />
                <span className="flex-grow">LeetCode Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">Experience</h2>
          <div className="grid gap-6">
            <ExperienceCard
              title="System Analyst"
              company="Contata Solutions"
              location="Noida, U.P"
              period="January 2022 - Present"
              achievements={[
                "Developed AI-driven sales lead system (30% increase)",
                "Implemented LLM backend on AWS Lambda (50% improvement)",
                "Optimized models with data scientists (25% efficiency boost)",
                "Designed microservices architecture (40% reliability increase)",
                "Managed 2TB datasets with PySpark (30% faster processing)",
                "Led AWS Glue migration of 120M records (50% faster)"
              ]}
            />
            <ExperienceCard
              title="Junior System Analyst"
              company="Contata Solutions"
              location="Noida, UP"
              period="October 2020 - January 2022"
              achievements={[
                "Implemented VGG image matching (20% accuracy gain)",
                "Automated order processing with Selenium & AWS",
                "Built monitoring dashboards (15% visibility improvement)",
                "Created Dash-based interactive visualizations"
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Movie Recommendation System"
              description="Movie recommendation engine using metadata vectorization and KNN algorithm, achieving 90% accuracy in suggestions"
              tech={['Python', 'Scikit-learn', 'KNN', 'Vectorization']}
              link="https://github.com/Divyendrakushwaha/movie-recommendation"
            />
            <ProjectCard
              title="Source For All"
              description="Educational platform connecting 500+ students and teachers for note sharing and doubt resolution"
              tech={['PHP', 'MySQL', 'PhpMyAdmin', 'HTML/CSS']}
              link="https://github.com/Divyendrakushwaha/codecollab"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard
              title="Programming Languages"
              skills={['Python', 'Pyspark']}
            />
            <SkillCard
              title="Libraries/Frameworks"
              skills={['Flask', 'Pandas', 'Pillow', 'Pytorch', 'LLMs']}
            />
            <SkillCard
              title="Tools / Platforms"
              skills={['AWS', 'GCP', 'Linux', 'Git', 'Selenium']}
            />
            <SkillCard
              title="Databases"
              skills={['DynamoDB', 'Elasticsearch', 'PostgreSQL']}
            />
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-teal-600">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">KIET Group of Institutions</h3>
              <p className="text-gray-600 mb-2">B.Tech - Computer Science and Engineering</p>
              <p className="text-gray-500">August 2016 - September 2020</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Kendriya Vidyalaya Gorakhpur</h3>
              <p className="text-gray-600 mb-2">Intermediate Science</p>
              <p className="text-gray-500">March 2014 - March 2015</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, location, period, achievements }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{company} | {location}</p>
      <p className="text-gray-500">{period}</p>
    </div>
    <ul className="list-disc pl-6 space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-gray-700">{achievement}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <a href={link} target="_blank" className="text-teal-600 hover:text-teal-700">
        <Github size={24} />
      </a>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((item, index) => (
        <span key={index} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">{item}</span>
      ))}
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full">{skill}</span>
      ))}
    </div>
  </div>
);

export default Portfolio;
