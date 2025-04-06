"use client"
import { Carousel } from "@/components/carousel"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react";
import { Poppins } from 'next/font/google';
import HeroSection from "@/components/hero"
import Leaders from "@/components/leaders"
import '../styles/globals.css'; // ← Correct path based on your folder structure



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

// Sample data for past events
const pastEvents = [
  {
    title: "Community Clean-up Drive",
    description:
      "We organized a community clean-up drive at Ponda Beach, collecting over 200kg of waste and raising awareness about environmental conservation.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 Mar 2025",
    link: "/events/community-cleanup",
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

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Welcome Header */}
      <div>
      <HeroSection />

      </div>
  
      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-8">
        <Carousel slides={carouselSlides} />
      </div>

      {/* Vision & Mission Section */}
      <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          Vision, Creed & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be the leading global network of young active citizens. We envision a world where young people have the
              capacity to create positive change in their communities, creating a better future for all.
            </p>
          </div>

          {/* Creed */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Creed</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be the leading global network of young active citizens. We envision a world where young people have the
              capacity to create positive change in their communities, creating a better future for all.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To provide development opportunities that empower young people to create positive change. We focus on personal
              development, community service, and international cooperation to build a better world.
            </p>
          </div>
        </div>
      </section>



      {/* Leader 2025 Section */}
      <Section title="Leader 2025">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="JCI Ponda Leader 2025"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">JC Vadiraj Inamdar</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">President, JCI Ponda 2025</p>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Leading JCI Ponda with a vision to empower young citizens and create sustainable impact in our community
            through innovative projects and leadership development.
          </p>
        </div>
      </Section>

      {/* Past Events Section */}
      <Section
        title="Past Events"
        description="A glimpse of our recent activities and initiatives"
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
              linkText="Read More"
            />
          ))}
        </div>
      

        <div className="flex justify-center mt-8">
          <Link href="/reports">
            <button className="button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              <span className="button-content">Read More Reports</span>
            </button>
          </Link>
        </div>

      </Section>

      {/* Latest Events Section */}
      {/* <Section
        title="Latest Events"
        description="Stay updated with our most recent activities and initiatives"
        className="bg-gray-50 dark:bg-gray-900"
      > */}
      {/* 
          =============================================
          LATEST EVENTS CARDS
          =============================================
          To update the latest events on the homepage:
          1. Replace the event details below with your newest events
          2. Make sure the "link" property points to the correct event detail page
          3. The URL should match the slug in the events object in [slug]/page.tsx
          =============================================
        */}
      {/* <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Leadership Workshop 2025"
            description="An intensive workshop focused on developing essential leadership skills for young professionals in our community."
            image="/placeholder.svg?height=200&width=300"
            date="15 Mar 2025"
            link="/events/leadership-workshop" // This should match the slug in the events object
            linkText="Click More"
          />
          <Card
            title="Environmental Awareness Drive"
            description="A community initiative to raise awareness about environmental conservation and sustainable practices."
            image="/placeholder.svg?height=200&width=300"
            date="28 Feb 2025"
            link="/events/community-cleanup" // This should match the slug in the events object
            linkText="Click More"
          />
          <Card
            title="Youth Entrepreneurship Summit"
            description="A platform for young entrepreneurs to showcase their ideas and connect with mentors and investors."
            image="/placeholder.svg?height=200&width=300"
            date="10 Feb 2025"
            link="/events/health-camp" // This should match the slug in the events object
            linkText="Click More"
          />
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </Section> */}
    </div>
  )
}

