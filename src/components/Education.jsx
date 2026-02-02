
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="px-12 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-title font-bold text-center mb-16"
      >
        Education
      </motion.h2>

      <div className="space-y-10 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-10 shadow-2xl p-10 rounded-3xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 cursor-pointer"
        >
          <img src="/images/logos/srm.png" className="w-32" />
          <div>
            <h3 className="font-bold">SRM Institute of Science and Technology</h3>
            <p>M.Tech – Artificial Intelligence & Data Science (Present)</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-10 shadow-2xl p-10 rounded-3xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 cursor-pointer"
        >
          <img src="/images/logos/sona.png" className="w-32" />
          <div>
            <h3 className="font-bold">Sona College of Technology</h3>
            <p>B.E – Mechatronics Engineering (92%)</p>
            <p className="font-semibold text-yellow-600">Gold Medalist</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-10 shadow-2xl p-10 rounded-3xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 cursor-pointer"
        >
          <img src="/images/logos/kv.png" className="w-32" />
          <div>
            <h3 className="font-bold">Kendriya Vidyalaya</h3>
            <p>HSC & SSLC</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
