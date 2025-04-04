import { Section } from "@/components/section"
import { Card } from "@/components/card"

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: "Annual Leadership Conference",
    description:
      "Join us for a day of inspiring talks, workshops, and networking opportunities focused on developing leadership skills for the future.",
    image: "/placeholder.svg?height=200&width=300",
    date: "25 Apr 2025",
    link: "#",
    linkText: "Register",
  },
  {
    title: "Community Health Camp",
    description:
      "Free health check-ups, consultations, and awareness sessions on preventive healthcare for all community members.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 May 2025",
    link: "#",
    linkText: "Register",
  },
  {
    title: "Environmental Awareness Workshop",
    description:
      "Learn about sustainable practices and how you can contribute to environmental conservation in your daily life.",
    image: "/placeholder.svg?height=200&width=300",
    date: "22 May 2025",
    link: "#",
    linkText: "Register",
  },
  {
    title: "Youth Entrepreneurship Summit",
    description:
      "A platform for young entrepreneurs to showcase their ideas, get mentorship, and connect with potential investors.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Jun 2025",
    link: "#",
    linkText: "Register",
  },
  {
    title: "Cultural Exchange Program",
    description:
      "Experience diverse cultures through performances, food, and interactive sessions with international JCI members.",
    image: "/placeholder.svg?height=200&width=300",
    date: "30 Jun 2025",
    link: "#",
    linkText: "Register",
  },
  {
    title: "Career Development Workshop",
    description:
      "Enhance your professional skills with sessions on resume building, interview preparation, and career planning.",
    image: "/placeholder.svg?height=200&width=300",
    date: "12 Jul 2025",
    link: "#",
    linkText: "Register",
  },
]

export default function EventsPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover our upcoming events and join us in making a difference</p>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <Section title="Upcoming Events" description="Register for our upcoming events and be part of the change">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              date={event.date}
              link={event.link}
              linkText={event.linkText}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}

