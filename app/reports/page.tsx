"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

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
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reports</h1>
          <p className="text-xl max-w-2xl mx-auto">Explore detailed reports of our past events and initiatives</p>
        </div>
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
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">No reports found matching your search criteria.</p>
          </div>
        )}
      </Section>
    </div>
  )
}

