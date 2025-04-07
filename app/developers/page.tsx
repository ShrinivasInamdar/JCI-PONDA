import { Section } from "@/components/section"
import { Instagram, Linkedin, Github } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

// Sample data for developers with added social media links
const developers = [
  {
    name: "SHRINIVAS INAMDAR",
    role: "LEAD DEVELOPER",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
    social: {
      linkedin: "https://www.linkedin.com/in/shrinivas-inamdar-a83a30237/",
      github: "https://github.com/ShrinivasInamdar",
      instagram: "https://www.instagram.com/shrinivas_inamdar/",
    },
  },
  {
    name: "PRANAV KERKAR",
    role: "FRONTEND DEVELOPER",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
    social: {
      linkedin: "https://www.linkedin.com/in/pranav-kerkar-900432253/",
      github: "https://github.com/pranavkerkar31",
      instagram: "https://www.instagram.com/pranav_kerkar/",
    },
  },
  {
    name: "ASHDEN MASCARENHAS",
    role: "FRONTEND DEVELOPER",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
    social: {
      linkedin: "https://www.linkedin.com/in/ashden-mascarenhas-815b50253/",
      github: "https://github.com/706ash",
      instagram: "https://www.instagram.com/ashdenmascarenhas/",
    },
  },
  {
    name: "P JAYESH NAIDU",
    role: "FRONTEND DEVELOPER",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
    social: {
      linkedin: "https://www.linkedin.com/in/p-jayesh-naidu-599648255/",
      github: "https://github.com/25Jayesh10",
      instagram: "https://www.instagram.com/_jayesh2510_/",
    },
  },
  {
    name: "AARTH VAJANDAR",
    role: "FRONTEND DEVELOPER",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "-",
    social: {
      linkedin: "https://www.linkedin.com/in/aarth-vajandar-3b1659252/",
      github: "https://github.com/aarth-01",
      instagram: "https://www.instagram.com/_.gamer_tonight.__/",
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

