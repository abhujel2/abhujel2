"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

const programmingSkills = ["C/C++", "Python", "Visual C#"]

const databaseSkills = ["MySQL", "MongoDB"]

const networkingSkills = ["Network Configuration", "IP Addressing & VLANs", "Firewalls & Security", "TCP/IP"]

const embeddedSkills = ["Microcontroller Programming", "Embedded C", "IoT Device Integration"]

const otherSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork/Collaboration",
  "Adaptability",
  "Leadership",
  "Critical Thinking",
  "Time Management",
]

const tools = [
  "Circuit Simulators",
  "Wireshark",
  "Network Monitoring Tools",
  "Remote Desktop Tools",
  "FileZilla",
  "Autodesk Fusion 360",
  "VMware",
  "Kali Linux",
  "Raspberry Pi",
  "VPN",
  "Active Directory",
  "VoIP",
]

const hardwareSkills = ["Hardware Troubleshooting", "Circuit Design", "PCB Design", "Embedded Systems Testing"]

const operatingSystems = ["Linux", "Windows", "macOS"]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
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
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Technical Skills" subtitle="My expertise and capabilities" />

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-10"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Programming Languages</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programmingSkills.map((skill, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Database Management</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {databaseSkills.map((skill, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Networking & IT Infrastructure</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {networkingSkills.map((skill, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Embedded Systems</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {embeddedSkills.map((skill, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Soft Skills</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {otherSkills.map((skill, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Tools & Technologies</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tools.map((tool, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{tool}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Hardware & Software Diagnostics</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hardwareSkills.map((skill, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Operating Systems</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {operatingSystems.map((os, index) => (
                      <motion.div key={index} className="flex items-center gap-2" variants={itemVariants}>
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{os}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}

