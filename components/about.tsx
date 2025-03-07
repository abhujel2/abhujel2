"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Code, Server, Shield, Zap, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

const features = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Software Development",
    description: "Proficient in C, C++, Python, and C# with experience building various applications and systems.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "IT Infrastructure",
    description: "Experienced in setting up and managing network infrastructure, server rooms, and PC builds.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Network Security",
    description: "Skilled in implementing IT security measures, configuring firewalls, and securing networks.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Database Management",
    description: "Expertise in MySQL and MongoDB for efficient data storage, retrieval, and management.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Problem Solving",
    description: "Adept at troubleshooting complex technical issues and developing efficient solutions.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Academic Excellence",
    description: "Recognized on the President's Honour List for maintaining a 4.0 GPA at Seneca Polytechnic.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            ref={ref}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Who I Am</h3>
            <div className="space-y-4 text-lg">
              <p>
                Hi, I'm Aayush Bhujel, a detail-oriented and results-driven Computer Engineering Technology student at
                Seneca Polytechnic with a passion for IT infrastructure, software development, and game development.
              </p>
              <p>
                I specialize in C, C++, Python, and C# programming, with experience in database technologies like MySQL
                and MongoDB. My technical expertise spans network management, IT security, embedded systems, and
                troubleshooting complex hardware/software issues. I've worked on various projects, including motion
                detection systems, automated farming solutions, and student database management systems, showcasing my
                ability to integrate hardware and software to create innovative solutions.
              </p>
              <p>
                Beyond IT and software engineering, I'm passionate about game development. I'm currently learning and
                leveraging my skills in C# with Unity and C++ with Unreal Engine to build interactive and immersive
                experiences. My goal is to blend my technical knowledge with creativity to develop high-performance
                games and applications.
              </p>
              <p>
                I am always eager to explore new technologies and collaborate on exciting projects. Whether it's
                developing software, optimizing IT systems, or creating immersive gaming experiences, I'm ready to take
                on new challenges and innovate.
              </p>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Contact</h4>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:abhujel2@myseneca.ca"
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      abhujel2@myseneca.ca
                    </a>
                    <a href="tel:+14372632377" className="hover:text-primary transition-colors mt-1">
                      (437) 263-2377
                    </a>
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Location</h4>
                  <p className="text-muted-foreground">
                    Toronto, Ontario
                    <br />
                    Canada
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-primary/50 h-full">
      <CardContent className="p-6">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

