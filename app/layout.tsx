import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HeavoHealth - Digital Diabetes & Pre-Diabetes Care Platform",
  description:
    "One-stop digital care platform for diabetes and pre-diabetes management. Subscriptions combining lab diagnostics, doctor consultations, diet plans, and community support.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
    icons: {
      icon: "/android-chrome-512x512.png", 
      shortcut: "/android-chrome-512x512.png",
      apple: "/android-chrome-512x512.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
