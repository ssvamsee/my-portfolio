import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaBrain,
  FaFlask,
  FaVideo,
  FaComments,
  FaHeart,
  FaSearch,
  FaGlobe,
  FaServer,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTh,
  FaCode,
  FaCloud,
  FaChevronLeft,
  FaChevronRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDocker,
  FaDatabase,
  FaMobile,
  FaShieldAlt,
  FaNetworkWired,
  FaMicrochip,
  FaRobot,
  FaBolt,
  FaSync,
  FaChartLine,
  FaTerminal,
  FaCogs,
  FaLaptopCode,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding
} from 'react-icons/fa';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const projects = [
    {
      title: 'iMAP',
      company: 'IdeyaLabs',
      category: 'AI & Automation',
      description: 'AI-powered PDLC automation platform integrating NLP, RAG, and multi-agent orchestration',
      icon: FaBrain,
      impact: '40% faster development cycles',
      highlights: [
        'NLP & RAG integration',
        'Multi-agent orchestration',
        'Role-based access control',
        '25% fewer release failures',
        'AI-driven dashboards'
      ],
      tags: ['GenAI', 'NLP', 'RAG', 'CI/CD', 'AWS'],
    },
    {
      title: 'iTAF',
      company: 'IdeyaLabs',
      category: 'AI & Automation',
      description: 'No-code testing framework enabling automated test creation without coding',
      icon: FaFlask,
      impact: '60% less test creation time',
      highlights: [
        'No-code test authoring',
        'Cross-platform automation',
        'Real-time analytics',
        '25% defect reduction',
        'CI/CD integration'
      ],
      tags: ['No-Code', 'Playwright', 'Appium', 'Testing'],
    },
    {
      title: 'O-Connect',
      company: 'ONPASSIVE',
      category: 'Communication',
      description: 'Cloud-native video conferencing platform for 100,000+ concurrent users',
      icon: FaVideo,
      impact: '100K+ concurrent users',
      highlights: [
        'AI noise cancellation',
        'Smart backgrounds',
        'Real-time transcription',
        'Modular architecture',
        '35% engagement boost'
      ],
      tags: ['React', 'WebRTC', 'Redis', 'AWS', 'AI/ML'],
    },
    {
      title: 'O-PAL',
      company: 'ONPASSIVE',
      category: 'Communication',
      description: 'Cross-platform chat with AI moderation and smart recommendations',
      icon: FaComments,
      impact: '25% engagement increase',
      highlights: [
        'AI content moderation',
        'Smart replies',
        'Sentiment analysis',
        'E2E encryption',
        'Real-time analytics'
      ],
      tags: ['React', 'Socket.IO', 'AI', 'Encryption'],
    },
    {
      title: 'JL MUSH',
      company: 'Trevista Innovations',
      category: 'Healthcare',
      description: 'Telemedicine platform for virtual appointments and consultations',
      icon: FaHeart,
      impact: 'Healthcare accessibility',
      highlights: [
        'Virtual appointments',
        'Secure video sessions',
        'Payment integration',
        'E-prescriptions',
        'Patient engagement'
      ],
      tags: ['React', 'Node.js', 'WebRTC', 'Payment'],
    },
    {
      title: 'Cellix Bio',
      company: 'Trevista Innovations',
      category: 'Data Platform',
      description: 'Pharmaceutical patent and research data management system',
      icon: FaSearch,
      impact: 'Unified research data',
      highlights: [
        'Patent database',
        'Advanced search',
        'Data visualization',
        'Analytics dashboards',
        'API integrations'
      ],
      tags: ['React', 'MongoDB', 'Analytics', 'APIs'],
    },
    {
      title: 'GSK Application',
      company: 'Tech Mahindra',
      category: 'Enterprise',
      description: 'Global web application with CRM integrations and multi-region support',
      icon: FaGlobe,
      impact: 'Multi-region deployment',
      highlights: [
        'Multi-region localization',
        'VEEVA CRM integration',
        'Analytics tracking',
        'Report accuracy',
        'System scalability'
      ],
      tags: ['React', 'VEEVA', 'CRM', 'Analytics'],
    },
    {
      title: 'Bhuvan NRSC',
      company: 'VAMA Industries',
      category: 'Infrastructure',
      description: 'Satellite data infrastructure and monitoring for NRSC',
      icon: FaServer,
      impact: '25% faster response time',
      highlights: [
        'Server management',
        'Nagios & PRTG',
        'System monitoring',
        'Node.js APIs',
        'High availability'
      ],
      tags: ['Linux', 'Nagios', 'PRTG', 'Node.js'],
    },
  ];

  const categories = [
    { name: 'All', icon: FaTh },
    { name: 'AI & Automation', icon: FaBrain },
    { name: 'Communication', icon: FaComments },
    { name: 'Healthcare', icon: FaHeart },
    { name: 'Data Platform', icon: FaSearch },
    { name: 'Enterprise', icon: FaGlobe },
    { name: 'Infrastructure', icon: FaServer },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Carousel settings - show 2 cards at a time on desktop
  const cardsPerView = 2;
  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView);

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
      }, 4000); // Change slide every 4 seconds

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [isAutoPlaying, maxIndex, activeCategory]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0); // Reset carousel position on category change
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
                <FaRocket className="w-7 h-7 text-white" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto">
            Innovative solutions with measurable impact • 8 major projects • 100K+ users impacted
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            const count = category.name === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === category.name).length;
            
            return (
              <motion.button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'glass-effect text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative max-w-6xl mx-auto px-16 mb-8"
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
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    x: `calc(-${currentIndex * 50}% - ${currentIndex * 12}px)`
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                  className="flex gap-6"
                >
                  {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              
              return (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative flex-shrink-0"
                  style={{ width: 'calc(50% - 12px)' }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col overflow-hidden transition-all duration-300">
                    {/* Top Accent Bar */}
                    <div className="h-1 bg-primary" />
                    
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start gap-3 mb-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0"
                          >
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </motion.div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                              {project.company}
                            </p>
                            <span className="inline-flex items-center px-2 py-1 text-xs font-bold rounded-md text-white bg-primary">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gray-200 dark:bg-gray-700 mb-4" />

                      {/* Highlights */}
                      <div className="mb-4 flex-1">
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Key Features
                        </h4>
                        <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                          {project.highlights.slice(0, 5).map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.03 }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-4 h-4 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: tagIndex * 0.02 }}
                              className="px-2 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-primary hover:text-white transition-all cursor-default"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Hover Indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-primary origin-left"
                    />
                  </div>
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

export default Projects;
