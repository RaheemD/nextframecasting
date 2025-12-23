import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/submit-profile", label: "Submit Profile" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">NEXT FRAME</h3>
              <p className="text-xs tracking-[0.2em] text-primary-foreground/70 uppercase">
                Casting
              </p>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Casting & talent coordination support for films, ads, digital content & OTT platforms.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:castingnextframe@gmail.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                castingnextframe@gmail.com
              </a>
              <a
                href="https://www.instagram.com/nextframe.casting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                @nextframe.casting
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/60 text-center">
            © {currentYear} Next Frame Casting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
