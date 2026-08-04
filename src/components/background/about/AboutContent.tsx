import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ResumeDownload from "../../ui/ResumeDownload";
import AnimatedSkillTag from "../../ui/AnimatedSkillTag";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Google Apps Script",
  "Google Sheets",
  "Advanced Excel",
  "Accounts",
  "Loan Disbursal",
  "Loan Closing",
  "Collections",
  "MIS Reporting",
  "CRM Development",
  "Data Analysis",
  "Finance & Accounting",
  "PostgreSQL",
  "SQL",
  "Finance",
];

const AboutContent = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold leading-tight"
      >
        Software Developer &
        <span className="text-cyan-400"> Finance Technology Professional</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 text-gray-400 leading-8 text-lg"
      >
        I'm <span className="text-white font-semibold">Pradeep</span>, a
        Software Developer passionate about building premium web applications
        using React, Next.js, TypeScript and Tailwind CSS.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-5 text-gray-400 leading-8 text-lg"
      >
        Along with frontend development, I have practical experience in Finance,
        Accounts, Loan Disbursal, Loan Closing, Collections, Advanced Excel,
        Google Apps Script, Google Sheets Automation and CRM Development.
      </motion.p>

      {/* Skills */}

      <div className="flex flex-wrap gap-3 mt-10">
        {skills.map((skill, index) => (
          <AnimatedSkillTag key={skill} label={skill} index={index} />
        ))}
      </div>
      {/* Buttons */}

      <div className="flex flex-wrap gap-5 mt-12">
        <ResumeDownload />

        <Link
          to="contact"
          smooth={true}
          duration={700}
          offset={-70}
        >
          {/* <Button>
            💼 Hire Me
          </Button> */}
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;