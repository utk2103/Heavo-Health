"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      opacity: number
    }> = []

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = `rgba(104, 28, 176, 0.1)`

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(104, 28, 176, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()

        particles.forEach((p2, j) => {
          if (i < j) {
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.strokeStyle = `rgba(104, 28, 176, ${0.1 * (1 - distance / 100)})`
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-8">
          <div className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 px-4 py-2 rounded-full hover:border-white/40 transition-colors">
            <p className="text-sm font-semibold flex items-center gap-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              <TrendingUp size={16} />
              Reverse Your Health Journey
            </p>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Simplifying Diabetes,
          </span>
          <br />
          <span className="text-foreground">Care for Everyone</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          Your daily companion for simpler, smarter, and more accesible diabetes care
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 shadow-xl shadow-primary/10 dark:shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 px-8 py-4 rounded-full font-semibold text-primary hover:text-primary/80 transition-all flex items-center gap-2 group"
          >
            Explore Programs
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/40 hover:shadow-primary/70 transition-shadow"
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 p-8 rounded-2xl max-w-lg mx-auto shadow-xl shadow-primary/10 dark:shadow-primary/20"
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3 font-semibold">Your Health Progress</p>
              <div className="w-full bg-primary/10 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full w-3/4 shadow-lg shadow-primary/30" />
              </div>
            </div>
            <div className="pt-2 border-t border-white/10">
              <p className="text-xs text-muted-foreground font-medium">Join 1000+ members on their reversal journey</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
