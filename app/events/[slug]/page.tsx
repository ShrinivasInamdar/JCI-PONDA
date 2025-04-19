import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// =============================================
// EVENT DATA
// =============================================
// To add a new event:
// 1. Create a new property in this object with a unique slug as the key
// 2. The slug should match the URL you want to use (e.g., "leadership-workshop-2025")
// 3. Fill in all the required fields for the event
// 4. Make sure to update the pastEvents array in /app/events/page.tsx to link to this event
// =============================================


export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const event = events[slug as keyof typeof events]

  // Handle case when event is not found
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/events">Back to Events</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Event Header */}
      <div className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center text-white h-96 md:h-72">
  {/* Decorative Bubbles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
  <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>
  
  <div className="container mx-auto px-4 pt-8 w-full">
    <div className="w-full text-left">
      <Link
        href="/events"
        className="inline-flex hover:text-blue-200 mb-4 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Link>
    </div>
    
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">{event.title}</h1>
    
    <div className="flex flex-row flex-wrap gap-2 text-sm">
      <div className="bg-blue-800/50 px-3 py-1 rounded-full">
        <span className="font-medium">Date:</span> {event.date}
      </div>
      <div className="bg-blue-800/50 px-3 py-1 rounded-full">
        <span className="font-medium">Location:</span> {event.location}
      </div>
      <div className="bg-blue-800/50 px-3 py-1 rounded-full">
        <span className="font-medium">Organized by:</span> {event.organizer}
      </div>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-8">
        {/* Main Image */}
        <div className="mb-8 imagewidth">
          <img
            src={event.mainImage || "/placeholder.svg"}
            alt={`${event.title} - Main Image`}
            className=" w-[550px] h-[670px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Image Gallery */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {event.images.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${event.title} - Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          ))}
        </div> */}

        {/* Event Description */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Event Details</h2>
          <div
            className="prose prose-blue max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </div>

        {/* Impact Section */}
        {/* <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Impact</h2>
          <ul className="space-y-2">
            {event.impact.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 text-sm mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/reports">Back to Events</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

