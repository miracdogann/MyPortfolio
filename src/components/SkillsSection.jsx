import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaWordpress,
  FaFigma,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiVite,
  SiJavascript,
  SiTensorflow,
  SiPostman,
  // SiYolo,
  SiTrello,
  SiRoboflow,
  SiCanva,
  SiExpo,
} from "react-icons/si";
import { VscDatabase } from "react-icons/vsc"; // VS Code Icons
import { Element } from "react-scroll";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "React Native , Expo",
    icon: <SiExpo className="text-sky-400" />,
  },
  { name: "Vite.js", icon: <SiVite className="text-green-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MsSQL", icon: <VscDatabase className="text-red-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-gray-400" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-800" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-violet-600" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "YOLO", icon: <SiTrello className="text-yellow-500" /> },
  { name: "Roboflow", icon: <SiRoboflow className="text-indigo-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
  { name: "Canva", icon: <SiCanva className="text-indigo-200" /> },
];

const SkillsSection = () => {
  return (
    <Element name="skills">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#190735] py-16 px-8 md:px-20 text-white"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-white">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: false }}
              className="flex flex-col items-center space-y-2 bg-[#2a2a3c] rounded-xl p-4 w-32 h-32 text-center hover:shadow-lg hover:shadow-purple-600 transition-all duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default SkillsSection;
