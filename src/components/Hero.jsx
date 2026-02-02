
import { FaDownload, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 pt-32">
      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <div>
          <h1 className="font-bold text-title">Samson Peter P</h1>

          <p className="mt-10">
            Software Engineer with hands-on experience in UI testing and automation
            for Electron-based applications, backed by strong foundations in
            Mechatronics, IoT, and Automation.
          </p>

          <div className="mt-12 flex gap-8 flex-wrap">
            <a
              href="/resume.pdf"
              download="Samson_Peter_Resume.pdf"
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
            >
              <FaDownload /> Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
            >
              <FaEnvelope /> Contact Me
            </a>

            <a
              href="https://github.com/Samsonpeter33"
              target="_blank"
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <img
          src="/images/hero/hero.png"
          className="max-w-xl mx-auto animate-pulse"
        />
      </div>
    </section>
  );
}
