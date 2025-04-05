import { Section } from "@/components/section"
import { Card } from "@/components/card"

// =============================================
// UPCOMING EVENTS DATA
// =============================================
// To add a new upcoming event:
// 1. Add a new object to this array with the event details
// 2. The "link" property should be "#" or a registration link
// 3. The "linkText" property should be "Register" or similar
// =============================================
const upcomingEvents = [
  {
    title: "Annual Leadership Conference",
    description:
      "Join us for a day of inspiring talks, workshops, and networking opportunities focused on developing leadership skills for the future.",
    image: "/placeholder.svg?height=200&width=300", // Replace with actual image path
    date: "25 Apr 2025",
    link: "#", // Registration link or "#" if not available yet
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
  // Add more upcoming events here...
]

// =============================================
// PAST EVENTS DATA
// =============================================
// To add a new past event:
// 1. Add a new object to this array with the event details
// 2. Create a unique slug for the event (e.g., "leadership-workshop-2025")
// 3. Set the "link" property to "/events/your-event-slug"
// 4. Add the event data to the events object in [slug]/page.tsx
// =============================================
const pastEvents = [
  {
    title: "Community Clean-up Drive",
    description:
      "We organized a community clean-up drive at Ponda Beach, collecting over 200kg of waste and raising awareness about environmental conservation.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Mar 2025",
    link: "/events/community-cleanup", // This should match the slug in the dynamic route
    linkText: "Read More",
  },
  {
    title: "Leadership Workshop",
    description:
      "A workshop focused on developing leadership skills among youth, featuring speakers from various industries sharing their experiences.",
    image: "/placeholder.svg?height=200&width=300",
    date: "28 Feb 2025",
    link: "/events/leadership-workshop",
    linkText: "Read More",
  },
  {
    title: "Health Awareness Camp",
    description:
      "Free health check-ups and awareness sessions on preventive healthcare for the local community members.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 Feb 2025",
    link: "/events/health-camp",
    linkText: "Read More",
  },
  // Add more past events here...
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

      {/* Past Events Section */}
      {/* <Section
        title="Past Events"
        description="Explore our previous events and their impact"
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
              linkText={event.linkText}
            />
          ))}
        </div>
      </Section> */}
    </div>
  )
}

