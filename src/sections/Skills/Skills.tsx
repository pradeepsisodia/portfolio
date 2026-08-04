import { motion } from "framer-motion";
import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import SkillCard from "../../components/cards/SkillCard";
import { techStack } from "../../data/techStack";

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-20 w-64 h-64 bg-cyan-500/10 blur-[100px]" />

      <Container>
        <SectionTitle subtitle="Technologies" title="Skills & Expertise" />

        <div className="space-y-16 mt-20">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.08,
              }}
            >
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text">
                {category.category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
