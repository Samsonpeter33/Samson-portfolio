
import { motion } from "framer-motion";

export default function Achievements() {
  const items = [
    "Gold Medalist – B.E Mechatronics Engineering",
    "2nd Place – Innovator Arena Competition",
    "Top 5% Nationwide – NPTEL Automation in Manufacturing",
    "Consistently Ranked First in Academics",
    "Rajyapuraskar – Scouts & Guides"
  ];

  return (
    <section id="achievements" className="px-12 py-28 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-title font-bold text-center mb-16"
      >
        Achievements
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl p-8 rounded-2xl
                       hover:shadow-2xl hover:-translate-y-2
                       transition-all duration-500 cursor-pointer"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
