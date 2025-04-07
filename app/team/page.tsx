import { Section } from "@/components/section"
import { Facebook, Instagram } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

// Sample data for team members
const teamMembers = {
  leadership: [
    {
      name: "JC VADIRAJ INAMDAR",
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
      name: "JFM MUSKAN NAIK",
      position: "Secretary",
      image: "/placeholder.svg?height=200&width=200",
      description: "Coordinating all chapter activities and ensuring effective communication within the organization.",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC NAGRAJ SHANBHOG",
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
      name: "JC SAMRUDHI NAIK",
      position: "Vice President - Management",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC ROCHELLE FERNANDES",
      position: "Vice President - Program",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC DIPESH PATIL",
      position: "Vice President - Training",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC DHANYA BHAT",
      position: "Vice President - Internationalism",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
  directors: [
    {
      name: "JC DARSHA MANGUESHKAR",
      position: "Director Management",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC MAHADEV SHINDE",
      position: "Director Program",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC Aniket Sawant",
      position: "Director Training",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC Netaji Jadhav",
      position: "Director Business",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "JC Rutvik Vaze",
      position: "Director Internationalism",
      image: "/placeholder.svg?height=200&width=200",
      description: "-",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ],
  juniorJaycees: [
    {
      name: "JR JC SHRINIVAS INAMDAR",
      position: "Junior Jaycee Chairperson",
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
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-16 text-center ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Governing Board Team (LGB)</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the dedicated leaders driving JCI Ponda forward</p>
        </div>
      </div>

      {/* Leadership Team Section */}
      <Section title="Leadership Team">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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

