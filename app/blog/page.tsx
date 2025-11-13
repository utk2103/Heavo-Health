"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Proven Ways to Reverse Type 2 Diabetes",
    excerpt:
      "Discover science-backed strategies that have helped thousands transform their health and reverse diabetes naturally.",
    date: "March 15, 2024",
    author: "Dr. Sarah Chen",
    category: "Health Tips",
    image: "/diabetes-health.jpg",
  },
  {
    id: 2,
    title: "The Role of AI in Personalized Healthcare",
    excerpt:
      "Explore how artificial intelligence is revolutionizing personalized medicine and improving patient outcomes.",
    date: "March 10, 2024",
    author: "Dr. James Wilson",
    category: "Technology",
    image: "/ai-healthcare.png",
  },
  {
    id: 3,
    title: "Nutrition Guide for Heart Health",
    excerpt:
      "Learn about the best foods and dietary patterns to maintain optimal cardiovascular health and prevent heart disease.",
    date: "March 5, 2024",
    author: "Dr. Emma Rodriguez",
    category: "Nutrition",
    image: "/heart-health-nutrition.jpg",
  },
  {
    id: 4,
    title: "Mental Health and Physical Wellness Connection",
    excerpt:
      "Understanding the deep connection between mental well-being and physical health, and how to optimize both.",
    date: "February 28, 2024",
    author: "Dr. Michael Zhang",
    category: "Wellness",
    image: "/mental-physical-health.jpg",
  },
  {
    id: 5,
    title: "Sleep Quality: The Missing Piece of Health",
    excerpt: "Why quality sleep is crucial for health and practical tips to improve your sleep patterns.",
    date: "February 20, 2024",
    author: "Dr. Lisa Anderson",
    category: "Sleep",
    image: "/sleep-health.jpg",
  },
  {
    id: 6,
    title: "Exercise and Longevity: What Science Says",
    excerpt: "New research on how regular physical activity extends lifespan and improves quality of life.",
    date: "February 15, 2024",
    author: "Dr. Robert Johnson",
    category: "Fitness",
    image: "/exercise-longevity.jpg",
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

export default function BlogPage() {
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
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 px-4 py-2 rounded-full">
              <p className="text-sm font-semibold text-primary">Health & Wellness Insights</p>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              MedFact Blog
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay informed with expert health insights, wellness tips, and the latest in healthcare technology
          </motion.p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
