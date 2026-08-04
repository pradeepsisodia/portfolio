import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        className="w-full bg-white/5 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
      />

      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-xl font-semibold transition"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;