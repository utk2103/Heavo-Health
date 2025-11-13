"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Lightbulb } from "lucide-react"

export default function ComingSoonSection() {
  const upcomingFeatures = [
    { icon: Zap, title: "Faster AI Responses", description: "Lightning-quick health insights powered by next-gen AI" },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Hyper-personalized health plans based on your data",
    },
    {
      icon: Sparkles,
      title: "Advanced Analytics",
      description: "Deep dive into your health trends with predictive insights",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 shadow-xl shadow-primary/10 dark:shadow-primary/20 p-12 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 rounded-3xl animate-glow-pulse" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="relative z-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-lg shadow-primary/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Exciting New Tools Coming Soon
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              We're working on revolutionary features that will transform how you manage your health. Stay tuned for
              something truly special.
            </p>

            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground font-semibold">Building the future...</span>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
