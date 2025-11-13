"use client"

import { motion } from "framer-motion"
import { Users, Activity, BookOpen, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Lab Diagnostics",
    description:
      "Comprehensive health monitoring with regular lab tests. Track your progress through data-driven insights and glucose metrics improvements.",
  },
  {
    icon: Users,
    title: "Expert Consultations",
    description:
      "Connect with certified doctors and dieticians. Get personalized guidance from medical professionals who understand your diabetes journey.",
  },
  {
    icon: BookOpen,
    title: "Personalized Diet Plans",
    description:
      "Science-backed nutrition plans tailored to your lifestyle. Learn what works for your body and how to sustain long-term health.",
  },
  {
    icon: TrendingUp,
    title: "Community Support",
    description:
      "Join our thriving WhatsApp community. Share experiences, get motivation, and celebrate wins with 1000+ members on the same journey.",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Makes HeavoHealth{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete diabetes care through our integrated subscription model. One platform for all your health needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={featureVariants}
                className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:border-white/30 dark:hover:border-white/20 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
