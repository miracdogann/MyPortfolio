import React from "react";

const SkillsComponent = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Vite.js", icon: "⚡" },
    { name: "JavaScript", icon: "📜" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🌐" },
    { name: "MySQL", icon: "🗃️" },
    { name: "MS SQL", icon: "🗃️" },
    { name: "SQLite", icon: "💾" },
    { name: "WordPress", icon: "✨" },
    { name: "Figma", icon: "🎨" },
    { name: "Bootstrap", icon: "💎" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Yolo", icon: "🎯" },
    { name: "RoboFlow", icon: "🤖" },
    { name: "Postman", icon: "📮" },
    { name: "GitHub", icon: "👾" },
    { name: "Trello", icon: "📋" },
  ];

  return (
    <div className="skills-container bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        I’m passionate about leveraging diverse technologies to create
        accessible and impactful solutions.
      </p>
      <div className="relative flex justify-center items-center">
        <div className="absolute w-64 h-64 bg-purple-900 rounded-full opacity-50 blur-xl"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-6xl font-bold text-white mb-4">💻</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
