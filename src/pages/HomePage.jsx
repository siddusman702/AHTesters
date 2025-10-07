import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.div
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <motion.img
              src="/logo.png"
              alt="AHTesters Logo"
              className="w-8 h-8"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.h1
              className="text-2xl font-bold text-blue-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              AHTesters
            </motion.h1>
          </motion.div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="text-center py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          🚀 Reliable QA & Automation Services
        </motion.h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Helping businesses deliver flawless applications with manual & automated testing solutions.
        </p>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg"
        >
          Get a Free Quote
        </Button>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Manual Testing", desc: "Functional, Regression, Exploratory, UAT" },
            { title: "Automation Testing", desc: "Selenium, Playwright, Cypress, Appium" },
            { title: "API Testing", desc: "Postman, RestAssured, Karate" },
            { title: "Performance Testing", desc: "JMeter, k6" },
            { title: "CI/CD Integration", desc: "Automated pipelines in Jenkins, GitHub, Azure" },
            { title: "Test Strategy", desc: "Test plans, cases, bug tracking (Jira, Trello, Azure)" },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-cyan-600 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-white py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-cyan-600">AHTesters</span>, we combine manual
            testing insight with automation expertise to deliver high-quality, bug-free
            applications. Our journey began with a passion for technology and today we help
            businesses achieve reliable software quality worldwide.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h3>
          <p className="text-gray-700 mb-6">Let’s talk about your project!</p>

          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-red-600 w-6 h-6" />
            <span>info@ahtesters.com</span>
          </p>

          <p className="flex items-center justify-center gap-2">
            <FaWhatsapp className="text-green-600 w-6 h-6" />
            <span>+92 3463291533</span>
          </p>

          <p className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-blue-600 w-6 h-6" />
            <span>linkedin.com/in/ahteters</span>
          </p>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg"
          >
            Request a Quote
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} AHTesters. All rights reserved.</p>
      </footer>

      {/* MODAL FORM (FORMSPREE) */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Get a Free Quote
            </h3>

            <form
              action="https://formspree.io/f/xjkaebgq"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                required
                rows="4"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
              ></textarea>

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl shadow-md"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
