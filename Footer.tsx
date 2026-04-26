import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Founder", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("relative z-10 mt-24 border-t border-white/10", className)}>
      <div className="container py-10 sm:py-14">
        <div className="panel-surface rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_0.7fr]">
            <div className="space-y-5">
              <span className="eyebrow">AI WALLAH</span>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-[-0.07em] text-foreground sm:text-4xl">
                  Don't just add AI. Multiply your output.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  We help Indian SMEs put AI inside their daily workflow — built around how their business actually runs, not a generic template.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Navigate</p>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">What we do</p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>We sit with the business owner, map their daily workflow, and find where AI can actually save time or money.</p>
                <p>Then we build and integrate the system end-to-end, customised to how they already work.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Based in NITK Suratkal, India</p>
            <p>{year} AI WALLAH / Akshat Gupta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
