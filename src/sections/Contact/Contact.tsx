import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import ContactForm from "../../components/forms/ContactForm";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  githubHref,
  linkedinHref,
  mailtoHref,
  whatsappHref,
} from "../../config/contact";
const contactOptionClass = `
  flex
  items-center
  gap-5
  p-5
  rounded-2xl
  bg-white/5
  border
  border-cyan-500/20
  backdrop-blur-lg
  hover:bg-cyan-500/10
  hover:border-cyan-400
  transition-all
  duration-300
`;

const Contact = () => {
  const email = mailtoHref();
  const whatsapp = whatsappHref();
  const linkedin = linkedinHref();
  const github = githubHref();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <Container>
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <div>
            <h3 className="text-4xl font-bold">
              Let&apos;s Build Something Amazing
            </h3>

            <p className="text-gray-400 mt-6 leading-8 max-w-lg">
              I&apos;m open to new opportunities, freelance work, and
              collaborations. Use the form or a quick action below — no need to
              copy any details manually.
            </p>

            <div className="space-y-4 mt-10">
              {email && (
                <a href={email} className={contactOptionClass}>
                  <FaEnvelope className="text-cyan-400 text-3xl shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email me</h4>
                    <p className="text-gray-500 text-sm">
                      Opens your mail app
                    </p>
                  </div>
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactOptionClass}
                >
                  <FaLinkedin className="text-cyan-400 text-3xl shrink-0" />
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-gray-500 text-sm">View my profile</p>
                  </div>
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactOptionClass}
                >
                  <FaGithub className="text-cyan-400 text-3xl shrink-0" />
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-gray-500 text-sm">View my repositories</p>
                  </div>
                </a>
              )}

              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${contactOptionClass} hover:border-green-400/50 hover:bg-green-500/10`}
                >
                  <FaWhatsapp className="text-green-400 text-3xl shrink-0" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-gray-500 text-sm">Send a message</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
