
import { motion } from "framer-motion";

export default function Publications() {
  const papers = [
    {
      title: "Multi-Purpose Water Hyacinth Reaper with Weight Management",
      journal: "IEEE Journal",
      description:
        "Presents the design of a multifunctional water hyacinth reaper with optimized weight management to improve aquatic weed removal efficiency and system stability."
    },
    {
      title: "Semi-Automated Overhead Water Tank Cleaner",
      journal: "IEEE Journal",
      description:
        "Describes a semi-automated overhead water tank cleaning system using mechanical linkages to enhance safety, hygiene, and water conservation."
    },
    {
      title: "OxySense-Wear: IoT-Based Wearable Health Monitoring System",
      journal: "IEEE / Conference Publication",
      description:
        "Introduces an IoT-based wearable system for real-time monitoring of ECG, SpO₂, temperature, EMG, and motion with cloud integration for remote healthcare and telemedicine."
    },
    {
      title: "IoT-Based Biometric Fingerprint Attendance System",
      journal: "IEEE / Conference Publication",
      description:
        "Details the design of an IoT-enabled biometric attendance system using ESP8266 and Arduino for secure authentication, real-time logging, and centralized attendance management."
    }
  ];

  return (
    <section id="publications" className="px-12 py-28 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-title font-bold text-center mb-16"
      >
        Publications
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {papers.map((paper, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="shadow-2xl p-10 rounded-3xl hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="font-bold text-blue-800 mb-2">
              {paper.title}
            </h3>
            <p className="font-semibold text-gray-600 mb-4">
              Published in {paper.journal}
            </p>
            <p>{paper.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
