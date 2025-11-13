"use client"

import { motion } from "framer-motion"
import { Activity, Pill, TrendingDown, Users } from "lucide-react"

const problems = [
  {
    icon: Pill,
    title: "Insulin Dependency",
    description:
      "Breaking free from daily insulin injections and managing dosages becomes easier with personalized guidance.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: TrendingDown,
    title: "Blood Sugar Control",
    description:
      "Monitor and maintain stable glucose levels through AI-powered insights and real-time recommendations.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Activity,
    title: "Lifestyle Management",
    description: "Get personalized diet plans, exercise routines, and wellness tracking tailored to your needs.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others on their health journey and share experiences in our supportive community.",
    color: "from-blue-400 to-purple-500",
  },
]

export default function ProblemsSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: { y: -10, transition: { duration: 0.3 } },
  }

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-10 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Challenges Faced
            </span>{" "}
            by Diabetes Patients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the complexities of diabetes management. Our solutions address real-world challenges.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, i) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 shadow-xl shadow-primary/10 dark:shadow-primary/20 p-8 rounded-2xl cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-full blur-3xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
