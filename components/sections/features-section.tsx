"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const items = [
    {
      title: "We walk with you every day",
      desc: "Managing diabetes can feel overwhelming, but you’re not alone. Our care adapts to your needs, guiding you gently through every step.",
      img: "/icons/walking.svg",
    },
    {
      title: "Your journey, your rhythm",
      desc: "Life doesn’t pause for diabetes, and neither should your care. Plans and insights adjust to your pace, making healthy choices simple and realistic.",
      img: "/icons/rock.svg",
    },
    {
      title: "Effortless, everyday monitoring",
      desc: "Track your health seamlessly with smart tools that keep you informed without adding stress to your routine.",
      img: "/icons/effortless.svg",
    },
    {
      title: "Support that truly cares",
      desc: "Comprehensive, approachable guidance helps you feel confident, empowered, and in control-without the complexity or high costs.",
      img: "/icons/support.svg",
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
        <div className="space-y-10 md:space-y-16 grid grid-cols-2 ">
  {items.map((item, index) => {
    const isEven = index % 2 === 0

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
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

        {/* Icon bubble - explicit sizes so image shows correctly */}
        <div className="flex-shrink-0 md:w-1/2 flex justify-center items-center">
          <div
            className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#f3f4f6] flex items-center justify-center shadow-lg"
            // optional: add border to match design
          >
            <Image
              src={item.img.startsWith("/") ? item.img : `/${item.img}`} // ensure leading slash
              alt={item.title}
              width={96} // controls intrinsic size for Next/Image
              height={96}
              className="object-contain w-12 h-12 md:w-20 md:h-20"
              priority={false}
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
