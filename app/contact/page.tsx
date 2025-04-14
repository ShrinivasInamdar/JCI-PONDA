import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

// Sample data for contact profiles
const contactProfiles = [
  {
    name: "JC VADIRAJ INAMDAR",
    position: "President",
    image: "/placeholder.svg?height=200&width=200",
    email: "president@jciponda.in",
    phone: "7083491368",
  },
  {
    name: "JFM MUSKAN NAIK",
    position: "Secretary",
    image: "/placeholder.svg?height=200&width=200",
    email: "secretary@jciponda.in",
    phone: "7507781833",
  },
]

// Info cards data
const infoCards = [
  {
    title: "Who can become a JC?",
    content:
      "Any young person between the ages of 18 and 40 who is committed to creating positive change in their community can become a Junior Chamber (JC) member. We welcome individuals from all backgrounds and professions.",
  },
  {
    title: "Can students be JCs?",
    content:
      "Yes, students can definitely become JC members! In fact, JCI provides excellent opportunities for students to develop leadership skills, expand their network, and gain practical experience that complements their academic education.",
  },
  {
    title: "What is JAC?",
    content:
      "-",
  },
]

export default function ContactPage() {
  return (
    <div>
          <div style={{ height: '212px' }} className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-8">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-5xl md:text-5xl font-extrabold text-white drop-shadow-lg">
         Contact Us
        </h1>

        <p className="text-lg sm:text-sm md:text-lg lg:text-xl  font-medium text-white drop-shadow-md">
          Get in Touch with JCI Ponda
        </p>
      </div>

      {/* Contact Profiles Section */}
      <Section title="Contact Our Leadership">
        <div className="flex flex-wrap justify-center gap-8">
          {contactProfiles.map((profile, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-sm">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{profile.position}</p>
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{profile.phone}</span>
                </div>
                <Button asChild>
                  <a href={`https://wa.me/${profile.phone}`}target="_blank" rel="noopener noreferrer">Contact Me</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Info Cards Section */}
      <Section title="Frequently Asked Questions" className="bg-gray-50 dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{card.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Information */}
      <Section title="JCI Ponda Office">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      JCI Ponda Office, Main Street
                      <br />
                      Ponda, Goa 403401
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@jciponda.org</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="md:w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-300 text-center">Google Maps will be embedded here</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

