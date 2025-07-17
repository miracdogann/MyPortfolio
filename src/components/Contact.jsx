import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3h73qs", // Service ID
        "template_3trdpti", // Template ID (EmailJS dashboard'tan al)
        form.current,
        "F40DA4Q8HPkgt3bgD" // Public Key (EmailJS dashboard'tan al)
      )
      .then(
        (result) => {
          toast.success("Mesaj başarıyla gönderildi!", {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset(); // formu temizle
        },
        (error) => {
          toast.error("Bir hata oluştu. Lütfen tekrar deneyin.", {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error(error.text);
        }
      );
  };

  return (
    <Element name="contact">
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-br from-[#1E1E2F] to-[#12121A] text-white px-6 py-16 md:px-20 rounded-2xl shadow-xl"
      >
        <div className="max-w-7xl mx-auto md:flex md:space-x-16">
          {/* Sol kısım: iletişim bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-500">
              Contact with us
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Have a project or question in mind? Let’s build something amazing
              together.
            </p>
            <div className="space-y-6 text-gray-300 text-base">
              <div className="flex items-start space-x-4">
                <span className="text-purple-500">📍</span>
                <p>Manisa İzmir, Turkey</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-purple-500">📞</span>
                <p>0 546 681 90 80</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-purple-500">✉️</span>
                <p>miracdogan7247@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Sağ kısım: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:w-1/2"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  required
                  className="w-full md:w-1/2 bg-[#2A2A3C] border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  required
                  className="w-full md:w-1/2 bg-[#2A2A3C] border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full bg-[#2A2A3C] border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full bg-[#2A2A3C] border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                className="w-full h-32 bg-[#2A2A3C] border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Contact;
