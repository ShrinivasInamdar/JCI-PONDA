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
        <div style={{ height: '212px' }} className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-8">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          Developers
        </h1>

        <p className="text-2xl md:text-2xl font-medium text-white drop-shadow-md">
          Meet the talented individuals behind this website
        </p>
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

