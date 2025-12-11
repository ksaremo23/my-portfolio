"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CodeNovaCaseStudy() {
  return (
    <main className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⭐</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Case Study: CodeNova AI
            </h1>
          </div>
          <p className="text-lg text-foreground/70 mb-6">
            AI Agency Portfolio
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://codenova-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
            <a
              href="https://github.com/ksaremo23/codenova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-purple-500/50 text-foreground rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-lg overflow-hidden border border-border"
        >
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
              alt="CodeNova AI"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Role */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              📌 Role
            </h2>
            <p className="text-foreground/80">
              Front-End Developer | UI/UX Designer | Full-Stack Contributor
            </p>
          </motion.section>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              📌 Overview
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              CodeNova AI is a clean, modern portfolio site showcasing an AI agency's services and offerings. It acts as a business presentation platform highlighting core services like AI automation, chatbot solutions, CRM tools, and development support.
            </p>
          </motion.section>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              🔍 Problem
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              AI service providers often lack a clear, professional web presence that communicates expertise, services, and value propositions effectively — especially for tech audiences and business clients.
            </p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              🛠 Solution
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              I built a responsive, visually engaging site using Next.js and Vercel to deliver:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>A modern landing experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Clear service presentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Fast loading and SEO-ready pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Scalable architecture for future additions (e.g., blog, contact forms)</span>
              </li>
            </ul>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              📋 Features
            </h2>
            <ul className="space-y-3">
              {[
                "Clean, responsive layout",
                "Service sections with concise descriptions",
                "Contact and call-to-action elements",
                "Optimized for performance and mobile devices",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              🧠 Tech Stack
            </h2>
            <div className="space-y-2 text-foreground/80">
              <p><strong className="text-foreground">Framework:</strong> Next.js</p>
              <p><strong className="text-foreground">Deployment:</strong> Vercel</p>
              <p><strong className="text-foreground">Design/Styling:</strong> Tailwind CSS</p>
            </div>
          </motion.section>

          {/* Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="pb-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              📈 Impact
            </h2>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Established a professional digital presence for the AI agency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Improves discovery and credibility with potential clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Scalable foundation enables future growth (e.g., analytics, case studies)</span>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

