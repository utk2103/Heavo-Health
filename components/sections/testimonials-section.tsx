"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Anuj Pathak",
    role: "Diabetes Patient",
    quote:
      "MedFact completely changed my life. The AI assistant helped me understand my condition better than any doctor visit.",
    rating: 5,
    image: "/teams/Anuj Pathak.jpg",
  },
  {
    name: "Dr. Mridula Bhargava",
    role: "Health Enthusiast",
    quote:
      "The progress tracking features are incredible. I can finally see concrete improvements in my health metrics.",
    rating: 5,
    image: "/teams/Mridula.png",
  },
  {
    name: "Mr. Arun Satija",
    role: "Diabetes Reversal Program",
    quote: "After 3 months with MedFact, I reduced my insulin dependency by 40%. This is life-changing!",
    rating: 5,
    image: "/teams/Arun Satija.jpg",
  },
  {
    name: "Mr. Abhishek Pathak",
    role: "Tech Professional",
    quote:
      "Finally, healthcare meets modern technology. The AI insights are spot-on and the community support is amazing.",
    rating: 5,
    image: "/teams/Abhishek Pathak.jpg",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      let next = prev + newDirection
      if (next < 0) next = testimonials.length - 1
      if (next >= testimonials.length) next = 0
      return next
    })
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">Real stories from people transforming their health.</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 shadow-2xl shadow-primary/20 p-10 md:p-16 rounded-3xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="text-7xl mb-8 transform hover:scale-110 transition-transform duration-300">
                  <div className="w-72 h-72 rounded-full bg-primary-foreground flex items-center justify-center shadow">
                      <Image
                        src={testimonials[current].image}
                        width={120}
                        height={120}
                        alt="Testimonial image"
                        className="object-cover"
/>                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-foreground mb-8 font-medium leading-relaxed max-w-2xl">
                  "{testimonials[current].quote}"
                </p>

                {/* Author */}
                <div>
                  <p className="text-lg font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => slide(-1)}
              className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 p-3 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`rounded-full transition-all ${
                    i === current ? "bg-primary w-8 h-3" : "bg-border w-3 h-3 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => slide(1)}
              className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 p-3 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
