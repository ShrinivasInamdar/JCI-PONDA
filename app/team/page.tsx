import { Section } from "@/components/section"
import { Card } from "@/components/card"

// Sample data for team members
const teamMembers = [
  {
    name: "JC Vadiraj Inamdar",
    position: "President",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Leading JCI Ponda with a vision to empower young citizens and create sustainable impact in our community.",
  },
  {
    name: "JFM Muskan Naik",
    position: "Secretary",
    image: "/placeholder.svg?height=200&width=200",
    description: "Coordinating all chapter activities and ensuring effective communication within the organization.",
  },
  {
    name: "JC Nagraj Shanbog ",
    position: "Treasurer",
    image: "/placeholder.svg?height=200&width=200",
    description: "Managing the chapter's finances and ensuring transparent and efficient use of resources.",
  },
  {
    name: "JC Samrudhi Naik",
    position: "Vice President - Management",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Rochelle Fernandes",
    position: "Vice President - Program",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Dipesh Patil",
    position: "Vice President - Training",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Dhanya Bhat",
    position: "Vice President - Internationalism",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Darshan Mangeshkar",
    position: "Director Management",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Mahadev Shinde",
    position: "Director Program",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Aniket Sawant",
    position: "Director Training",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Netaji Jadhav",
    position: "Director Business",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JC Rutvik Vaze",
    position: "Director Internationalism",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
  },
  {
    name: "JR JC Shrinivas Inamdar",
    position: "JR JC Chairperson",
    image: "/placeholder.svg?height=200&width=200",
    description: "-",
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

