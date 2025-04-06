import { Section } from "@/components/section"
import { Instagram, Linkedin, Github } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

// Sample data for developers with added social media links
const developers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Full-stack developer with expertise in React and Next.js, responsible for the overall architecture of the website.",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Sophia Chen",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Creative designer focused on creating intuitive and accessible user interfaces with a keen eye for detail.",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Marcus Williams",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Specializes in creating responsive and interactive web experiences using modern frontend technologies.",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Backend Developer",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Experienced in building robust server-side applications and APIs to power the website's functionality.",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
]

export default function DevelopersPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Developers</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the talented team behind the JCI Ponda website</p>
        </div>
      </div>

      {/* Developers Section */}
      <Section title="Development Team" description="The skilled professionals who brought this website to life">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((developer, index) => (
            <AnimatedCard key={index} direction="up" delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 w-full">
                <div className="relative">
                  <img
                    src={developer.image || "/placeholder.svg"}
                    alt={developer.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {developer.role}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{developer.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{developer.description}</p>
                  <div className="flex space-x-3">
                    <a
                      href={developer.social.linkedin}
                      className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={developer.social.github}
                      className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={developer.social.instagram}
                      className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </div>
  )
}

