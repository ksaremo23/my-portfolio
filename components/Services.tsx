"use client";

import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  BarChart3,
  Zap,
  Image,
  Code2,
} from "lucide-react";

const services = [
  {
    category: "AI Content & Marketing",
    icon: FileText,
    items: [
      "AI blog/article generator",
      "AI social media automation",
      "AI SEO optimization tools",
      "Content repurposing",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "AI Customer Support & Sales",
    icon: MessageSquare,
    items: [
      "AI appointment setter",
      "AI chatbot",
      "Automated FAQ support",
      "Lead qualification bots",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "AI Analytics & Data",
    icon: BarChart3,
    items: [
      "AI dashboards",
      "Customer insights",
      "Report automation",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "AI Automation",
    icon: Zap,
    items: [
      "CRM automations",
      "Workflow automation",
      "Email automation",
      "API integration",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "AI Media (Images, Video, Voice)",
    icon: Image,
    items: [
      "AI video generation",
      "AI image generation",
      "Product mockups",
      "Voiceovers",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Web Development",
    icon: Code2,
    items: [
      "Next.js websites",
      "Landing pages",
      "Business websites",
      "React apps",
      "API integration",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4"
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4 text-white">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive AI solutions and web development services to help
            your business grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-lg bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-foreground/70 flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

