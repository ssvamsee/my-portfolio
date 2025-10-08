import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaRocket,
  FaBrain,
  FaChevronDown,
  FaBriefcase,
  FaUsers,
  FaTrophy,
  FaTerminal,
  FaServer,
  FaDatabase,
  FaReact,
  FaFlask,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const userData = {
    name: 'Siddam Sai Vamsee Prasad',
    title: 'Software Engineer',
    description: 'Technical Lead | Generative AI | React.js | Node.js | Express.js | LangChain | LangGraph | AWS | Docker | Python | Building AI-Powered Cloud Applications & Scalable Web Systems',
    stats: [
      { icon: FaBriefcase, value: '8+', label: 'Years Exp.' },
      { icon: FaUsers, value: '14+', label: 'Projects' },
      { icon: FaTrophy, value: '100%', label: 'Success' },
    ],
  }

  const roles = [
    'Full Stack Developer',
    'GenAI Engineer',
    'Prompt Engineer',
    'Tech Lead',
    'Expert in Node.js' ,
    'Experienced in DevOps and CI/CD',
    'Docker Expert',
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect for roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Floating elements configuration
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ssvamsee', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/siddam-sai-vamsee-prasad-32436488/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Twitter', url: 'https://x.com/siddamvamsee', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-primary"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              bottom: '-20px',
              opacity: element.opacity,
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, Math.sin(element.id) * 100],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 h-full flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 items-center w-full"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-5 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  Hello, I'm
                </span>
                <motion.span
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="text-2xl"
                >
                  👋
                </motion.span>
              </div>

              {/* Name with Parallax */}
              <motion.h1
                style={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white">
                  {userData.name}
                </span>
              </motion.h1>

              {/* Animated Role */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-primary"
                >
                  {roles[currentRole]}
                </motion.h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {userData.description}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {userData?.stats?.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-lg p-3 text-center group cursor-default"
                  >
                    <div className="flex justify-center mb-1.5">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center text-sm"
              >
                <FaRocket className="w-4 h-4" />
                Let's Work Together
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-effect text-gray-700 dark:text-gray-300 rounded-lg font-semibold border border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center text-sm"
              >
                <FaCode className="w-4 h-4" />
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Connect:
              </span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 glass-effect rounded-lg flex items-center justify-center hover:border-primary transition-all group"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-4 h-4 fill-gray-600 dark:fill-gray-400 group-hover:fill-primary transition-colors"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[550px] h-[550px] flex items-center justify-center">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute w-[450px] h-[450px] rounded-full border-2 border-dashed border-primary/30"
              />
              
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute w-[330px] h-[330px] rounded-full border-2 border-dotted border-primary/20"
              />

              {/* Center Circle with Icons */}
              <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                <div className="absolute flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-primary/20 flex items-center justify-center"
                  >
                    <FaBrain className="w-16 h-16 text-primary" />
                  </motion.div>
                </div>

                {/* Inner Orbiting Tech Icons */}
                {[
                  { icon: FaReact, color: 'text-blue-500', bgColor: 'bg-blue-500/10', name: 'React' },
                  { icon: FaJs, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', name: 'JavaScript' },
                  { icon: FaPython, color: 'text-green-500', bgColor: 'bg-green-500/10', name: 'Python' },
                  { icon: FaNodeJs, color: 'text-green-600', bgColor: 'bg-green-600/10', name: 'Node.js' },
                  { icon: FaAws, color: 'text-orange-500', bgColor: 'bg-orange-500/10', name: 'AWS' },
                  { icon: FaDocker, color: 'text-blue-600', bgColor: 'bg-blue-600/10', name: 'Docker' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const angle = (index * 360) / 6;
                  const radius = 140;
                  return (
                    <motion.div
                      key={`inner-${index}`}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.1,
                      }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        x: '-50%',
                        y: '-50%',
                      }}
                    >
                      <motion.div
                        style={{
                          x: Math.cos((angle * Math.PI) / 180) * radius,
                          y: Math.sin((angle * Math.PI) / 180) * radius,
                        }}
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: index * 0.1,
                        }}
                        whileHover={{ scale: 1.15 }}
                        className={`w-10 h-10 glass-effect rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all group ${item.bgColor} relative`}
                        title={item.name}
                      >
                        <Icon className={`w-4 h-4 ${item.color} group-hover:text-white transition-colors`} />
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          {item.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Outer Orbiting Tech Icons */}
                {[
                  { icon: FaDatabase, color: 'text-indigo-500', bgColor: 'bg-indigo-500/10', name: 'Database' },
                  { icon: FaHtml5, color: 'text-sky-500', bgColor: 'bg-sky-500/10', name: 'Cloud' },
                  { icon: FaServer, color: 'text-purple-500', bgColor: 'bg-purple-500/10', name: 'Mobile' },
                  { icon: FaFlask, color: 'text-red-500', bgColor: 'bg-red-500/10', name: 'Testing' },
                  { icon: FaCss3Alt, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', name: 'CI/CD' },
                  { icon: FaTerminal, color: 'text-gray-600', bgColor: 'bg-gray-600/10', name: 'Terminal' },
                  { icon: FaGitAlt, color: 'text-orange-600', bgColor: 'bg-orange-600/10', name: 'Git' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const angle = (index * 360) / 7 + 45; // Offset by 45 degrees
                  const radius = 195;
                  return (
                    <motion.div
                      key={`outer-${index}`}
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.15,
                      }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        x: '-50%',
                        y: '-50%',
                      }}
                    >
                      <motion.div
                        style={{
                          x: Math.cos((angle * Math.PI) / 180) * radius,
                          y: Math.sin((angle * Math.PI) / 180) * radius,
                        }}
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: index * 0.15,
                        }}
                        whileHover={{ scale: 1.15 }}
                        className={`w-10 h-10 glass-effect rounded-lg flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all group ${item.bgColor} relative`}
                        title={item.name}
                      >
                        <Icon className={`w-4 h-4 ${item.color} group-hover:text-white transition-colors`} />
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          {item.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#skills')}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium uppercase tracking-wider">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 group-hover:border-primary rounded-full flex items-start justify-center p-2 transition-colors">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
