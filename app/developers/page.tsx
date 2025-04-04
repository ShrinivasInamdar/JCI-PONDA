import { Section } from "@/components/section"
import { Card } from "@/components/card"

// Sample data for developers
const developers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Full-stack developer with expertise in React and Next.js, responsible for the overall architecture of the website.",
  },
  {
    name: "Sophia Chen",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Creative designer focused on creating intuitive and accessible user interfaces with a keen eye for detail.",
  },
  {
    name: "Marcus Williams",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Specializes in creating responsive and interactive web experiences using modern frontend technologies.",
  },
  {
    name: "Priya Patel",
    role: "Backend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Experienced in building robust server-side applications and APIs to power the website's functionality.",
  },
]

export default function DevelopersPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Developers</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the talented team behind the JCI Ponda website</p>
        </div>
      </div>

      {/* Developers Section */}
      <Section title="Development Team" description="The skilled professionals who brought this website to life">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developers.map((developer, index) => (
            <Card
              key={index}
              title={developer.name}
              description={developer.description}
              image={developer.image}
              tag={developer.role}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}

