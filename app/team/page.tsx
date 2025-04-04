import { Section } from "@/components/section"
import { Card } from "@/components/card"

// Sample data for team members
const teamMembers = [
  {
    name: "John Doe",
    position: "President",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Leading JCI Ponda with a vision to empower young citizens and create sustainable impact in our community.",
  },
  {
    name: "Jane Smith",
    position: "Secretary",
    image: "/placeholder.svg?height=200&width=200",
    description: "Coordinating all chapter activities and ensuring effective communication within the organization.",
  },
  {
    name: "Michael Johnson",
    position: "Treasurer",
    image: "/placeholder.svg?height=200&width=200",
    description: "Managing the chapter's finances and ensuring transparent and efficient use of resources.",
  },
  {
    name: "Emily Brown",
    position: "Vice President - Community Development",
    image: "/placeholder.svg?height=200&width=200",
    description: "Spearheading initiatives that address community needs and create lasting positive impact.",
  },
  {
    name: "David Wilson",
    position: "Vice President - Individual Development",
    image: "/placeholder.svg?height=200&width=200",
    description: "Designing and implementing programs focused on personal and professional growth of members.",
  },
  {
    name: "Sarah Lee",
    position: "Vice President - Business Development",
    image: "/placeholder.svg?height=200&width=200",
    description: "Creating opportunities for entrepreneurship and business networking among members.",
  },
  {
    name: "Robert Chen",
    position: "Vice President - International Relations",
    image: "/placeholder.svg?height=200&width=200",
    description: "Fostering connections with JCI chapters globally and promoting cultural exchange.",
  },
  {
    name: "Lisa Garcia",
    position: "Training Director",
    image: "/placeholder.svg?height=200&width=200",
    description: "Coordinating training programs to enhance leadership and professional skills of members.",
  },
]

export default function TeamPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LGB Team 2025</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the dedicated leaders driving JCI Ponda forward</p>
        </div>
      </div>

      {/* Team Section */}
      <Section title="Our Leadership Team" description="Committed to creating positive change in our community">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              title={member.name}
              description={member.description}
              image={member.image}
              tag={member.position}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}

