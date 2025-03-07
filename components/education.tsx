"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education & Certificates" subtitle="My academic background" />

        <div className="mt-16 grid md:grid-cols-2 gap-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-primary">
              <GraduationCap className="mr-2 h-6 w-6" />
              Education
            </h3>

            <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Seneca Polytechnic</h4>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Fall 2024</span>
                  </div>
                </div>

                <p className="font-medium mb-2">Advanced Diploma - Computer Engineering Technology (ECT)</p>
                <p className="text-primary font-bold mb-4">GPA: 4.0</p>

                <h5 className="font-bold mb-2">Relevant coursework:</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Networking & Security</li>
                  <li>• Embedded Systems</li>
                  <li>• Database Management (MySQL, MongoDB)</li>
                  <li>• Software Development (C, C++, Python, C#)</li>
                  <li>• IT Infrastructure</li>
                  <li>• Microcontrollers</li>
                  <li>• Operating Systems</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center text-primary">
                  <Award className="mr-2 h-6 w-6" />
                  Awards
                </h3>

                <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">President's Honour List</h4>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Fall 2024, Winter 2024</span>
                    </div>

                    <p>
                      Nominated for exceptional academic achievement, maintaining a 4.0 GPA and demonstrating consistent
                      excellence in coursework during the Fall and Winter terms of 2024 at Seneca Polytechnic.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center text-primary">
                  <BookOpen className="mr-2 h-6 w-6" />
                  Certificates
                </h3>

                <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">UN Sustainable Development Goals (SDGs) Advocacy</h4>

                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • Completed the SDGs LAB program (Launch, Activate, and Boost) through Seneca Polytechnic.
                      </li>
                      <li>• Gained expertise in advocating for and implementing SDGs at local and global levels.</li>
                      <li>
                        • Participated in a global movement to promote SDG advocacy and local action in communities.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}

