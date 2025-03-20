import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../../context/ThemeContext";

interface HomeSectionProps {
  id?: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ id = "home" }) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500 opacity-10"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-500 opacity-10"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-green-500 opacity-10"
          animate={{
            y: [0, 50, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="z-10 max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-2"
          variants={itemVariants}
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          variants={itemVariants}
        >
          Amit Kumar
        </motion.h1>

        <motion.h3
          className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          Full Stack Developer & UI/UX Designer
        </motion.h3>

        <motion.p
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I build modern, responsive web applications with cutting-edge
          technologies. Passionate about creating intuitive user experiences and
          clean, efficient code.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Scroll Down
        </p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="text-blue-600 dark:text-blue-400" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
