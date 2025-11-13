"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Utkarsh Dwivedi",
    role: "Founder & CEO",
    bio: "",
    image: "/teams/Utkarsh Dwivedi.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Utkarsh Upadhyay",
    role: "Co-Founder & CTO",
    bio: "Former tech entrepreneur with passion for healthcare",
    image: "/teams/Utkarsh Upadhyay.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Dr. Anuj Pathak",
    role: "Director & Product Lead",
    bio: "PhD in AI/ML with 10+ years in medical research",
    image: "/teams/Anuj Pathak.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Dr. Mridula Bhargava",
    role: "Advisor",
    bio: "Full-stack engineer, leading healthcare technology innovation",
    image: "/teams/Mridula.png",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 5,
    name: "Mr. Arun Satija",
    role: "Technical Mentor",
    bio: "20+ years in clinical trials and medical research",
    image: "/teams/Arun Satija.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 6,
    name: "Mr. Abhishek Pathak",
    role: "AI/ML Researcher & Advisor",
    bio: "Design-focused product leader from top tech companies",
    image: "/teams/Abhishek Pathak.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 7,
    name: "Dr. Indu Sharma",
    role: "Regulatory Advisor",
    bio: "Design-focused product leader from top tech companies",
    image: "/teams/Indu Sharma.jpg",
    socials: { linkedin: "#", twitter: "#" },
  }
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

export default function TeamPage() {
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
              Meet Our Team
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated healthcare professionals and technologists working together to transform medicine
          </motion.p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>

                  <div className="flex items-center gap-3">
                    <Link
                      href={member.socials.linkedin}
                      className="p-2 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      <Linkedin size={16} className="text-primary" />
                    </Link>
                    <Link
                      href={member.socials.twitter}
                      className="p-2 backdrop-blur-lg bg-white/60 dark:bg-slate-950/60 border border-white/20 dark:border-white/10 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      <Twitter size={16} className="text-primary" />
                    </Link>
                  </div>
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
