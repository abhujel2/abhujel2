"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import SectionHeading from "@/components/section-heading"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Let's connect and discuss opportunities" />

        <div className="mt-16 grid md:grid-cols-2 gap-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Feel free to reach out to me for any questions, opportunities, or just to say hello. I'm always open to
              discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/50 group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:abhujel2@myseneca.ca"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abhujel2@myseneca.ca
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/50 group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+14372632377" className="text-muted-foreground hover:text-primary transition-colors">
                      (437) 263-2377
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/50 group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild className="rounded-full h-12 w-12">
                  <a href="https://github.com/abhujel2" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full h-12 w-12">
                  <a
                    href="https://www.linkedin.com/in/aayush-bhujel-144462288/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full h-12 w-12">
                  <a href="mailto:abhujel2@myseneca.ca">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full h-12 w-12">
                  <a href="tel:+14372632377">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}

