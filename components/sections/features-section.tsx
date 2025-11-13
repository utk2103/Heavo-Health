"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const items = [
    {
      title: "Legacy digital therapeutic (DTx) solutions remain expensive",
      desc: "AI eliminates the need for human intervention, reducing costs by 80–90%",
      img: "/female-doctor-professional.jpg",
    },
    {
      title: "Consumers are ready for AI-driven healthcare",
      desc: "65%* of Indian consumers who use e-commerce accept digital health tools",
      img: "/male-product-professional.jpg",
    },
    {
      title: "Explosion of affordable sensors and wearables",
      desc: "Affordable smart devices enable seamless, AI-driven health tracking",
      img: "/mental-physical-health.jpg",
    },
    {
      title: "LLM breakthroughs and cheap edge AI",
      desc: "Accessible compute is making large-scale, AI-driven personalised care affordable.",
      img: "/male-tech-professional.jpg",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Curved dotted circle background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-40 pointer-events-none">
        <div className="w-[1200px] h-[1200px] border-2 border-dotted border-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Headings */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-4"
        >
          What Makes HeavoHealth Different
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-black leading-snug"
        >
          AI + Chronic Care = <span className="text-primary">The Perfect Moment</span>
        </motion.h3>

        <p className="text-center text-gray-600 text-lg mt-2 mb-16">
          for affordable, AI-driven personalised care at scale
        </p>

        {/* Alternating two-column content */}
        <div className="space-y-10 md:space-y-16">
          {items.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                // On mobile: column (text above icon). On md: alternate row vs row-reverse
                className={`flex flex-col items-center gap-6 md:gap-12 md:items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text block */}
                <div className={`max-w-lg md:w-1/2 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <h4 className="text-primary font-bold text-xl md:text-2xl leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-gray-700 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Icon bubble */}
                <div className="flex-shrink-0 md:w-1/2 flex justify-center bg-[]">
                  <div className="w-72 h-72 rounded-full bg-primary-foreground flex items-center justify-center shadow">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
