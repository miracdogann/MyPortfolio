import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Trashure Frontend",
    link: "https://github.com/miracdogann/trashure_frontend",
    desc: "Atık Takip Sistemi için modern arayüz",
  },
  {
    title: "Trashure Backend",
    link: "https://github.com/miracdogann/trashure_backend",
    desc: "Node.js ile atık yönetimi REST API",
  },
  {
    title: "Overtink.AI",
    link: "https://github.com/miracdogann/Overtink.AI",
    desc: "Yapay zekâ odaklı ileri düzey platform",
  },
  {
    title: "Movie App",
    link: "https://github.com/miracdogann/movie-app",
    desc: "React ile film bilgilerini sunan uygulama",
  },
  {
    title: "PCAT",
    link: "https://github.com/miracdogann/PCAT",
    desc: "Blog oluşturma sistemi (Node.js + Mongo)",
  },
  {
    title: "Ses Analizi Frontend",
    link: "https://github.com/miracdogann/ses-analizi-frontend",
    desc: "Kullanıcı sesiyle duygu ve kişi analizi",
  },
  {
    title: "Weather Web App",
    link: "https://github.com/miracdogann/weather_web_app_react",
    desc: "React ile hava durumu tahmin uygulaması",
  },
  {
    title: "Simple JS Project",
    link: "https://github.com/miracdogann/simplejsProject",
    desc: "Basit Vanilla JS projeleri koleksiyonu",
  },
  {
    title: "Todo App Native",
    link: "https://github.com/miracdogann/todoAppNative",
    desc: "React Native ile yapılmış görev listesi",
  },
  {
    title: "YouTube to MP3 (Django)",
    link: "https://github.com/miracdogann/youtube-to-mp3-converte-with-pytohn-django",
    desc: "YouTube videolarını MP3’e dönüştürme",
  },
  {
    title: "Cafe QR Menü",
    link: "https://github.com/miracdogann/Cafe-restaurant-menu-with-QR-code",
    desc: "QR kodla çalışan dijital menü sistemi",
  },
  {
    title: "Word Memorization",
    link: "https://github.com/miracdogann/English-word-memorization-program",
    desc: "İngilizce kelime ezberleme uygulaması",
  },
];

const ProjectsSection = () => {
  return (
    <Element name="projects">
      <section className="bg-[#161616] text-white py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-purple-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-[#222232] p-5 rounded-xl shadow-lg border border-[#2e2e3e] hover:shadow-purple-700 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FaGithub className="text-white mr-2 text-lg" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default ProjectsSection;
