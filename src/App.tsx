import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database,
  Server,
  Brain,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Coffee,
  Zap,
  Bot,
  Sparkles,
  Lightbulb,
  Rocket,
  Home,
  User,
  Briefcase,
  FolderGit2,
  MessageSquare,
  File
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Diabetic Retinopathy Detection",
      description: "Developed a deep learning model using CNN to detect and classify diabetic retinopathy from retinal images. Implemented image preprocessing techniques and achieved 92% accuracy in early-stage detection.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Medical Imaging"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
      link: "https://github.com/gaurav241102/diabetic-retinopathy-detection"
    },
    {
      title: "Glow AI - Skin Analysis Platform",
      description: "Led the development of a cloud-native skin analysis platform using computer vision and machine learning. Implemented real-time image processing and analysis features, resulting in 40% faster diagnosis times.",
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "React"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
      link: "https://github.com/gaurav241102/glow-ai"
    },
    {
      title: "Real-Time Financial Dashboard",
      description: "Built a Python-based ETL system for real-time financial data processing. Implemented automated data pipelines and visualization dashboards, reducing manual reporting time by 60%.",
      technologies: ["Python", "Pandas", "Plotly", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      link: "https://github.com/gaurav241102/financial-dashboard"
    }
  ];

  const experience = [
    {
      company: "Kaliper Technologies",
      role: "Project Manager",
      period: "Dec 2024 - Present",
      description: "Designed cloud-native analytics platform reducing ETL latency by 40% through PySpark optimizations. Automated CI/CD pipelines achieving 99.95% API uptime for real-time inference services. Led cross-functional team developing React dashboard with PostgreSQL/NLP integration (+25% user engagement).",
      tech: ["AWS", "PySpark", "CI/CD", "React", "PostgreSQL", "NLP"]
    },
    {
      company: "Kaliper Technologies",
      role: "Data Analyst Intern",
      period: "Sep 2024 - Dec 2024",
      description: "Implemented PySpark pipelines processing 2TB+ daily financial data, improving forecast accuracy by 18%. Developed Power BI dashboards reducing monthly reporting workload by 15 hours through DAX automation.",
      tech: ["PySpark", "Power BI", "DAX", "Data Analysis"]
    }
  ];

  const skills = [
    { category: "Cloud", items: ["AWS (EC2/S3/Glue)", "Azure", "Databricks"] },
    { category: "Data", items: ["PySpark", "PostgreSQL", "Airflow", "Power BI"] },
    { category: "ML", items: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-xl font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              gaurav.prakash
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { icon: Home, label: "Home", href: "#home" },
                { icon: User, label: "About", href: "#about" },
                { icon: Briefcase, label: "Projects", href: "#projects" },
                { icon: MessageSquare, label: "Contact", href: "#contact" },
                { icon: File, label: "Resume", href: "https://docs.google.com/document/d/1WKI8u3Zu0vwGfOsNi3OSTf7Ym8y92Qqk-9jV_AIdWMM/edit?tab=t.0", target: "_blank", rel: "noopener noreferrer" }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                >
                  <item.icon size={20} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm">
            {[
              { icon: Home, label: "Home", href: "#home" },
              { icon: User, label: "About", href: "#about" },
              { icon: Briefcase, label: "Projects", href: "#projects" },
              { icon: MessageSquare, label: "Contact", href: "#contact" },
              { icon: File, label: "Resume", href: "https://docs.google.com/document/d/1WKI8u3Zu0vwGfOsNi3OSTf7Ym8y92Qqk-9jV_AIdWMM/edit?tab=t.0", target: "_blank", rel: "noopener noreferrer" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="flex items-center px-3 py-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={20} className="mr-3" />
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Gaurav Prakash
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              AI Engineer & Automation Enthusiast
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Making data dance and AI sing—welcome to my portfolio
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Bot className="text-blue-400" size={24} />
              <span className="text-gray-300">Automation Enthusiast</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Brain className="text-purple-400" size={24} />
              <span className="text-gray-300">AI Explorer</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Coffee className="text-yellow-400" size={24} />
              <span className="text-gray-300">Caffeine Powered</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Zap className="text-green-400" size={24} />
              <span className="text-gray-300">Problem Solver</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus-ring"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus-ring"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200 focus-ring"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <p className="text-base text-gray-300 leading-relaxed">
                I'm Gaurav, an automation enthusiast passionate about leveraging technology to solve real-world problems. 
                With a strong foundation in Automation & Robotics, I enjoy working at the intersection of data, 
                artificial intelligence, and innovative engineering.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                I am driven by curiosity and a desire to turn complex challenges into efficient, scalable solutions. 
                Whether it's developing AI-powered tools, streamlining workflows, or exploring the latest advancements 
                in technology, I approach every project with creativity, attention to detail, and a focus on delivering tangible results.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                If you're interested in discussing technology, data science, or the future of automation (for you love diet coke :), 
                feel free to connect. I'm always eager to collaborate, learn, and contribute to meaningful projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Education</h3>
                  <p className="text-gray-400">B.Tech in Automation & Robotics</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Location</h3>
                  <p className="text-gray-400">Pune, India</p>
                </div>
              </motion.div>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Experience</h3>
                  <p className="text-gray-400">6+ Months in Tech</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Interests</h3>
                  <p className="text-gray-400">AI, Automation, Robotics</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-1">{job.role}</h3>
                    <h4 className="text-xl text-gray-300 font-semibold">{job.company}</h4>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-mono">{job.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm font-mono border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 focus-ring"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              or just connecting with fellow engineers.
            </p>
          </motion.div>

          <motion.div 
            className="card p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "gaurav31308@gmail.com",
                  href: "mailto:gaurav31308@gmail.com"
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "@gaurav241102",
                  href: "https://github.com/gaurav241102"
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "Gaurav Prakash",
                  href: "https://www.linkedin.com/in/gaurav-prakash-97071a199/"
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-gray-700/30 to-gray-800/30 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <contact.icon className="text-blue-400 mb-4" size={32} />
                  <h3 className="font-semibold text-gray-200 mb-2">{contact.title}</h3>
                  <p className="text-gray-400">{contact.value}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-gray-400">
            Made with ❤️ by Gaurav Prakash.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;