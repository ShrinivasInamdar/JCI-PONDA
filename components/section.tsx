import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ title, description, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

