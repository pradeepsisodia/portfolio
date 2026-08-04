import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import Container from "../../components/Common/Container";
import Button from "../../components/ui/Button";
import ResumeDownload from "../../components/ui/ResumeDownload";
import HeroShowcase from "../../components/hero/HeroShowcase";
import { githubHref, linkedinHref } from "../../config/contact";
import { useContact } from "../../context/ContactConfigContext";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  useContact();
  const github = githubHref();
  const linkedin = linkedinHref();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden flex items-center pt-24 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-32 top-24 w-[380px] h-[380px] rounded-full bg-cyan-500/25 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -right-32 bottom-0 w-[360px] h-[360px] rounded-full bg-purple-500/20 blur-[120px]"
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="relative z-20 min-w-0 order-2 lg:order-1">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-cyan-400 text-sm mb-4 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Available for work
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-gray-400 text-base sm:text-lg mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight break-words"
            >
              <span className="block text-white">Pradeep</span>
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Software Developer
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-lg sm:text-xl font-medium text-gray-300 min-h-[2.5rem]"
            >
              <TypeAnimation
                sequence={[
                  "React & Next.js",
                  1600,
                  "TypeScript apps",
                  1600,
                  "Finance dashboards",
                  1600,
                  "CRM & automation",
                  1600,
                ]}
                speed={48}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-gray-400"
            >
              I craft fast, modern web experiences with React and TypeScript —
              from sleek interfaces to finance dashboards and automation that
              solve real business problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3 sm:gap-4 mt-8"
            >
              <ResumeDownload />
              <Link to="projects" smooth duration={700} offset={-80}>
                <Button>View Projects</Button>
              </Link>
            </motion.div>

            {(github || linkedin) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-8"
              >
                {github && (
                  <motion.a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub profile"
                  >
                    <FaGithub className="text-xl sm:text-2xl" />
                  </motion.a>
                )}
                {linkedin && (
                  <motion.a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin className="text-xl sm:text-2xl" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center order-1 lg:order-2 py-4 lg:py-0"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </Container>

      <Link to="about" smooth duration={700} offset={-80}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer p-2 rounded-full border border-white/15 bg-white/5 hover:border-cyan-500/40 transition-colors"
          aria-hidden
        >
          <FaArrowDown className="text-lg text-cyan-400" />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
