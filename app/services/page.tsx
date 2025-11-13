"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Heart, Brain, BarChart3, Zap, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Health Assistant",
    description:
      "Your personal AI-powered health coach available 24/7 to answer your health questions and provide personalized guidance.",
    features: [
      "Real-time health monitoring",
      "Personalized recommendations",
      "Natural language interface",
      "Instant health insights",
    ],
  },
  {
    icon: Heart,
    title: "Diabetes Reversal Program",
    description: "Evidence-based program designed to help reverse type 2 diabetes through AI-guided lifestyle changes.",
    features: ["Personalized meal plans", "Exercise tracking", "Blood sugar monitoring", "Professional support"],
  },
  {
    icon: BarChart3,
    title: "Health Analytics",
    description: "Deep insights into your health patterns with predictive analytics to prevent future health issues.",
    features: ["Health trend analysis", "Risk assessment", "Progress tracking", "Data visualization"],
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive health management to prevent chronic diseases before they develop.",
    features: ["Disease prediction", "Early warning signs", "Prevention strategies", "Lifestyle coaching"],
  },
]

const additionalServices = [
  {
    icon: Zap,
    title: "Instant Consultations",
    description: "Connect with health experts within minutes for personalized advice",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always available when you need health guidance, day or night",
  },
]

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 px-4 py-2 rounded-full">
              <p className="text-sm font-semibold text-primary">Comprehensive Health Solutions</p>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our AI-powered health solutions can transform your wellness journey
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Services */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-xl p-6 text-center"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
