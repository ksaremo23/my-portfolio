"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ResumeBuilderCaseStudy() {
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
              Case Study: Resume Builder
            </h1>
          </div>
          <p className="text-lg text-foreground/70 mb-6">
            Dynamic Resume Creator
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://resume-builder-psi-sandy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
            <a
              href="https://github.com/ksaremo23/resume-builder"
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
              alt="Resume Builder"
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
              Full-Stack Developer
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
              The Resume Builder is a web app that lets users create professional resumes quickly and efficiently. It&apos;s designed to simplify the resume creation process, guiding users through inputs and generating formatted output that&apos;s easy to download and share.
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
              Many job seekers struggle with formatting, designing, and articulating professional resumes — especially in a way that meets modern ATS and recruiter expectations. AI and templates help reduce friction, but many tools are either too complex or too generic.
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
              Developed a step-by-step resume builder web application that:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Collects user inputs for sections like experience, education, skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Provides real-time visual feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Outputs clean formatted resumes (PDF/HTML)</span>
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
                "Multi-section input forms",
                "Real-time preview",
                "Downloadable resume output",
                "Template & customization options",
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
              <p><strong className="text-foreground">Framework:</strong> Next.js / React</p>
              <p><strong className="text-foreground">Styling:</strong> Tailwind CSS / custom CSS</p>
              <p><strong className="text-foreground">PDF Generation:</strong> html2canvas, jsPDF</p>
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
                <span>Simplifies resume creation for users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Enhances consistency, formatting, and professionalism</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Saves users time compared with manual formatting</span>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

