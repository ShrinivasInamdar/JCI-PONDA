import { Section } from "@/components/section"
import { Card } from "@/components/card"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import galaxy from "./galaxy.jpg"
import { Instagram } from "lucide-react"

const leaders = {
  national: [
    {
      name: "JFS ANKUR JHUNJHUNWALA",
      position: (
        <>
          NATIONAL PRESIDENT
          <br />
          JCI INDIA
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },
    {
      name: "JFS ASHOK BHAT",
      position: (
        <>
          National Vice President
          <br />
          AREA - A , JCI INDIA
        </>
      ),
      image: "/leaders_images/nvp.png",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS ASHOK BHAT",
      position: (
        <>
          National Vice President
          <br />
          AREA - A , JCI INDIA
        </>
      ),
      image: "/leaders_images/nvp.png",
      region: "",
      social: {
        instagram: "#",
      },
    },
  ],
  
}

export default function AboutPage() {
  return (
    <div>
      <div style={{ height: '212px' }} className="relative w-full  bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-12">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-5xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          About us
        </h1>
        <p className="text-lg sm:text-lg md:text-lg lg:text-xl  font-medium text-white drop-shadow-md">
          Learn more about JCI, our history, and our mission
        </p>
      </div>

      {/* What is JCI Section */}
      <Section title="What is JCI">
        <AnimatedCard direction="left">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt="JCI Logo"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold mb-4">Junior Chamber International</h3>
                <p className="mb-4 font-light">
                  Junior Chamber International (JCI) is a non-profit international non-governmental organization of
                  young people between 18 and 40 years old. It has members in about 124 countries, and regional or
                  national organizations in most of them.
                </p>
                <p className="mb-4 font-light">
                  JCI's mission is to provide development opportunities that empower young people to create positive
                  change. The organization focuses on four main areas of opportunity: business development, individual
                  development, community development, and international cooperation.
                </p>
                <p className="font-light">
                  Through these areas, JCI members develop skills, knowledge, and understanding to make informed
                  decisions and take action. JCI members are young active citizens—people who are dedicated to creating
                  positive change in their communities.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* JCI INDIA Section */}
      <Section title="JCI INDIA" className="bg-gray-50 dark:bg-gray-900">
        <AnimatedCard direction="right">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold mb-4">JCI India</h3>
                <p className="mb-4 font-light">
                  JCI India is one of the largest national organizations within the JCI global network. Established in
                  1947, JCI India has grown to become a significant force for positive change across the country.
                </p>
                <p className="mb-4 font-light">
                  With hundreds of local chapters spread throughout India, JCI India provides a platform for young
                  Indians to develop leadership skills, social responsibility, entrepreneurship, and fellowship
                  necessary to create positive change in their communities.
                </p>
                <p className="font-light">
                  JCI India conducts numerous national programs focused on community development, skill enhancement, and
                  leadership training. These initiatives have touched millions of lives and continue to make a
                  significant impact on Indian society.
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt="JCI India Logo"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* JCI Ponda Section */}
      <Section title="JCI Ponda">
        <AnimatedCard direction="left">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt="JCI Ponda Logo"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold mb-4">JCI Ponda</h3>
                <p className="mb-4 font-light">
                  JCI Ponda is a local chapter of JCI India, established to serve the Ponda community in Goa. Since its
                  inception, JCI Ponda has been at the forefront of community development and leadership training in the
                  region.
                </p>
                <p className="mb-4 font-light">
                  Our chapter focuses on implementing impactful projects that address local challenges while providing
                  members with opportunities to develop their skills and network with like-minded individuals.
                </p>
                <p className="font-light">
                  Through various initiatives in education, health, environment, and community welfare, JCI Ponda
                  continues to make a significant difference in the lives of Ponda residents while nurturing the next
                  generation of leaders.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* Galaxy of Past Presidents */}
      <Section title="Galaxy of Past Presidents" className="bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Honoring the visionary leaders who have guided JCI Ponda through the years
            </p>
          </div>
          <div className="w-full">
            <img
              src={galaxy.src}
              alt="Past Presidents of JCI Ponda"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* Leaders Section */}
    <Section title="" >
    {/* National Leaders */}
    <div className="mb-12">
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center">
    <h2 className="text-2xl font-serif text-blue-800 font-semibold">ACHIVEMENTS OF PAST PRESIDENTS</h2>
  </div>
      <div className="top flex justify-center gap-8 flex-wrap ">
        {leaders.national.map((leader, index) => (
          <AnimatedCard key={index} direction="up" delay={index * 150}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 h-[350px] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="card-image"
                />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{leader.position}</p>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={leader.social.instagram}
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
    </Section>
  </div>

    
  )
}

