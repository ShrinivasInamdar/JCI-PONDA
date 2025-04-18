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
    title: "Annual Leadership Conference 2024",
    description: "A comprehensive report on the outcomes and impact of our flagship leadership development event.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Mar 2024",
    link: "/reports/leadership-conference-2024",
  },
  {
    title: "Community Clean-up Drive",
    description:
      "Details of our environmental initiative that mobilized over 200 volunteers to clean local beaches and parks.",
    image: "/placeholder.svg?height=200&width=300",
    date: "28 Feb 2024",
    link: "/reports/cleanup-drive-2024",
  },
  {
    title: "Health Awareness Camp",
    description:
      "Impact report of our health camp that provided free check-ups and consultations to over 500 community members.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 Feb 2024",
    link: "/reports/health-camp-2024",
  },
  {
    title: "Youth Entrepreneurship Summit",
    description: "Highlights from our summit that connected young entrepreneurs with mentors and potential investors.",
    image: "/placeholder.svg?height=200&width=300",
    date: "25 Jan 2024",
    link: "/reports/entrepreneurship-summit-2024",
  },
  {
    title: "Educational Outreach Program",
    description:
      "Report on our initiative to provide educational resources and mentorship to underprivileged students.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Jan 2024",
    link: "/reports/educational-outreach-2024",
  },
  {
    title: "Cultural Exchange Program",
    description:
      "Outcomes of our international cultural exchange program that fostered global understanding and cooperation.",
    image: "/placeholder.svg?height=200&width=300",
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

