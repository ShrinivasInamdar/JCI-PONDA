"use client";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/section";
import galaxy from "./galaxy.jpg";
import Image from "next/image";

export default function AboutPage() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [visibleSections, setVisibleSections] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSections((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Learn more about JCI, our history, and our mission</p>
        </div>
      </div>

      {/* What is JCI Section */}
      <div
        ref={sectionRefs[0]}
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections[0] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      >
        <Section title="What is JCI">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="JCI Logo"
                  className="w-full max-w-full rounded-lg object-contain"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Junior Chamber International (JCI) is a non-profit international non-governmental organization of young
                  people between 18 and 40 years old. It has members in about 124 countries, and regional or national
                  organizations in most of them.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  JCI's mission is to provide development opportunities that empower young people to create positive
                  change. The organization focuses on four main areas of opportunity: business development, individual
                  development, community development, and international cooperation.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Through these areas, JCI members develop skills, knowledge, and understanding to make informed decisions
                  and take action. JCI members are young active citizens—people who are dedicated to creating positive
                  change in their communities.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* JCI INDIA Section */}
      <div
        ref={sectionRefs[1]}
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections[1] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
        }`}
      >
        <Section title="JCI INDIA" className="bg-gray-50 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  JCI India is one of the largest national organizations within the JCI global network. Established in
                  1947, JCI India has grown to become a significant force for positive change across the country.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  With hundreds of local chapters spread throughout India, JCI India provides a platform for young Indians
                  to develop leadership skills, social responsibility, entrepreneurship, and fellowship necessary to
                  create positive change in their communities.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  JCI India conducts numerous national programs focused on community development, skill enhancement, and
                  leadership training. These initiatives have touched millions of lives and continue to make a significant
                  impact on Indian society.
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="JCI India Logo"
                  className="w-full max-w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* JCI Ponda Section */}
      <div
        ref={sectionRefs[2]}
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections[2] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      >
        <Section title="JCI Ponda">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="JCI Ponda Logo"
                  className="w-full max-w-full rounded-lg object-contain"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  JCI Ponda is a local chapter of JCI India, established to serve the Ponda community in Goa. Since its
                  inception, JCI Ponda has been at the forefront of community development and leadership training in the
                  region.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our chapter focuses on implementing impactful projects that address local challenges while providing
                  members with opportunities to develop their skills and network with like-minded individuals.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Through various initiatives in education, health, environment, and community welfare, JCI Ponda
                  continues to make a significant difference in the lives of Ponda residents while nurturing the next
                  generation of leaders.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Galaxy of Past Presidents */}
      <div
        ref={sectionRefs[3]}
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections[3] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
        }`}
      >
        <Section title="Galaxy of Past Presidents" className="bg-gray-50 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md container mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                Honoring the visionary leaders who have guided JCI Ponda through the years
              </p>
            </div>
            <div className="w-full">
              <Image
                src={galaxy}
                alt="Past Presidents of JCI Ponda"
                className="w-full max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
