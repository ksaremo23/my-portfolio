"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AIEmailWriterCaseStudy() {
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
              Case Study: AI Email Writer
            </h1>
          </div>
          <p className="text-lg text-foreground/70 mb-6">
            Smart Email Generator
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ai-email-writer-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
            <a
              href="https://github.com/ksaremo23/ai-email-writer"
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
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200"
              alt="AI Email Writer"
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
              Front-End Developer | AI Integration
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
              The AI Email Writer is a specialized tool that enables users to generate polished business emails in context-specific tones and scenarios — such as follow-ups, unhappy customer replies, cold outreach, and apologies. It uses interactive text input and AI generation to streamline email writing.
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
              Writing emails — especially professional or business emails — can be time-consuming and mentally taxing, requiring a balance of tone, clarity, and etiquette. Many lack templates or assistants to help generate good-fit messaging quickly.
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
              Built a responsive web app interface where users:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Choose an email scenario (e.g., invoice follow-up, apology, outreach)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Input key details (customer name, context)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Select tone (professional, friendly, apologetic, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Click "Generate Email" to receive AI-created copy</span>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              This supported users with contextual email drafts ready to edit or send.
            </p>
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
                "Scenario-based generation",
                "Tone control",
                "Dynamic summarization of details",
                "Copy-ready output area",
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
              <p><strong className="text-foreground">Frontend:</strong> React / Next.js</p>
              <p><strong className="text-foreground">AI Integration:</strong> Groq / external AI service</p>
              <p><strong className="text-foreground">Deployment:</strong> Vercel</p>
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
                <span>Reduces time spent drafting business emails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Helps users craft contextually relevant, polished text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Supports small business owners, freelancers, and professionals</span>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

