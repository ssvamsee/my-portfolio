import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

function Contact() {
  // Contact methods with modern grid
  const contactMethods = [
    {
      name: 'Email',
      value: 'siddamvamsee@gmail.com',
      href: 'mailto:siddamvamsee@gmail.com',
      icon: EnvelopeIcon,
      description: 'Send me an email',
      detail: 'Best for detailed inquiries',
      responseTime: '24 hours',
      badge: 'Professional',
    },
    {
      name: 'Phone',
      value: '+91 9866850135',
      href: 'tel:+919866850135',
      icon: PhoneIcon,
      description: 'Give me a call',
      detail: 'Quick discussions & urgent matters',
      responseTime: 'Instant',
      badge: 'Direct',
    },
    {
      name: 'GitHub',
      value: '@ssvamsee',
      href: 'https://github.com/ssvamsee',
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Check out my repos',
      detail: 'View my open-source work',
      responseTime: 'View anytime',
      badge: 'Code',
    },
    {
      name: 'LinkedIn',
      value: '@siddamvamsee',
      href: 'https://www.linkedin.com/in/siddam-sai-vamsee-prasad-32436488/',
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: 'Connect with me',
      detail: 'Professional networking',
      responseTime: '1-2 days',
      badge: 'Network',
    },
    {
      name: 'Instagram',
      value: '@Siddamvamsee',
      href: 'https://www.instagram.com/siddamvamsee/',
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      description: 'Follow my journey',
      detail: 'Behind the scenes & updates',
      responseTime: 'Daily active',
      badge: 'Social',
    },
    {
      name: 'Twitter',
      value: '@siddamvamsee',
      href: 'https://x.com/siddamvamsee',
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      description: 'Follow for updates',
      detail: 'Quick updates & thoughts',
      responseTime: 'Very active',
      badge: 'Updates',
    },
  ];

  const userData = {
    location: 'Hyderabad, Telangana, India',
    availability: 'Mon - Fri, 1:00 pm - 7:00 pm (IST)',
    email: 'siddamvamsee@gmail.com',
    phone: '+91 9866850135',
    yearsExp: '8+',
    projectsDone: '14+',
    satisfaction: '100%',
  }

  const features = [
    { icon: CheckCircleIcon, text: 'Response within 24 hours' },
    { icon: SparklesIcon, text: 'Free initial consultation' },
    { icon: ClockIcon, text: 'Flexible working hours' },
  ];

  const handleContactClick = (href) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const sideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
                <PaperAirplaneIcon className="w-7 h-7 text-white" />
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
              Let's <span className="text-primary">Connect</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto">
            Choose your preferred way to reach out. I'm always open to discussing new projects and creative opportunities.
          </p>
        </motion.div>

        {/* Main Content Grid - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Contact Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                
                return (
                  <motion.div
                    key={method.name}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleContactClick(method.href)}
                    className="card-effect rounded-xl p-4 cursor-pointer group relative overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                  >
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                        {method.badge}
                      </span>
                    </div>

                    <div>
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="mb-2"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Platform Name */}
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                        {method.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {method.description}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-1">
                      {/* Response Time */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <BoltIcon className="w-3 h-3 text-primary" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {method.responseTime}
                        </span>
                      </div>

                      {/* Value */}
                      <p className="text-xs font-semibold text-primary truncate">
                        {method.value}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Ready to Start Project */}
          <motion.div
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="card-effect rounded-2xl p-6 space-y-4 h-full">
              {/* Badge */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full w-fit"
              >
                <SparklesIcon className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary">Available for Work</span>
              </motion.div>

              {/* Title */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  I'm currently available for freelance work, consulting, and exciting new opportunities. 
                  Let's collaborate and bring your vision to life with cutting-edge solutions.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Location & Availability */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-2 mb-2">
                  <MapPinIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{userData.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ClockIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Availability</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{userData.availability}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleContactClick('mailto:' + userData.email)}
                  className="flex-1 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  Send Email
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleContactClick('tel:' + userData.phone)}
                  className="flex-1 px-4 py-2.5 glass-effect text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call Now
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{userData.yearsExp}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Years Exp.</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{userData.projectsDone}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Projects Done</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{userData.satisfaction}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
