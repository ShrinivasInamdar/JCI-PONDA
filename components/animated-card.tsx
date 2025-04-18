"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down" | "fade"
  delay?: number
}

export function AnimatedCard({ children, className, direction = "up", delay = 0 }: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return "translate-x-[-50px]"
      case "right":
        return "translate-x-[50px]"
      case "up":
        return "translate-y-[-50px]"
      case "down":
        return "translate-y-[50px]"
      case "fade":
        return "opacity-0"
      default:
        return "translate-y-[-50px]"
    }
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getAnimationClass()}`,
        className,
      )}
    >
      {children}
    </div>
  )
}

