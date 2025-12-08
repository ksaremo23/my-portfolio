"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Codenova — AI Agency Website",
    description:
      "Modern AI agency website showcasing services and capabilities with interactive elements.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    liveUrl: "https://codenova-six.vercel.app/",
    codeUrl: "https://github.com/ksaremo23/codenova",
  },
  {
    title: "Resume Builder",
    description:
      "Modern web application for creating professional resumes with real-time preview and export functionality.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    liveUrl: "https://resume-builder-psi-sandy.vercel.app/",
    codeUrl: "https://github.com/ksaremo23/resume-builder",
  },
  {
    title: "Appointment Setter AI Bot",
    description:
      "Intelligent AI bot that automates appointment scheduling and customer interactions.",
    tech: ["OpenAI", "Node.js", "React", "API Integration"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Next.js Landing Page",
    description:
      "High-performance landing page for local business with SEO optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AI Content Generator Web App",
    description:
      "Web application that generates high-quality content using AI for blogs and social media.",
    tech: ["React", "OpenAI API", "Vercel AI SDK", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Property Listing Website",
    description:
      "Airbnb-style property listing platform with search, filters, and booking features.",
    tech: ["Next.js", "React", "TypeScript", "API Integration"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development and
            AI automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x400/1a1a2e/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-background border border-border text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

