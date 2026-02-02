
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="px-12 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-title font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex gap-10 shadow-2xl p-10 rounded-3xl hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
      >
        <img src="/images/logos/embedur.png" className="w-32" />

        <div>
          <h3 className="font-bold">embedUR Systems</h3>
          <p className="font-semibold">
            Software Engineer – QA (Fusion Studio)
          </p>

          <ul className="list-disc ml-8 mt-6">
            <li>UI automation using Playwright & JavaScript</li>
            <li>Electron-based desktop application testing</li>
            <li>Improved regression stability and coverage</li>
            <li>Contributed to quality assurance of production releases</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
