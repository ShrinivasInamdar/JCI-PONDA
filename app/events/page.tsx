"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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

// Sample data for past events
const pastEvents = [
  {
    title: "Community Clean-up Drive",
    description:
      "We organized a community clean-up drive at Ponda Beach, collecting over 200kg of waste and raising awareness about environmental conservation.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Mar 2025",
    link: "/events/community-cleanup",
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
]

export default function EventsPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <div>
      <div  style={{ height: '212px' }} className="relative w-full  bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-12">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-5xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Events
        </h1>

        <p className="text-md sm:text-base md:text-lg lg:text-xl  font-medium text-white drop-shadow-md">
          Discover our upcoming events and join us in making a difference
        </p>
      </div>

      {/* Plan of Action Section */}
      <Section title="Plan of Action for 2025" description="Our roadmap for impactful initiatives throughout the year">
        <div className="flex justify-center">
          <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <DialogTrigger asChild>
              <div className="cursor-pointer relative">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Annual Calendar 2025"
                  className="rounded-lg shadow-md hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white font-bold text-xl rounded-lg">
                  Click to view Annual Calendar
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="Annual Calendar 2025 - Full View"
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>
        </div>
      </Section>

      {/* Upcoming Events Section */}
      <Section
        title="Upcoming Events"
        description="Register for our upcoming events and be part of the change"
        className="bg-gray-50 dark:bg-gray-900"
      >
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
              index={index}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      {/* <Section title="Past Events" description="Explore our previous events and their impact">
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
              index={index}
              direction="up"
            />
          ))}
        </div>
      </Section> */}
    </div>
  )
}

