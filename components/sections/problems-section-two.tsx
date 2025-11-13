"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const items = [
  {
    img: "/ai-healthcare.png",
    title: "Lifestyle changes are easy to start, hard to sustain",
    desc: "Support between doctor visits is minimal, leading to poor outcomes",
  },
  {
    img: "/diabetes-health.jpg",
    title: "Doctors have limited time per patient",
    desc: "Personalised care is nearly impossible when consults last just a few minutes",
  },
  {
    img: "/heart-health-nutrition.jpg",
    title: "Legacy digital therapeutics are expensive",
    desc: "They rely on costly human support. Less than 1% of diabetics adopt such solutions.",
  },
]

export default function ProblemsSectionTwo() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            For most diabetics,{" "}
            <span className="text-primary">care ends when the appointment does</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-primary-foreground rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 text-[15px] leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
