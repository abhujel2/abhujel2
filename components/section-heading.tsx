"use client"

import { motion } from "framer-motion"

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-muted-foreground mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

