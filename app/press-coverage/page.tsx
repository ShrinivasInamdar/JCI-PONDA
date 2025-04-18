"use client"
import { useState } from "react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedCard } from "@/components/animated-card"

// Update the PR Coverage data to include descriptions
const prCoverage = [
    {
        title: "JCI Ponda's Clean-up Drive Featured in Goa Times",
        description:
            "Our recent beach clean-up initiative was highlighted in Goa Times, showcasing the impact of community-driven environmental conservation efforts.",
        image: "/placeholder.svg?height=200&width=300",
        date: "20 Mar 2024",
    },
    {
        title: "Local News Covers JCI Ponda's Health Camp Initiative",
        description:
            "The free health camp organized by JCI Ponda received extensive coverage in local newspapers, emphasizing the importance of accessible healthcare.",
        image: "/placeholder.svg?height=200&width=300",
        date: "15 Feb 2024",
    },
    {
        title: "JCI Ponda President Interviewed on Community Radio",
        description:
            "Our president shared insights about JCI's mission and upcoming initiatives during an exclusive interview on Goa Community Radio.",
        image: "/placeholder.svg?height=200&width=300",
        date: "10 Feb 2024",
    },
    {
        title: "Youth Entrepreneurship Summit Featured in Business Magazine",
        description:
            "The successful Youth Entrepreneurship Summit organized by JCI Ponda was featured in a prominent business magazine, highlighting young talent and innovation.",
        image: "/placeholder.svg?height=200&width=300",
        date: "30 Jan 2024",
    },
]

export default function ReportsPage() {
    const [searchTerm, setSearchTerm] = useState("")

    // Filter reports based on search term
    const allReports = prCoverage; // Define allReports using prCoverage
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
                    Press Reports
                </h1>
                <p className="text-lg sm:text-lg md:text-lg lg:text-xl  font-medium text-white drop-shadow-md">
                Press highlights of JCI Ponda’s impactful work.
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

            {/* PR Section */}
            <Section
                title="Press Coverage"
                description="Media coverage and press releases about JCI Ponda's activities"
                className="bg-gray-50 dark:bg-gray-900"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReports.map((item, index) => (
                        <AnimatedCard key={index} direction="up" delay={index * 100}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="relative cursor-pointer">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                                            />
                                            <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                                                {item.date}
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl">
                                        <img
                                            src={item.image || "/placeholder.svg?height=600&width=800"}
                                            alt={item.title}
                                            className="w-full h-auto rounded-lg"
                                        />
                                        <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                                    </DialogContent>
                                </Dialog>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>

            </Section>
        </div>
    )
}

