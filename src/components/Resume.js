import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFilePdf, 
  FaDownload, 
  FaChevronLeft, 
  FaChevronRight,
  FaCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCloud,
  FaTerminal,
  FaRocket,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaMobile,
  FaGlobe,
  FaLaptopCode,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaStar,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding
} from 'react-icons/fa';

function Resume() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Update this based on your actual PDF page count

  const handleDownload = () => {
    console.log('Downloading resume...');
    alert('Resume download would start here. Please replace with your actual resume PDF.');
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  return (
    <section id="resume" className="section-padding bg-white dark:bg-black relative overflow-hidden">
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
          className="text-center mb-12"
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
                <FaFilePdf className="w-7 h-7 text-white" />
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
              Professional <span className="text-primary">Resume</span>
          </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto">
            7+ years of experience • Technical Leadership • AI Innovation • Full-Stack Development
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
              <motion.button
                onClick={handleDownload}
            whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
            <FaDownload className="w-5 h-5" />
                Download PDF
              </motion.button>
        </motion.div>

        {/* Modern PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Clean PDF Container */}
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative group"
          >
            {/* Main PDF Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden relative">
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
              
              {/* PDF Content */}
              <div className="h-[calc(100vh-250px)] w-full relative">
                <iframe
                  src={`/resume.pdf#page=${currentPage}&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0`}
                  width="100%"
                  height="100%"
                  className="border-0"
                  title={`Resume PDF - Page ${currentPage}`}
                  style={{ 
                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))',
                    borderRadius: '0 0 1.5rem 1.5rem'
                  }}
                />
                
                {/* Overlay Gradient for Modern Look */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-gray-800/5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

export default Resume;
