import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import ExperienceCard from "../../components/cards/ExperienceCard";
import { experience } from "../../data/experience";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      <Container>

        <SectionTitle
          subtitle="My Journey"
          title="Professional Experience"
        />

        <div className="relative mt-24">

          {/* Center Timeline */}

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="
              hidden
              lg:block
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              w-[4px]
              rounded-full
              bg-gradient-to-b
              from-cyan-400
              via-blue-500
              to-purple-500
            "
          />

          <div className="space-y-24">

            {experience.map((item, index) => (

              <div
                key={index}
                className={`
                  relative
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "lg:justify-start"
                      : "lg:justify-end"
                  }
                `}
              >

                {/* Timeline Dot */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  transition={{
                    delay: .3,
                  }}
                  className="
                    hidden
                    lg:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-8
                    h-8
                    rounded-full
                    border-4
                    border-[#050816]
                    bg-cyan-400
                    shadow-[0_0_25px_#22d3ee]
                    z-20
                  "
                />

                <div className="w-full lg:w-[45%]">

                  <ExperienceCard
                    {...item}
                    align={index % 2 === 0 ? "left" : "right"}
                    index={index}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Experience;