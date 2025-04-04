import { Section } from "@/components/section"
import { Card } from "@/components/card"

// Sample data for developers
const developers = [
  {
    name: "Jr Jc Shrinivas Inamdar",
    role: "Lead Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
  },
  {
    name: "Pranav Kerkar",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
  },
  {
    name: "Ashden Mascarenhas",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
  },
  {
    name: "P Jayesh Naidu",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
  },
  {
    name: "Lauren",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
  },
  {
    name: "Aarth Vajandar",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
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

