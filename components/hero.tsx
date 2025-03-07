"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 pt-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Computer Engineering Technology
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="text-primary relative">
              Aayush Bhujel
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Embedded Software Engineer",
                2000,
                "IT Support Specialist",
                2000,
                "Network Administrator",
                2000,
                "Systems Administrator",
                2000,
                "IT Help Desk Technician",
                2000,
                "Cybersecurity Analyst",
                2000,
                "Technical Support Engineer",
                2000,
                "Field Service Technician",
                2000,
                "Hardware Engineer",
                2000,
                "IT Lab Technician",
                2000,
                "Electronics Lab Technician",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            I'm Aayush Bhujel, a Computer Engineering Technology student at Seneca Polytechnic with a strong background
            in IT infrastructure, networking, and software development. I specialize in programming with C, C++, Python,
            and C#, and I have hands-on experience in database management, embedded systems, and cybersecurity.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Button size="lg" onClick={scrollToAbout} className="group">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/abhujel2" target="_blank" rel="noopener noreferrer" className="group">
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/aayush-bhujel-144462288/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="mailto:abhujel2@myseneca.ca" className="group">
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Email Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Available for opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[400px] lg:h-[500px] order-first lg:order-last flex items-center justify-center"
        >
          <motion.div
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <img
              src="https://mighty.tools/mockmind-api/content/handdrawn/26.jpg"
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

