"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "💨" },
      { name: "TypeScript", icon: "📘" },
    ],
  },
  {
    category: "AI / Automation",
    items: [
      { name: "OpenAI", icon: "🤖" },
      { name: "Zapier", icon: "⚙️" },
      { name: "Make", icon: "🔧" },
      { name: "Vercel AI SDK", icon: "🚀" },
      { name: "LangChain", icon: "🔗" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Figma", icon: "🎭" },
      { name: "Postman", icon: "📮" },
    ],
  },
  {
    category: "Backend (Basic)",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "REST APIs", icon: "🌐" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
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
          <h2 className="heading mb-4 text-white">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-foreground/80 font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

