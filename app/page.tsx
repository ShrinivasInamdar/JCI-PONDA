import { Carousel } from "@/components/carousel"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"
<link rel="icon" href="JCI-logo.png" />
import chakra from '../public/chakra.png';
import Image from "next/image";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']// include weights you plan to use
});
// Sample data for carousel
const carouselSlides = [
  {
    image: "/placeholder.svg?height=400&width=800",
    title: "JCI Ponda Community Service",
    description: "Making a difference in our community through active citizenship",
  },
  {
    image: "/placeholder.svg?height=400&width=800",
    title: "Leadership Development",
    description: "Building tomorrow's leaders through training and opportunities",
  },
  {
    image: "/placeholder.svg?height=400&width=800",
    title: "Networking Events",
    description: "Connect with like-minded individuals and grow your network",
  },
]

// Sample data for Upcoming events
const pastEvents = [
  {
    title: "Community Clean-up Drive",
    description:
      "We organized a community clean-up drive at Ponda Beach, collecting over 200kg of waste and raising awareness about environmental conservation.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Mar 2025",
    link: "#",
  },
  {
    title: "Leadership Workshop",
    description:
      "A workshop focused on developing leadership skills among youth, featuring speakers from various industries sharing their experiences.",
    image: "/placeholder.svg?height=200&width=300",
    date: "28 Feb 2025",
    link: "/events/leadership-workshop",
  },
  {
    title: "Health Awareness Camp",
    description:
      "Free health check-ups and awareness sessions on preventive healthcare for the local community members.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 Feb 2025",
    link: "/events/health-camp",
  },
]

const jciPillars = [
  {
    title: "Leadership development programs",
    icon: "/pillars_icons/leadership.png"
  },
  {
    title: "Self-development trainings",
    icon: "/pillars_icons/selfdevelopment.png"
  },
  {
    title: "Business development connections",
    icon: "/pillars_icons/businessdevelopment.png"
  },
  {
    title: "Community benefitting projects",
    icon: "/pillars_icons/community.png"
  },
  {
    title: "Uplifting the economically deprived",
    icon: "/pillars_icons/uplifting.png"
  },
  {
    title: "Together building a better world",
    icon: "/pillars_icons/world.png"
  },
]

// Sample data for leaders
const leaders = {
  national: [
    {
      name: "JFS ANKUR JHUNJHUNWALA",
      position: (
        <>
          NATIONAL PRESIDENT
          <br />
          JCI INDIA
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },
    {
      name: "JFS ASHOK BHAT",
      position: (
        <>
          National Vice President
          <br />
          AREA - A , JCI INDIA
        </>
      ),
      image: "/leaders_images/nvp.png",
      region: "",
      social: {
        instagram: "#",
      },
    },
  ],
  zone: [
    {
      name: "JFD SHABA GAUNS",
      position: (
        <>
          ZONE PRESIDENT
          <br />
          ZONE 11
          <br />
          JCI INDIA

        </>
      ),
      image: "/leaders_images/zp.png",
      region: "",
      social: {
        instagram: "#",
      },
    },
    {
      name: "JC HGF SHILPA RAGHAVA SILVERA",
      position: (
        <>
          ZONE VICE PRESIDENT
          <br />
          REGION - C
          <br />
          JCI INDIA ZONE 11
        </>
      ),
      image: "/leaders_images/zvp.jpg",
      social: {
        instagram: "#",
      },
    },
  ],
  local: [
    {
      name: "JC VADIRAJ INAMDAR",
      position: "LOCAL ORGANISATION PRESIDENT",
      image: "/leaders_images/vadiraj.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },
  ],
}

export default function Home() {
  return (
    <div>
      {/* Anniversary Banner */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center">
        <p className="text-2xl font-serif text-blue-800 font-semibold">Celebrating 53 Glorious Years of JCI Ponda</p>
      </div>

      {/* Carousel Section */}
      <div className="w-full py-8">
        <Carousel slides={carouselSlides} />
      </div>

      {/* Vision, Creed & Mission Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex justify-center mb-8">
          <AnimatedCard direction="fade">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500" id="container">
              <img src="/jcitm.png" alt="JCI Logo" id="img" />
            </div>
          </AnimatedCard>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCard direction="left" delay={100}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 h-[510px] flex flex-col items-center justify-center">
              <h3 className="text-3xl font-extrabold mb-6 text-center font-serif">Our Vision</h3>
              <p className="text-2xl text-center leading-relaxed">
                To be the foremost global network of young leaders.
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard direction="up" delay={200}>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 h-[510px] flex flex-col items-center justify-center">
              <h3 className="text-3xl font-extrabold mb-6 text-center font-serif">JCI Creed</h3>
              <p className="text-center italic text-[17.5px] leading-relaxed">
                We believe:
                <br />
                That faith in God gives meaning and purpose to human life;
                <br />
                That the brotherhood of man transcends the sovereignty of nations;
                <br />
                That economic justice can best be won by free men through free enterprise;
                <br />
                That government should be of laws rather than of men;
                <br />
                That earth's great treasure lies in human personality;
                <br />
                And that service to humanity is the best work of life.
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard direction="right" delay={300}>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 h-[510px] flex flex-col items-center justify-center">
              <h3 className="text-3xl font-extrabold mb-6 text-center font-serif">Our Mission</h3>
              <p className="text-2xl text-center leading-relaxed">
                To provide leadership development opportunities that empower young people to create positive change.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>

      {/* JCI Pillars Section */}
      <Section
        title="What's in it for you - The JCI Experience"
        description="Discover how JCI empowers young leaders"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {jciPillars.map((pillar, index) => {
            const gradients = [
              "from-cyan-600 to-blue-700",     // Leadership (clear + calm)
              "from-purple-600 to-pink-500",   // Self-development (vibrant but balanced)
              "from-teal-600 to-green-500",    // Business connections (strong contrast)
              "from-orange-600 to-yellow-500", // Community projects (careful: light icons might clash)
              "from-rose-600 to-red-500",      // Uplifting (rich warm tones)
              "from-indigo-600 to-blue-800",   // Together better world (deep tones, great contrast)
            ];

            return (
              <AnimatedCard key={index} direction="up" delay={index * 100}>
                <div className={`bg-gradient-to-br ${gradients[index]} text-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center h-[200px] hover:shadow-lg transition-shadow`}>
                  <div className="w-16 h-16 mb-3">
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{pillar.title}</h3>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

      </Section>

      {/* Leaders Section */}
      <Section title="">
  {/* Heading */}
  <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center">
    <h2 className="text-2xl font-serif text-blue-800 font-semibold">Leaders 2025</h2>
  </div>

  {/* National + Zone Leaders side-by-side */}
  <div className="flex flex-col lg:flex-row gap-6 mt-8 px-4 lg:px-16">
    
    {/* National Leaders */}
    <div className="w-full lg:w-1/2 mb-12">
      <h3 className="text-2xl font-serif text-center text-blue-800 font-semibold mt-4">National Leaders</h3>
      <div className="flex justify-center gap-8 flex-wrap mt-5">
        {leaders.national.map((leader, index) => (
          <AnimatedCard key={index} direction="up" delay={index * 150}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 h-[350px] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                <img src={leader.image} alt={leader.name} className="card-image" />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{leader.position}</p>
                <div className="flex space-x-4 mt-auto">
                  <a href={leader.social.instagram} className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>

    {/* Zone Leaders */}
    <div className="w-full lg:w-1/2 mb-12">
      <h3 className="text-2xl font-serif text-center text-blue-800 font-semibold mt-4">Zone Leaders</h3>
      <div className="flex justify-center gap-8 flex-wrap mt-5">
        {leaders.zone.map((leader, index) => (
          <AnimatedCard key={index} direction="up" delay={index * 150}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 h-[350px] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                <img src={leader.image || "/placeholder.svg"} alt={leader.name} className="card-image" />
              </div>
              <div className="flex flex-col items-center flex-grow">
                <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{leader.position}</p>
                <div className="flex space-x-4 mt-auto">
                  <a href={leader.social.instagram} className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </div>

  {/* Local Organisation President - centered below */}
  <div className="w-full flex flex-col items-center mt-8 px-4">
    <h3 className="text-2xl font-serif text-center text-blue-800 font-semibold">
      Local Organisation President
    </h3>
    <div className="flex justify-center mt-5 flex-wrap gap-6">
      {leaders.local.map((leader, index) => (
        <AnimatedCard key={index} direction="up" delay={index * 150}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 h-[350px] flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
              <img
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center flex-grow">
              <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
              <p className="text-blue-600 dark:text-blue-400 mb-4">{leader.position}</p>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={leader.social.instagram}
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  </div>
</Section>


      {/* Upcoming Events Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center">
        <h2 className="text-2xl font-serif text-blue-800 font-semibold">Upcoming Events</h2>
        <br />
        <h3 className="text-1xl font-serif text-blue-800 font-semibold">Stay updated with our most recent activities and initiatives</h3>
      </div>
      <Section
        title=""

        description=""
        className="bg-gray-50 dark:bg-gray-900"
      >
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              date={event.date}
              link={event.link}
              linkText="Register"
              index={index}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div> */}
        {/* <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/reports">More Reports - Click Here</Link>
          </Button>
        </div> */}
      </Section>

      {/* Latest Events Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center">
        <h2 className="text-2xl font-serif text-blue-800 font-semibold">Past Events</h2>
        <br />
        <h3 className="text-1xl font-serif text-blue-800 font-semibold">A glimpse of our recent activities and initiatives</h3>
      </div>
      <Section title="" description=" ">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="JCI Action Framework"
            description="An intensive workshop focused on developing essential leadership skills for young professionals in our community."
            image="/event_photos/32.jpg?height=200&width=300"
            date="31 Mar 2025"
            link="/events/JCI-Action-Framework"
            linkText="Read More"
            index={0}
            direction="up"
          />
          <Card
            title="Effective Public Speaking"
            description="A community initiative to raise awareness about environmental conservation and sustainable practices."
            image="/event_photos/31.jpg?height=200&width=300"
            date="28 Feb 2025"
            link="/events/Effective-Public-Speaking"
            linkText="Read More"
            index={1}
            direction="up"
          />
          <Card
            title="JCOM Meet 1.0"
            description="A platform for young entrepreneurs to showcase their ideas and connect with mentors and investors."
            image="/event_photos/30.jpg?height=200&width=300"
            date="10 Feb 2025"
            link="/events/JCOM-Meet-1.0"
            linkText="Read More"
            index={2}
            direction="up"
          />
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/reports">View All Events</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}

