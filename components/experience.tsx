"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

const experiences = [
  {
    title: "Senior Operations Associate",
    company: "Al Premium Foods",
    period: "Jan 2024 - Present",
    description: [
      "Optimized workflow efficiency by leading and mentoring a team, managing schedules, and overseeing daily operations to ensure seamless processes.",
      "Collaborated with management to implement strategic initiatives and resolve operational challenges, improving overall efficiency by 15%.",
      "Maintained high standards of quality control and compliance with company policies, reducing errors by 10% and enhancing overall performance.",
      "Trained and supported team members, fostering a productive work environment and improving overall team effectiveness.",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />

        <div className="mt-16 max-w-4xl mx-auto" ref={ref}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}

function ExperienceCard({ experience }) {
  return (
    <Card className="mb-8 overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">{experience.title}</h3>
              <h4 className="text-xl font-medium">{experience.company}</h4>
            </div>
            <div className="flex items-center mt-2 md:mt-0 text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{experience.period}</span>
            </div>
          </div>

          <ul className="space-y-3 mt-6">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                className="flex"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="ml-2">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

