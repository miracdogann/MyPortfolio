import { motion } from "framer-motion";
import profileEmoji from "../assets/pc_icon.png"; // Görselin path'ine göre güncelle

const HeroSection = () => {
  return (
    <section className="relative bg-[#11071F] text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parlayan Mor Dairesel Arka Işık */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* İçerik */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center py-20">
        {/* Profil Emojisi */}
        <motion.img
          src={profileEmoji}
          alt="Profile"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto shadow-2xl ring-4 ring-purple-900/30 mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        />

        {/* "Hello I am" */}
        <motion.p
          className="text-lg md:text-xl text-purple-300 mb-2 tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hello! I am{" "}
          <span className="text-purple-500 font-bold">Miraç Doğan</span>
        </motion.p>

        {/* Ana Başlık */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: false }}
        >
          "Crafting digital experiences that
          <br />
          leave a lasting
          <span className="relative text-white inline-block ml-2">
            <span className="text-purple-400">impression</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 C30,15 70,-5 100,5"
                stroke="#a855f7"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
          ..
        </motion.h1>

        {/* Alt Açıklama */}
        <motion.p
          className="mt-6 text-sm md:text-base text-gray-400 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          “Driven by passion, powered by code.”
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
