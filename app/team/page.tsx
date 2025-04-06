import { Section } from "@/components/section"
import { Facebook, Instagram } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

// Sample data for team members
const teamMembers = {
  leadership: [
    {
      name: "John Doe",
      position: "President",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Leading JCI Ponda with a vision to empower young citizens and create sustainable impact in our community.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Jane Smith",
      position: "Secretary",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating all chapter activities and ensuring effective communication within the organization.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Michael Johnson",
      position: "Treasurer",
      image: "/placeholder.svg?height=200&width=200",
      description: "Managing the chapter's finances and ensuring transparent and efficient use of resources.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
  vicePresidents: [
    {
      name: "Emily Brown",
      position: "Vice President - Community Development",
      image: "/placeholder.svg?height=200&width=200",
      description: "Spearheading initiatives that address community needs and create lasting positive impact.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "David Wilson",
      position: "Vice President - Individual Development",
      image: "/placeholder.svg?height=200&width=200",
      description: "Designing and implementing programs focused on personal and professional growth of members.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Sarah Lee",
      position: "Vice President - Business Development",
      image: "/placeholder.svg?height=200&width=200",
      description: "Creating opportunities for entrepreneurship and business networking among members.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
  directors: [
    {
      name: "Robert Chen",
      position: "Training Director",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating training programs to enhance leadership and professional skills of members.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Lisa Garcia",
      position: "Public Relations Director",
      image: "/placeholder.svg?height=200&width=200",
      description: "Managing the chapter's public image and communications with external stakeholders.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
  juniorJaycees: [
    {
      name: "Alex Johnson",
      position: "Junior Jaycee Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating activities for our Junior Jaycee Wing and nurturing young leaders.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
  members: [
    {
      name: "Thomas Brown",
      position: "Member",
      image: "/placeholder.svg?height=200&width=200",
      description: "Active member contributing to various community development initiatives.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Sophia Martinez",
      position: "Member",
      image: "/placeholder.svg?height=200&width=200",
      description: "Passionate about environmental conservation and sustainable development.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "James Wilson",
      position: "Member",
      image: "/placeholder.svg?height=200&width=200",
      description: "Focused on youth empowerment and education-related projects.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
}

// Reusable TeamMemberCard component for consistent card design
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  return (
    <AnimatedCard key={index} direction="up" delay={index * 100}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 w-full">
        <div className="relative">
          <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {member.position}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{member.description}</p>
          <div className="flex space-x-3">
            <a
              href={member.social.facebook}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href={member.social.instagram}
              className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </AnimatedCard>
  )
}

export default function TeamPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Governing Board Team (LGB)</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the dedicated leaders driving JCI Ponda forward</p>
        </div>
      </div>

      {/* Leadership Team Section */}
      <Section title="Leadership Team">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.leadership.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>

      {/* Vice Presidents Section */}
      <Section title="Vice Presidents" className="bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.vicePresidents.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>

      {/* Directors Section */}
      <Section title="Directors">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.directors.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>

      {/* Junior Jaycees Section */}
      <Section title="Junior Jaycees" className="bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.juniorJaycees.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>

      {/* Members Section */}
      <Section title="Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>
    </div>
  )
}

