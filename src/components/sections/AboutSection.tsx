import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id = "about" }) => {
  const { theme } = useTheme() || { theme: "light" };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Mobile Development", level: 75 },
    { name: "DevOps", level: 70 },
  ];

  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-4 md:px-8 lg:px-16 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div
              className={`h-1 w-20 mx-auto ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"}`}
            ></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-lg">
                I'm a passionate developer with a keen eye for design and a love
                for creating seamless user experiences. With over 5 years of
                experience in web development, I specialize in building modern,
                responsive applications that solve real-world problems.
              </p>
              <p className="text-lg">
                My journey in tech began when I built my first website at 15,
                and I've been hooked ever since. I believe in continuous
                learning and staying updated with the latest technologies and
                best practices.
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className={`inline-block px-6 py-3 rounded-md font-medium transition-colors ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
                    >
                      <motion.div
                        className={`h-full rounded-full ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            <div
              className={`p-6 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="text-4xl mb-4 text-blue-500">5+</div>
              <h4 className="text-xl font-semibold mb-2">Years Experience</h4>
              <p>Building modern web applications and user interfaces</p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="text-4xl mb-4 text-blue-500">50+</div>
              <h4 className="text-xl font-semibold mb-2">Projects Completed</h4>
              <p>Delivering high-quality solutions for diverse clients</p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="text-4xl mb-4 text-blue-500">20+</div>
              <h4 className="text-xl font-semibold mb-2">Happy Clients</h4>
              <p>Satisfied customers from startups to enterprises</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
