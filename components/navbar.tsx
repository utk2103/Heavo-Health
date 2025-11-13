"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 dark:bg-slate-950/70 border-b border-white/20 dark:border-white/10 shadow-lg py-3"
          : "py-6"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="w-25 h-25 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
          <Image
            src="/android-chrome-512x512.png"    
            alt="HeavoHealth logo"
            width={70}
            height={70}
            priority={false}
            style={{ objectFit: "cover" }}
          />
          <span className="text-2xl ml-4 font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hidden sm:inline">
            Heavo Health
          </span>
      </div>
          

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5">
              Solutions <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-0 w-56 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
              <div className="p-4">
                <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">Services</p>
                <Link
                  href="/services"
                  className="block px-3 py-2 rounded-lg hover:bg-primary/10 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  AI Health Assistant
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-2 rounded-lg hover:bg-primary/10 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Diabetes Reversal Program
                </Link>
                <hr className="my-3 border-border" />
                <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Products</p>
                <button className="w-full px-3 py-2 rounded-lg bg-muted/50 text-sm font-medium text-muted-foreground cursor-not-allowed opacity-60">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          <Link
            href="/blog"
            className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
          >
            About Us
          </Link>
          <Link
            href="/team"
            className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
          >
            Team
          </Link>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/60 transition-shadow"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  )
}
