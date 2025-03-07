"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Cursor from "@/components/cursor"
import ParticleBackground from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/scroll-progress"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Cursor />
      <Toaster />
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className="text-center"
            >
              <motion.div
                className="w-24 h-24 border-t-4 border-primary rounded-full mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.h1
                className="text-2xl font-bold"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Loading Portfolio
              </motion.h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <ParticleBackground />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

