"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Business Owner",
    content:
      "Leicsha delivered an exceptional website that perfectly captured our brand. The AI automation she set up has saved us hours every week!",
    rating: 5,
  },
  {
    name: "Colleague Name",
    role: "Former Team Member",
    content:
      "Working with Leicsha was a pleasure. Her attention to detail and problem-solving skills are outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mentor Name",
    role: "Bootcamp Instructor",
    content:
      "Leicsha shows great dedication to learning and implementing new technologies. Her portfolio demonstrates strong technical skills.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-purple-500/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-foreground/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

