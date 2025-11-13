"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ProblemsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">1 in 6 Indians</span>{" "}
            <span className="text-black">live with diabetes</span>
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            99% of them manage diabetes with no structured support
          </p>
        </motion.div>

        {/* Image / Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Card 1 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-white rounded-2xl flex flex-col items-center justify-center shadow-[0_30px_60px_rgba(16,24,40,0.08)] border border-white">
              <div className="text-4xl md:text-5xl font-extrabold text-primary">100M</div>
              <div className="mt-3 text-sm text-gray-600 text-center">Diabetics in India</div>

              <div className="mt-4 text-3xl text-primary">+</div>

              <div className="mt-2 text-sm text-gray-600 text-center">100M Pre-diabetics in India</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-white rounded-2xl flex flex-col items-center justify-center shadow-[0_30px_60px_rgba(16,24,40,0.08)] border border-white">
              <div className="text-4xl md:text-5xl font-extrabold text-primary">66%+</div>
              <div className="mt-3 text-sm text-gray-600 text-center">
                patients have a very poor understanding of their diabetes
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-white rounded-2xl flex flex-col items-center justify-center shadow-[0_30px_60px_rgba(16,24,40,0.08)] border border-white">
              <div className="text-4xl md:text-5xl font-extrabold text-primary">&lt; 1</div>
              <div className="mt-3 text-sm text-gray-600 text-center">
                avg number of doctor visits per year
              </div>
              <div className="mt-2 text-xs text-gray-400 text-center">(1 visit is recommended every quarter)</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom rounded blue info banner */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <div className="mx-auto max-w-4xl rounded-full bg-primary-foreground/90 px-6 py-6 text-center shadow-lg border border-[#d7e6ff]">
            <p className="text-lg md:text-xl font-medium text-primary">
              Like most chronic conditions that demand lifestyle change, patients struggle with what to eat, how to stay active, track progress, stay motivated, stick to treatment and manage costs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
