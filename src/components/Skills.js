import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBrain,
  FaCode,
  FaReact,
  FaFlask,
  FaCloud,
  FaCogs,
  FaTerminal,
  FaDatabase,
  FaBolt,
  FaMicrochip,
  FaServer,
  FaFileCode,
  FaGlobe,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaSync,
  FaTh,
  FaCheckCircle,
  FaFire,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaMobile,
  FaShieldAlt,
  FaNetworkWired,
  FaRobot
} from 'react-icons/fa';

function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const categories = [
    { name: 'All', icon: FaTh },
    { name: 'AI & GenAI', icon: FaBrain },
    { name: 'Languages', icon: FaCode },
    { name: 'Frameworks', icon: FaReact },
    { name: 'Libraries', icon: FaTerminal },
    { name: 'Testing', icon: FaFlask },
    { name: 'Cloud', icon: FaCloud },
    { name: 'Tools', icon: FaCogs },
  ];

  const allSkills = [
    // AI & GenAI Tools
    { name: 'LLMs', category: 'AI & GenAI', icon: FaBrain, description: 'Large Language Models', usage: 'ChatGPT, Claude Integration', experience: '2+ years' },
    { name: 'LangChain', category: 'AI & GenAI', icon: FaBolt, description: 'AI Framework for LLMs', usage: 'Building AI Applications', experience: '1+ years' },
    { name: 'LangGraph', category: 'AI & GenAI', icon: FaChartLine, description: 'Stateful AI Workflows', usage: 'Complex Agent Systems', experience: '1+ years' },
    { name: 'RAG', category: 'AI & GenAI', icon: FaDatabase, description: 'Retrieval Augmented Generation', usage: 'Knowledge Base Integration', experience: '1+ years' },
    { name: 'OpenAI', category: 'AI & GenAI', icon: FaMicrochip, description: 'GPT-4, DALL-E, Whisper', usage: 'API Integration & Fine-tuning', experience: '2+ years' },
    { name: 'MCP', category: 'AI & GenAI', icon: FaServer, description: 'Model Context Protocol', usage: 'AI Agent Communication', experience: '1 year' },
    { name: 'Prompt Engineering', category: 'AI & GenAI', icon: FaLightbulb, description: 'Optimization Techniques', usage: 'Better AI Responses', experience: '2+ years' },
    { name: 'GenAI Workflows', category: 'AI & GenAI', icon: FaSync, description: 'End-to-End AI Pipelines', usage: 'Production AI Systems', experience: '1+ years' },
    
    // Languages
    { name: 'JavaScript', category: 'Languages', icon: FaJs, description: 'ES6+ Modern JavaScript', usage: 'Frontend & Backend Development', experience: '5+ years' },
    { name: 'Python', category: 'Languages', icon: FaPython, description: 'Backend & AI Development', usage: 'APIs, Scripts, ML', experience: '4+ years' },
    { name: 'HTML', category: 'Languages', icon: FaHtml5, description: 'Semantic HTML5', usage: 'Web Structure & SEO', experience: '5+ years' },
    { name: 'CSS', category: 'Languages', icon: FaCss3Alt, description: 'Modern CSS3 & Animations', usage: 'Responsive Design', experience: '5+ years' },
    
    // Frameworks
    { name: 'React', category: 'Frameworks', icon: FaReact, description: 'Component-Based UI Library', usage: 'Single Page Applications', experience: '4+ years' },
    { name: 'Node.js', category: 'Frameworks', icon: FaNodeJs, description: 'JavaScript Runtime', usage: 'Backend APIs & Services', experience: '4+ years' },
    { name: 'Express', category: 'Frameworks', icon: FaRocket, description: 'Minimal Web Framework', usage: 'RESTful APIs', experience: '4+ years' },
    { name: 'FastAPI', category: 'Frameworks', icon: FaBolt, description: 'Modern Python Framework', usage: 'High-Performance APIs', experience: '2+ years' },
    
    // Libraries
    { name: 'Redux', category: 'Libraries', icon: FaDatabase, description: 'Predictable State Container', usage: 'Global State Management', experience: '3+ years' },
    { name: 'RTK Query', category: 'Libraries', icon: FaCloud, description: 'Data Fetching & Caching', usage: 'API Integration', experience: '2+ years' },
    { name: 'Socket.IO', category: 'Libraries', icon: FaGlobe, description: 'Real-time Bi-directional', usage: 'Live Chat & Notifications', experience: '3+ years' },
    
    // Testing & Automation
    { name: 'Playwright', category: 'Testing', icon: FaFlask, description: 'End-to-End Testing', usage: 'Browser Automation', experience: '2+ years' },
    { name: 'Appium', category: 'Testing', icon: FaMobile, description: 'Mobile App Testing', usage: 'Cross-Platform Testing', experience: '2+ years' },
    { name: 'Automation', category: 'Testing', icon: FaCogs, description: 'Test Frameworks', usage: 'CI/CD Integration', experience: '3+ years' },
    { name: 'CI/CD', category: 'Testing', icon: FaSync, description: 'Continuous Integration', usage: 'Automated Deployments', experience: '3+ years' },
    
    // Cloud & Databases
    { name: 'AWS Lambda', category: 'Cloud', icon: FaAws, description: 'Serverless Computing', usage: 'Event-Driven Functions', experience: '3+ years' },
    { name: 'AWS S3', category: 'Cloud', icon: FaAws, description: 'Object Storage Service', usage: 'File Storage & CDN', experience: '3+ years' },
    { name: 'CloudFormation', category: 'Cloud', icon: FaCloud, description: 'Infrastructure as Code', usage: 'AWS Resource Management', experience: '2+ years' },
    { name: 'MongoDB', category: 'Cloud', icon: FaDatabase, description: 'NoSQL Document Database', usage: 'Flexible Data Storage', experience: '4+ years' },
    { name: 'IndexedDB', category: 'Cloud', icon: FaDatabase, description: 'Browser Database', usage: 'Offline Data Storage', experience: '2+ years' },
    { name: 'Redis', category: 'Cloud', icon: FaDatabase, description: 'In-Memory Data Store', usage: 'Caching & Sessions', experience: '3+ years' },
    
    // Tools & Platforms
    { name: 'Postman', category: 'Tools', icon: FaCogs, description: 'API Development Platform', usage: 'Testing & Documentation', experience: '5+ years' },
    { name: 'VS Code', category: 'Tools', icon: FaCode, description: 'Code Editor', usage: 'Daily Development', experience: '5+ years' },
    { name: 'GitHub', category: 'Tools', icon: FaGithub, description: 'Version Control Platform', usage: 'Code Collaboration', experience: '5+ years' },
    { name: 'GitLab', category: 'Tools', icon: FaGitAlt, description: 'DevOps Platform', usage: 'CI/CD & Version Control', experience: '3+ years' },
    { name: 'BitBucket', category: 'Tools', icon: FaGitAlt, description: 'Git Repository Manager', usage: 'Code Hosting', experience: '2+ years' },
    { name: 'Jira', category: 'Tools', icon: FaFileCode, description: 'Project Management Tool', usage: 'Agile Workflows', experience: '4+ years' },
    { name: 'Cursor', category: 'Tools', icon: FaMicrochip, description: 'AI-Powered IDE', usage: 'AI-Assisted Coding', experience: '1 year' },
    { name: 'Nagios', category: 'Tools', icon: FaChartLine, description: 'IT Infrastructure Monitoring', usage: 'Server Monitoring', experience: '2+ years' },
    { name: 'PRTG', category: 'Tools', icon: FaChartLine, description: 'Network Monitoring', usage: 'Performance Tracking', experience: '2+ years' },
    { name: 'Docker', category: 'Tools', icon: FaDocker, description: 'Containerization Platform', usage: 'Application Deployment', experience: '3+ years' },
    { name: 'WebRTC', category: 'Tools', icon: FaGlobe, description: 'Real-time Communication', usage: 'Video/Audio Streaming', experience: '2+ years' },
  ];

  const filteredSkills = activeTab === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab);

  // Carousel settings - show 3 cards at a time on desktop
  const cardsPerView = 3;
  const maxIndex = Math.max(0, filteredSkills.length - cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && maxIndex > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          // Loop back to start when reaching the end
          if (prev >= maxIndex) {
            return 0;
          }
          return prev + 1;
        });
      }, 3000); // Change slide every 3 seconds

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [isAutoPlaying, maxIndex, activeTab]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setCurrentIndex(0); // Reset carousel position on tab change
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
                <FaBolt className="w-8 h-8 text-white" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-primary rounded-2xl blur-xl"
              />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies, frameworks, and tools I leverage to build exceptional solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex gap-3 justify-center flex-wrap px-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.name;
              const count = category.name === 'All' 
                ? allSkills.length 
                : allSkills.filter(s => s.category === category.name).length;
              
              return (
                <motion.button
                  key={category.name}
                  onClick={() => handleTabChange(category.name)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'glass-effect text-gray-700 dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-white/20' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Count */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-bold text-primary">{filteredSkills.length}</span> {filteredSkills.length === 1 ? 'skill' : 'skills'}
            {activeTab !== 'All' && <span> in {activeTab}</span>}
          </p>
        </motion.div> */}

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto px-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Previous Button */}
          {currentIndex > 0 && (
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 glass-effect backdrop-blur-xl rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl border border-white/20"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-700 dark:text-white" />
            </motion.button>
          )}

          {/* Next Button */}
          {currentIndex < maxIndex && (
            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 glass-effect backdrop-blur-xl rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl border border-white/20"
            >
              <FaChevronRight className="w-6 h-6 text-gray-700 dark:text-white" />
            </motion.button>
          )}

          {/* Carousel Content */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    x: `${-currentIndex * (100 / cardsPerView)}%`
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                  className="flex gap-6"
                >
                  {filteredSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    
                    return (
                      <motion.div
                        key={`${skill.name}-${index}`}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="card-effect rounded-2xl p-6 cursor-default group relative overflow-hidden transition-all duration-300 flex-shrink-0"
                        style={{ width: `calc((100% - ${(cardsPerView - 1) * 24}px) / ${cardsPerView})` }}
                      >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                          <Icon className="w-full h-full text-primary transform rotate-12" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon & Name */}
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="flex-shrink-0"
                            >
                              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                              </div>
                            </motion.div>

                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {skill.name}
                              </h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center gap-1">
                                <FaCheckCircle className="w-3 h-3" />
                                {skill.category}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                            {skill.description}
                          </p>

                          {/* Usage */}
                          <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-start gap-2">
                              <FaFire className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                  Primary Use
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {skill.usage}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Experience */}
                          <div className="flex items-center justify-between text-sm pt-3 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-gray-500 dark:text-gray-400">Experience</span>
                            <span className="font-semibold text-primary">{skill.experience}</span>
                          </div>
                        </div>

                        {/* Bottom Accent */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
