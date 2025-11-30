"use client";

import { motion } from "framer-motion";
import { Code, Zap, TrendingUp } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "2 Years at Accenture",
      description: "Software Engineer & Salesforce Admin experience",
    },
    {
      icon: Zap,
      title: "Strong UI Development",
      description: "Expert in React, JavaScript, and Tailwind CSS",
    },
    {
      icon: TrendingUp,
      title: "AI & Automation Focus",
      description: "Passionate about AI solutions and automation",
    },
  ];

  const services = [
    "Build websites",
    "Develop AI automations",
    "Provide AI content & marketing services",
    "Create custom AI chatbots",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Self-taught Front-End Developer with training from{" "}
              <span className="font-semibold text-purple-400">
                KodeGo, GoIT, Udemy
              </span>{" "}
              and experience at{" "}
              <span className="font-semibold text-blue-400">Accenture</span>.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">What I Do Now</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-purple-500/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                  <span className="text-foreground/80">{service}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-purple-500/20"
            >
              <p className="text-sm text-foreground/70 italic">
                &ldquo;Loves performance optimization and creating seamless user
                experiences&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

