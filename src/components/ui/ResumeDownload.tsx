import type { ReactNode } from "react";
import { RESUME_FILENAME, RESUME_PDF_URL } from "../../data/site";
import Button from "../ui/Button";

type Props = {
  primary?: boolean;
  children?: ReactNode;
};

/** Resume link that works on Vite dev, preview, and static deploy (Vercel / Netlify / GitHub Pages). */
const ResumeDownload = ({
  primary = true,
  children = "Download Resume",
}: Props) => {
  return (
    <a
      href={RESUME_PDF_URL}
      download={RESUME_FILENAME}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button primary={primary}>{children}</Button>
    </a>
  );
};

export default ResumeDownload;
