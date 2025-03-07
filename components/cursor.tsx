"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      const isLinkHovered =
        hoveredElement?.tagName === "A" ||
        hoveredElement?.tagName === "BUTTON" ||
        hoveredElement?.closest("a") ||
        hoveredElement?.closest("button") ||
        hoveredElement?.classList.contains("cursor-pointer") ||
        hoveredElement?.closest(".cursor-pointer")

      setLinkHovered(isLinkHovered)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    // Only add event listeners on desktop
    if (window.innerWidth > 768) {
      addEventListeners()
    }

    return () => {
      removeEventListeners()
    }
  }, [])

  // Hide cursor on mobile/tablet
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full border border-primary z-40 pointer-events-none"
        animate={{
          x: position.x - 80,
          y: position.y - 80,
          scale: linkHovered ? 1.2 : 0.5,
          opacity: hidden ? 0 : linkHovered ? 0.2 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  )
}

