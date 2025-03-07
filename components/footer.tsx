"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold">Aayush Bhujel</h3>
            <p className="text-muted-foreground mt-2">Computer Engineering Technology</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-6 md:mb-0"
          >
            <a
              href="https://github.com/abhujel2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-bhujel-144462288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:abhujel2@myseneca.ca" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="tel:+14372632377" className="hover:text-primary transition-colors" aria-label="Phone">
              <Phone className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <nav className="flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-muted-foreground"
        >
          <p>&copy; {currentYear} Aayush Bhujel. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </footer>
  )
}

