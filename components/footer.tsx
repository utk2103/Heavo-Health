"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // hii

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <motion.div
        className="max-w-6xl mx-auto px-6 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                MedFact
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming healthcare through AI. Empowering millions to take control of their health.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <div className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-lg p-3 flex items-center gap-2">
              <Mail size={16} className="text-muted-foreground" />
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder-muted-foreground"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Get health tips and updates</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© {currentYear} MedFact. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Link
              href="#"
              className="p-2 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Twitter size={18} className="text-primary" />
            </Link>
            <Link
              href="#"
              className="p-2 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Linkedin size={18} className="text-primary" />
            </Link>
            <Link
              href="#"
              className="p-2 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Github size={18} className="text-primary" />
            </Link>
            <Link
              href="#"
              className="p-2 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Mail size={18} className="text-primary" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
