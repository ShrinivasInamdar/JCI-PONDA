"use client"
import { useState } from "react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedCard } from "@/components/animated-card"

const prCoverage = [
    {
        title: "Prime TV Reporter Sanjay Naik Honored",
        description:
            "In a special gesture, JCI Ponda felicitated Shri Sanjay Naik, Prime TV Reporter from Ponda, for his contributions to journalism and community reporting.", // Thumbnail
        image: "/press_images/1.png",
        fullImage: "/fullimage_press/press_images/1.png", // Full version shown in dialog
        date: "15 Mar 2025",
    },
    {
        title: "Health and Wellness Drive",
        description:
            "JCI Ponda, in collaboration with Patanjali Yog Samiti, held a Health & Awareness Drive at Kranti Maidan, Ponda, for World Cancer Day and International Suryanamaskar Day. With 110 participants, the event promoted cancer awareness and yoga’s health benefits. Dignitaries like Mr. Anand Naik and JC Vadiraj Inamdar attended, and 108 Suryanamaskars were performed to emphasize preventive healthcare.",
        image: "/press_images/2.png",
        fullImage: "/fullimage_press/press_images/2.png",
        date: "5 Feb 2025",
    },
    {
        title: "JCI Ponda Installation",
        description:
            "JCI Ponda's 53rd Installation Ceremony on 26th January saw JC Vadiraj Gururaj Inamdar installed as President for 2025, with Dr. Kautuk Prabhu Bhatikar and other dignitaries attending.",
        image: "/press_images/3.png",
        fullImage: "/fullimage_press/press_images/3.png",
        date: "27 Jan 2025",
    },
    {
        title: "Aspiring Youth Session",
        description:
            "On account of National Youth Day, JCI Ponda's 53rd President, JC Vadiraj Inamdar, conducted a 2-hour training session titled Stepping into the Real World in collaboration with the Entrepreneurship Cell of Don Bosco College of Engineering on January 18, 2025.",
        image: "/press_images/4.png",
        fullImage: "/fullimage_press/press_images/4.png",
        date: "22 Jan 2025",
    },
    {
        title: "National Youth Day Session",
        description:
            "On the occasion of National Youth Day, JCI Ponda in collaboration with the Computer Department of Don Bosco College of Engineering, conducted a session on Skill Development: Creativity & Curiosity for second-year Computer Engineering students on 17 January 2025.",
        image: "/press_images/5.png",
        fullImage: "/fullimage_press/press_images/5.png",
        date: "20 Jan 2025",
    },
    
]

export default function ReportsPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const allReports = prCoverage
    const filteredReports = allReports.filter(
        (report) =>
            report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div>
        {/* Header Section */}
        <div style={{ height: '212px' }} className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-12">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>
    
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                Press Reports
            </h1>
            <p className="text-lg font-medium text-white drop-shadow-md">
                Press highlights of JCI Ponda's impactful work.
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
            {filteredReports.length % 3 === 2 ? (
                <div>
                    {/* Regular grid for all items except last two */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {filteredReports.slice(0, filteredReports.length - 2).map((item, index) => (
                            <AnimatedCard key={index} direction="up" delay={index * 100}>
                                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="relative cursor-pointer">
                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.title}
                                                    className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
                                                />
                                                <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                                                    {item.date}
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl">
                                            <img
                                                src={item.fullImage || item.image || "/placeholder.svg"}
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
                    
                    {/* Centered container for last two items */}
                    <div className="flex justify-center gap-6">
                        {filteredReports.slice(filteredReports.length - 2).map((item, index) => (
                            <AnimatedCard 
                                key={`last-${index}`} 
                                direction="up" 
                                delay={(filteredReports.length - 2 + index) * 100}
                                className="w-full max-w-md"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="relative cursor-pointer">
                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.title}
                                                    className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
                                                />
                                                <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                                                    {item.date}
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl">
                                            <img
                                                src={item.fullImage || item.image || "/placeholder.svg"}
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
                </div>
            ) : (
                // Regular grid for all other cases
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
                                                className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
                                            />
                                            <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                                                {item.date}
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl">
                                        <img
                                            src={item.fullImage || item.image || "/placeholder.svg"}
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
            )}
        </Section>
    </div>
    )
}
