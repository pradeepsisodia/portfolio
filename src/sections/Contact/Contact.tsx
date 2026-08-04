import type { ReactNode } from "react";
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
import { useContact } from "../../context/ContactConfigContext";

const contactOptionClass =
  "flex w-full min-w-0 items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/[0.07] border border-cyan-500/25 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 relative z-[1]";

type ContactLink = {
  key: string;
  href: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
};

const Contact = () => {
  useContact();
  const links: ContactLink[] = [];

  const email = mailtoHref();
  if (email) {
    links.push({
      key: "email",
      href: email,
      icon: <FaEnvelope className="text-cyan-400 text-2xl sm:text-3xl shrink-0" />,
      title: "Email me",
      subtitle: "Opens your mail app",
    });
  }

  const linkedin = linkedinHref();
  if (linkedin) {
    links.push({
      key: "linkedin",
      href: linkedin,
      icon: <FaLinkedin className="text-cyan-400 text-2xl sm:text-3xl shrink-0" />,
      title: "LinkedIn",
      subtitle: "View my profile",
    });
  }

  const github = githubHref();
  if (github) {
    links.push({
      key: "github",
      href: github,
      icon: <FaGithub className="text-cyan-400 text-2xl sm:text-3xl shrink-0" />,
      title: "GitHub",
      subtitle: "View my repositories",
    });
  }

  const whatsapp = whatsappHref();
  if (whatsapp) {
    links.push({
      key: "whatsapp",
      href: whatsapp,
      icon: <FaWhatsapp className="text-green-400 text-2xl sm:text-3xl shrink-0" />,
      title: "WhatsApp",
      subtitle: "Send a message",
      className: "hover:border-green-400/50 hover:bg-green-500/10",
    });
  }

  const ContactLinks = ({ className = "" }: { className?: string }) =>
    links.length === 0 ? null : (
      <div className={`space-y-3 sm:space-y-4 ${className}`}>
        {links.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target={item.key === "email" ? undefined : "_blank"}
            rel={item.key === "email" ? undefined : "noopener noreferrer"}
            className={`${contactOptionClass} ${item.className ?? ""}`}
          >
            {item.icon}
            <div className="min-w-0">
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    );

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 relative scroll-mt-24 sm:scroll-mt-28"
    >
      <Container>
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mt-12 sm:mt-20 relative z-[2]">
          <div className="min-w-0 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Let&apos;s Build Something Amazing
            </h3>

            <p className="text-gray-400 mt-4 sm:mt-6 leading-7 sm:leading-8 max-w-lg">
              I&apos;m open to new opportunities, freelance work, and
              collaborations. Use the form or a quick action below — no need to
              copy any details manually.
            </p>

            <ContactLinks className="mt-8 sm:mt-10 hidden lg:block" />
          </div>

          <div className="order-1 lg:order-2 min-w-0">
            <div className="lg:hidden mb-2">
              <p className="text-sm uppercase tracking-wider text-cyan-400/90 mb-3">
                Quick actions
              </p>
              <ContactLinks />
            </div>

            <div className="bg-white/[0.06] border border-cyan-500/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl relative z-[2]">
              <ContactForm />
            </div>
          </div>
        </div>

        {links.length === 0 && (
          <p className="mt-8 text-center text-sm text-gray-500">
            Contact links are configured via environment variables on deploy.
          </p>
        )}
      </Container>
    </section>
  );
};

export default Contact;
