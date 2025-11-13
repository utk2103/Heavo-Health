"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

const values = [
  {
    title: "Innovation",
    description: "Leveraging cutting-edge AI technology to create breakthrough health solutions",
  },
  {
    title: "Empowerment",
    description: "Putting health control directly in the hands of patients",
  },
  {
    title: "Excellence",
    description: "Maintaining highest standards in healthcare delivery and research",
  },
  {
    title: "Compassion",
    description: "Treating every patient with empathy and personalized care",
  },
]

const milestones = [
  { year: "2020", event: "Founded MedFact with vision to democratize healthcare" },
  { year: "2021", event: "Launched AI Health Assistant to 10,000+ users" },
  { year: "2022", event: "Diabetes Reversal Program shows 85% success rate" },
  { year: "2023", event: "Expanded to 50+ countries, 500,000+ active users" },
  { year: "2024", event: "Partnerships with leading health institutions worldwide" },
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About MedFact
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming healthcare through artificial intelligence and human-centered design
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MedFact was founded on a simple belief: everyone deserves access to world-class healthcare guidance,
                regardless of their location or socioeconomic status. Our founders, a team of physicians and AI experts,
                witnessed firsthand the challenges patients face in managing chronic diseases.
              </p>
              <p>
                Frustrated by the limitations of traditional healthcare systems, they set out to build something better.
                The result is MedFact—an AI-powered platform that combines medical expertise with cutting-edge
                technology to provide personalized health solutions.
              </p>
              <p>
                Today, MedFact is helping hundreds of thousands of people take control of their health, reverse chronic
                diseases, and live better lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">These core principles guide everything we do</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in MedFact's growth</p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-xl p-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-lg text-muted-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
