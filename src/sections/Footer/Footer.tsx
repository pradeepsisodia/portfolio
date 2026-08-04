import Container from "../../components/Common/Container";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { githubHref, linkedinHref } from "../../config/contact";

const Footer = () => {
  const github = githubHref();
  const linkedin = linkedinHref();

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-400 flex items-center gap-2 text-center md:text-left">
            © {new Date().getFullYear()} Pradeep. Made with
            <FaHeart className="text-cyan-400" aria-hidden />
          </p>

          {(github || linkedin) && (
            <div className="flex gap-6 text-2xl">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
