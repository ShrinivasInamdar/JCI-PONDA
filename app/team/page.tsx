import { Section } from "@/components/section"
import { Facebook, Instagram } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

// Define the team member type for TypeScript
interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  social: {
    facebook: string;
    instagram: string;
  };
}

// Sample data for team members
const teamMembers: {
  leadership: TeamMember[];
  vicePresidents: TeamMember[];
  directors: TeamMember[];
  juniorJaycees: TeamMember[];
  members: TeamMember[];
} = {
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
};

// Reusable TeamMemberCard component with fixed heights
function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <AnimatedCard key={index} direction="up" delay={index * 100}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 w-full h-full flex flex-col">
        <div className="relative h-48">
          <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {member.position}
          </span>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow min-h-12">
            {member.description !== "-" ? member.description : ""}
          </p>
          <div className="flex space-x-3 mt-auto">
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
  );
}

// Generic component for rendering team sections with proper centering and consistent heights
function TeamSection({ members, title, bgClass = "" }: { members: TeamMember[]; title: string; bgClass?: string }) {
  // Calculate how many complete rows of 3 we have
  const completeRows = Math.floor(members.length / 3);
  const remainingItems = members.length % 3;
  
  // Split the members into complete rows and the remaining items
  const completeRowMembers = members.slice(0, completeRows * 3);
  const remainingMembers = members.slice(completeRows * 3); 
  
  return (
    <Section title={title} className={bgClass}>
      {/* Complete rows with 3 cards each */}
      {completeRows > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {completeRowMembers.map((member, index) => (
            <div key={`row-${index}`} className="h-full">
              <TeamMemberCard member={member} index={index} />
            </div>
          ))}
        </div>
      )}
      
      {/* Remaining cards centered */}
      {remainingItems > 0 && (
        <div className="w-full flex justify-center">
          <div className={`grid grid-cols-1 ${remainingItems === 2 ? 'md:grid-cols-2' : ''} gap-6 w-full ${remainingItems < 3 ? `md:w-${remainingItems === 1 ? '1/3' : '2/3'}` : ''}`}>
            {remainingMembers.map((member, index) => (
              <div key={`remaining-${index}`} className="h-full">
                <TeamMemberCard member={member} index={completeRows * 3 + index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

export default function TeamPage() {
  return (
    <div>
      <div style={{ height: '212px' }} className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-8">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          Local Governing Board Team (LGT)
        </h1>

        <p className="text-s md:text-2xl font-medium text-white drop-shadow-md">
          Explore detailed reports of our past events and initiatives
        </p>
      </div>

      {/* Team Sections */}
      <TeamSection members={teamMembers.leadership} title="Leadership Team" />
      <TeamSection members={teamMembers.vicePresidents} title="Vice Presidents" bgClass="bg-gray-50 dark:bg-gray-900" />
      <TeamSection members={teamMembers.directors} title="Directors" />
      <TeamSection members={teamMembers.juniorJaycees} title="Junior Jaycees" bgClass="bg-gray-50 dark:bg-gray-900" />
      <TeamSection members={teamMembers.members} title="Members" />
    </div>
  );
}