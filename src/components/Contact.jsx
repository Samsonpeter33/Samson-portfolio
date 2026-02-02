
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const celebrate = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Yay!! We might be working together 🎉");
    celebrate();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    setTimeout(() => {
      window.location.href =
        `mailto:samsonpeter.psms@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <section id="contact" className="px-12 py-32 bg-gray-50">
      <h2 className="text-title font-bold text-center mb-16">Contact Me</h2>

      <div className="flex justify-center gap-10 flex-wrap mb-20">
        <a
          href="mailto:samsonpeter.psms@gmail.com"
          className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
        >
          <FaEnvelope /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/samson-peter-8187bb258/"
          target="_blank"
          className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/Samsonpeter33"
          target="_blank"
          className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h3 className="font-bold text-3xl mb-4 text-blue-800">
          Interested in working together?
        </h3>
        <p className="mb-8 text-gray-600">
          Fill out the form or reach out via social.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 text-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 text-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="How can I help?"
              required
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 text-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl hover:scale-110 transition"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
