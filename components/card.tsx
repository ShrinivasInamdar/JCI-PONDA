import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/animated-card"

interface CardProps {
  title: string
  description: string
  image: string
  link?: string
  linkText?: string
  date?: string
  className?: string
  tag?: string
  index?: number
  direction?: "left" | "right" | "up" | "down" | "fade"
}

export function Card({
  title,
  description,
  image,
  link,
  linkText = "Read More",
  date,
  className,
  tag,
  index = 0,
  direction = "up",
}: CardProps) {
  const cardContent = (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative">
        {tag && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {tag}
          </span>
        )}
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        {date && <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">{date}</div>}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        {link && (
          <div className="mt-auto">
            <Button asChild variant="outline">
              <Link href={link}>{linkText}</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <AnimatedCard direction={direction} delay={index * 100}>
      {cardContent}
    </AnimatedCard>
  )
}

