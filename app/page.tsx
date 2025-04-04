import { Carousel } from "@/components/carousel"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample data for carousel
const carouselSlides = [
  {
    image: "/placeholder.svg?height=400&width=800",
    title: "JCI Ponda Community Service",
    description: "Making a difference in our community through active citizenship",
  },
  {
    image: "/placeholder.svg?height=400&width=800",
    title: "Leadership Development",
    description: "Building tomorrow's leaders through training and opportunities",
  },
  {
    image: "/placeholder.svg?height=400&width=800",
    title: "Networking Events",
    description: "Connect with like-minded individuals and grow your network",
  },
]

// Sample data for past events
const pastEvents = [
  {
    title: "Community Clean-up Drive",
    description:
      "We organized a community clean-up drive at Ponda Beach, collecting over 200kg of waste and raising awareness about environmental conservation.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Mar 2025",
    link: "/events/community-cleanup",
  },
  {
    title: "Leadership Workshop",
    description:
      "A workshop focused on developing leadership skills among youth, featuring speakers from various industries sharing their experiences.",
    image: "/placeholder.svg?height=200&width=300",
    date: "28 Feb 2025",
    link: "/events/leadership-workshop",
  },
  {
    title: "Health Awareness Camp",
    description:
      "Free health check-ups and awareness sessions on preventive healthcare for the local community members.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 Feb 2025",
    link: "/events/health-camp",
  },
]

export default function Home() {
  return (
    <div>
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to JCI Ponda</h1>
          <p className="text-xl max-w-2xl mx-auto">Empowering young active citizens to create positive change</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-8">
        <Carousel slides={carouselSlides} />
      </div>

      {/* Vision & Mission Section */}
      <Section title="Vision & Mission" description="Our guiding principles that drive our actions and initiatives">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be the leading global network of young active citizens. We envision a world where young people have the
              capacity to create positive change in their communities, creating a better future for all.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To provide development opportunities that empower young people to create positive change. We focus on
              personal development, community service, and international cooperation to build a better world.
            </p>
          </div>
        </div>
      </Section>

      {/* Past Events Section */}
      <Section
        title="Past Events"
        description="A glimpse of our recent activities and initiatives"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              date={event.date}
              link={event.link}
              linkText="Read More"
            />
          ))}
        </div>
      </Section>

      {/* Leader 2025 Section */}
      <Section title="Leader 2025">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="JCI Ponda Leader 2025"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Vadiraj Inamdar</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">President, JCI Ponda 2025</p>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Leading JCI Ponda with a vision to empower young citizens and create sustainable impact in our community
            through innovative projects and leadership development.
          </p>
        </div>
      </Section>

      {/* Latest Events Section */}
      <Section
        title="Latest Events"
        description="Stay updated with our most recent activities and initiatives"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Leadership Workshop 2025"
            description="An intensive workshop focused on developing essential leadership skills for young professionals in our community."
            image="/placeholder.svg?height=200&width=300"
            date="15 Mar 2025"
            link="/events"
            linkText="Click More"
          />
          <Card
            title="Environmental Awareness Drive"
            description="A community initiative to raise awareness about environmental conservation and sustainable practices."
            image="/placeholder.svg?height=200&width=300"
            date="28 Feb 2025"
            link="/events"
            linkText="Click More"
          />
          <Card
            title="Youth Entrepreneurship Summit"
            description="A platform for young entrepreneurs to showcase their ideas and connect with mentors and investors."
            image="/placeholder.svg?height=200&width=300"
            date="10 Feb 2025"
            link="/events"
            linkText="Click More"
          />
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}

