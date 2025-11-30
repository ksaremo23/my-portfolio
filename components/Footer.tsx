"use client";

import { Github, Linkedin, Facebook } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card border border-border hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-foreground/70 hover:text-purple-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Info
            </h3>
            <p className="text-sm text-foreground/70 mb-2">
              Front-End Developer & AI Automation Specialist
            </p>
            <p className="text-sm text-foreground/70">
              Helping businesses grow with modern web development and AI
              solutions
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Leicsha Karen Saremo. All rights
            reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Built with{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

