import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaRocket,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaCode,
  FaCogs,
  FaGlobe,
  FaServer,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaTerminal,
  FaLaptopCode,
  FaMobile,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  const experiences = [
    {
      title: 'Technical Lead',
      company: 'IdeyaLabs Tech LLP',
      period: 'Aug 2024 – Present',
      duration: 'Current',
      location: 'Hyderabad, India',
      type: 'Leadership',
      icon: FaRocket,
      achievements: [
        'Led a team of 35 engineers and AI specialists, delivering multiple projects in parallel with 100% on-time completion',
        'Designed and launched a GenAI-powered No-Code Automated Testing Tool, reducing test creation time by 60% and defect leakage by 20%',
        'Built an AI-driven PDLC Agent using GenAI tools, accelerating delivery timelines by 35%',
        'Integrated GenAI tools into workflows, improving overall engineering efficiency by 30%',
        'Developed pipelines to handle unstructured data from Figma, Jira, and Word documents',
        'Implemented CI/CD pipelines and AWS cloud-native deployments, reducing release cycle time by 40%',
        'Partnered with DevOps and QA teams to implement automated testing strategies'
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'ONPASSIVE',
      period: 'Apr 2023 – Aug 2024',
      duration: '1 year 4 months',
      location: 'Hyderabad, India',
      type: 'Engineering',
      icon: FaCode,
      achievements: [
        'Designed, developed, and maintained O-Connect supporting 10,000+ concurrent users',
        'Integrated GenAI-powered features like virtual backgrounds and intelligent noise suppression',
        'Implemented LLM-based real-time audio translation for seamless language conversion',
        'Built O-PAL with AI-driven content moderation and smart recommendations',
        'Architected multi-region deployments reducing latency by 35%',
        'Ensured seamless scalability under heavy concurrent loads'
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Trevista Innovations',
      period: 'Oct 2021 – Apr 2023',
      duration: '1 year 6 months',
      location: 'Hyderabad, India',
      type: 'Engineering',
      icon: FaBrain,
      achievements: [
        'Developed JL MUSH telemedicine platform for virtual consultations',
        'Built Cellix Bio pharmaceutical patent data platform',
        'Designed and implemented RESTful APIs and database schemas',
        'Optimized workflows reducing operational overhead by 25%',
        'Collaborated with stakeholders for requirements and feasibility studies'
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Tech Mahindra',
      period: 'Oct 2018 – Oct 2021',
      duration: '3 years',
      location: 'Hyderabad, India',
      type: 'Engineering',
      icon: FaGlobe,
      achievements: [
        'Developed responsive web applications for GSK across devices and regions',
        'Worked with VEEVA Multichannel CRM for content management',
        'Validated vault reports and KPIs for accurate data capture',
        'Developed best practice demo presentations for training',
        'Localized web pages for multiple regions'
      ],
    },
    {
      title: 'Jr. System Engineer',
      company: 'VAMA Industries Limited',
      period: 'Oct 2017 – Oct 2018',
      duration: '1 year',
      location: 'Hyderabad, India',
      type: 'Infrastructure',
      icon: FaServer,
      achievements: [
        'Managed Linux-based servers for Bhuvan project (NRSC)',
        'Implemented Nagios monitoring system with PRTG integration',
        'Reduced incident response time by 25%',
        'Developed Node.js REST APIs for satellite data',
        'Assisted in requirement gathering and client demos'
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
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
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
                <FaBriefcase className="w-7 h-7 text-white" />
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
              Career <span className="text-primary">Journey</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto">
            8+ years of transforming ideas into reality • Leading teams • Driving innovation
          </p>
        </motion.div>

        {/* Interactive Experience Display */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Left: Company Timeline */}
          <div className="lg:col-span-1 space-y-3">
            {experiences.map((exp, index) => {
              const isActive = selectedExp === index;
              const Icon = exp.icon;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedExp(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left relative overflow-hidden rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'shadow-xl shadow-primary/20'
                      : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {/* Animated Background */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-primary"
                  />
                  
                  {/* Glass Background for Inactive */}
                  {!isActive && (
                    <div className="absolute inset-0 glass-effect group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 transition-colors" />
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    <div className="flex items-center gap-3">
                      {/* Icon with Animation */}
                      <motion.div
                        animate={{
                          rotate: isActive ? [0, 360] : 0,
                        }}
                        transition={{
                          rotate: { duration: 0.5, ease: "easeInOut" },
                        }}
                        className="relative flex-shrink-0"
                      >
                        <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-white/20'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            isActive ? 'text-white' : 'text-primary'
                          }`} />
                        </div>
                        
                        {/* Pulse Effect on Active */}
                        {isActive && (
                          <motion.div
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-white rounded-lg"
                          />
                        )}
                      </motion.div>
                      
                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-base mb-0.5 truncate transition-colors ${
                          isActive ? 'text-white' : 'text-gray-900 dark:text-white'
                        }`}>
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <FaCalendarAlt className={`w-3.5 h-3.5 ${
                            isActive ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                          }`} />
                          <p className={`text-xs font-medium ${
                            isActive ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      {/* Arrow Indicator */}
                      <motion.div
                        animate={{
                          x: isActive ? 3 : 0,
                          opacity: isActive ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`flex-shrink-0 ${
                          isActive ? 'text-white' : 'text-gray-400 dark:text-gray-600'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeHighlight"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white/50"
                    />
                  )}

                  {/* Shine Effect on Hover */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right: Experience Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                  {/* Left Border Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

                  {/* Background Pattern */}
                  <div className="absolute top-8 right-8 opacity-[0.03] select-none pointer-events-none">
                    {React.createElement(experiences[selectedExp].icon, { className: "w-48 h-48 text-primary" })}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Header Section */}
                    <div className="mb-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-primary mb-3">
                            <FaRocket className="w-3 h-3" />
                            {experiences[selectedExp].type}
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                            {experiences[selectedExp].title}
                          </h3>

                          <div className="flex items-center gap-2 mb-3">
                            <FaBuilding className="w-4 h-4 text-primary" />
                            <span className="text-lg font-semibold text-primary">
                              {experiences[selectedExp].company}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <FaCalendarAlt className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                {experiences[selectedExp].period}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <FaMapMarkerAlt className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                {experiences[selectedExp].location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />
                    </div>

                    {/* Achievements Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FaTrophy className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">
                          Key Achievements
                        </h4>
                      </div>
                      
                      <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                        {experiences[selectedExp].achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-200 mt-0.5">
                              <span className="text-white font-bold text-xs">{i + 1}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '7+', icon: CalendarIcon },
            { label: 'Companies', value: '5', icon: BuildingOffice2Icon },
            { label: 'Major Projects', value: '20+', icon: SparklesIcon },
            { label: 'Team Size Led', value: '35', icon: UsersIcon },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group"
            >
              <div className="card-effect rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}

export default Experience;
