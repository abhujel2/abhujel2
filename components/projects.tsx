"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Shield, Database, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeading from "@/components/section-heading"

const projects = [
  {
    id: 1,
    title: "Burglar Alarm System",
    description:
      "Developed a Python-based motion detection system with ultrasonic and PIR sensors for real-time monitoring. Integrated buzzer, LCD screen, and control button for user notifications and alarm deactivation. Enhanced security and user experience by providing immediate alerts and easy alarm control.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "IoT", "Sensors", "Security"],
    category: "iot",
    icon: <Shield className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "Automated Farming System",
    description:
      "Developed an automated farming system using C to monitor temperature, light, and time of day with sensors, promoting sustainable farming practices. Programmed the system to automatically control ventilation fans and lights based on environmental data, optimizing energy use while maintaining ideal growth conditions. Contributed to sustainability by reducing energy consumption and ensuring resource-efficient farming, supporting eco-friendly agricultural practices.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["C", "IoT", "Automation", "Sustainability"],
    category: "iot",
    icon: <Code className="h-10 w-10" />,
  },
  {
    id: 3,
    title: "Student Database Management System",
    description:
      "Developed a student database management system in C++ to manage student records (personal details, grades, course enrollment). Implemented search, update, and delete functionalities for seamless database interaction. Enhanced data organization and reduced manual errors, improving record management efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["C++", "Database", "Data Management"],
    category: "software",
    icon: <Database className="h-10 w-10" />,
  },
  {
    id: 4,
    title: "PC Build Setup and Server Room Setup",
    description:
      "Designed and documented a custom PC build setup for a client, selecting appropriate hardware and configuring the system for optimal performance. Developed a comprehensive plan for setting up a server room for a building, ensuring efficient network infrastructure, cooling, and security measures. Focused on system performance, scalability, and reliability, providing a structured approach to meet customer and organizational needs.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Hardware", "Networking", "Infrastructure", "Server"],
    category: "infrastructure",
    icon: <Code className="h-10 w-10" />,
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Projects" subtitle="Showcasing my technical skills" />

        <div className="mt-16" ref={ref}>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger
                  value="all"
                  onClick={() => setActiveTab("all")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="software"
                  onClick={() => setActiveTab("software")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Software
                </TabsTrigger>
                <TabsTrigger
                  value="iot"
                  onClick={() => setActiveTab("iot")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  IoT
                </TabsTrigger>
                <TabsTrigger
                  value="infrastructure"
                  onClick={() => setActiveTab("infrastructure")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Infrastructure
                </TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <TabsContent value={activeTab} className="mt-0">
                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}

function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Card className="overflow-hidden h-full group hover:shadow-lg transition-all duration-300 hover:border-primary/50 flex flex-col">
        <div className="relative h-48 overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
            <div className="p-6 rounded-full bg-background/80 text-primary transform group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </div>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

          <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

