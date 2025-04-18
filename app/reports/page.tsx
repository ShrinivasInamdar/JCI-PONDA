"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedCard } from "@/components/animated-card"

// Sample data for reports
const allReports = [
  {
    title: "JCI Action Framework",
    description: "A comprehensive report on the outcomes and impact of our flagship leadership development event.",
    image: "/event_photos/32.jpg?height=200&width=300",
    date: "15 Mar 2024",
    link: "/reports/leadership-conference-2024",
  },
  {
    title: "Effective Public Speaking",
    description:
      "Details of our environmental initiative that mobilized over 200 volunteers to clean local beaches and parks.",
    image: "/event_photos/31.jpg?height=200&width=300",
    date: "28 Feb 2024",
    link: "/reports/cleanup-drive-2024",
  },
  {
    title: "JCOM Meet 1.0",
    description:
      "Impact report of our health camp that provided free check-ups and consultations to over 500 community members.",
    image: "/event_photos/30.jpg?height=200&width=300",
    date: "10 Feb 2024",
    link: "/reports/health-camp-2024",
  },
  {
    title: "Sport's Day",
    description: "Highlights from our summit that connected young entrepreneurs with mentors and potential investors.",
    image: "/event_photos/29.jpg?height=200&width=300",
    date: "25 Jan 2024",
    link: "/reports/entrepreneurship-summit-2024",
  },
  {
    title: "Educational Outreach Program",
    description:
      "Report on our initiative to provide educational resources and mentorship to underprivileged students.",
    image: "/event_photos/28.jpg?height=200&width=300",
    date: "15 Jan 2024",
    link: "/reports/educational-outreach-2024",
  },
  {
    title: "Cultural Exchange Program",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/27.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Annual Running Race",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/26.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "53rd Charter Night",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/25.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - Women's Day Rally",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/24.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - Women of Worth",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/23.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - DAY 6",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/22.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - DAY 5",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/21.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - DAY 4",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/20.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - DAY 3",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/19.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Aboli Week - DAY 2",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/18.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Breast Cancer Screening Camp",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/17.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Salute the Silent Worker",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/16.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Daan at Maa Ashroghar",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/15.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Lo Development Management Training",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/14.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Water Distribution-Shivjayanthi",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/13.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Valentine's Day Contest-Ishq Wala Frame",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/12.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Cultural Exchange Program",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/11.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Rising for a Cause",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/10.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "JCI Ponda's 53 installation",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/9.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Reupublic Day Celebration",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/8.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Public Speaking & Entreprenurship Workshop",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/7.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Swagat a Transformational Orientation Program",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/6.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "National Youth Day",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/5.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Chapcon 2025",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/4.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "National Youth Day: Training on Startups",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/3.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "National Youth Day: Skill Development",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/2.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
  {
    title: "Presidential Academy",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/event_photos/1.jpg?height=200&width=300",
    date: "05 Jan 2024",
    link: "/reports/cultural-exchange-2024",
  },
]

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter reports based on search term
  const filteredReports = allReports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div style={{ height: '212px' }} className="relative w-full  bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-12">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-5xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Reports
        </h1>
        <p className="text-lg sm:text-lg md:text-lg lg:text-xl  font-medium text-white drop-shadow-md">
          Explore detailed reports of our past events and initiatives
        </p>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search reports..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Reports Section */}
      <Section title="Event Reports" description="Detailed documentation of our events and their impact">
        {filteredReports.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report, index) => (
              <Card
                key={index}
                title={report.title}
                description={report.description}
                image={report.image}
                date={report.date}
                link={report.link}
                linkText="View Report"
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">No reports found matching your search criteria.</p>
          </div>
        )}
      </Section>

      {/* PR Section */}
    
    </div>
  )
}

