import { Section } from "@/components/section"
import { Card } from "@/components/card"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import galaxy from "./images/galaxy.jpg"
import { Instagram } from "lucide-react"
import jci from "./images/jci.jpg"
import jciindia from "./images/jciindia.jpg"
import jciponda from "./images/jciponda.jpg"

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
          <br />
          NATIONAL VICE PRESIDENT
          <br />
          AREA - A , JCI INDIA
          <br />
        </>
      ),
      image: "/leaders_images/nvp.png",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Mukesh",
      position: (
        <>
          <br />
          ZONE OFFICER
          <br />
          AREA - A , JCI INDIA
          <br />
        </>
      ),
      image: "/leaders_images/nvp.png",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Dhunhill",
      position: (
        <>
          <br />
          ZONE VICE PRESIDENT
          <br />
          JCI INDIA
          <br />
          Half Centurion LO
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Sneha",
      position: (
        <>
          <br />
          ZONE DIRECTOR - LADY JAYCEE 
          <br />
          Half Centurion LO
          <br />
          Outstanding President of Zone XI, Runners-up 
          <br />
          Outstanding LO of Zone, Runners-up 
          <br />
          100 % efficient LO
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Shashikant Phadte",
      position: (
        <>
          JCI INDIA
          <br />
          100% Efficient LO
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Thejus Shenoy",
      position: (
        <>
          <br />
          ZONE OFFICER
          <br />
          JCI INDIA
          <br />
          1 LO Extension 
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Rahul",
      position: (
        <>
          
          <br />
          
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Varun Pandey",
      position: (
        <>
          <br />
          ZONE OFFICER
          <br />
          JCI INDIA
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Akshay Patil",
      position: (
        <>
          <br />
          ZONE Director Business
          <br />
          JCI INDIA
          <br />
          Half Centurion LO 
          <br />
          Golden Collar
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },


    {
      name: "JFS Janhavi Naik",
      position: (
        <>
          JCI INDIA
          <br />
          Outstanding LO of Zone XI, Winner 
          <br />
          Outstanding JCI Officer winner at National Convention 
          <br />
          100 % efficient LO
          <br />
          Outstanding OLOSP project 
          <br />
          1 LO extension 
          <br />
          Golden Gavel
          <br />
          Half Centurion LO

        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Akash",
      position: (
        <>
          
          <br />
          JCI INDIA
          <br />
          Recognition for 50 glorious years at National Meet. 
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

    {
      name: "JFS Vadiraj",
      position: (
        <>
          
          <br />
          JCI INDIA
          <br />
        </>
      ),
      image: "/leaders_images/ankur.jpg",
      region: "",
      social: {
        instagram: "#",
      },
    },

  ],

}

export default function AboutPage() {
  return (
    <div>
      <div style={{ height: '212px' }} className="relative w-full  bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-12">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-5xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          About us
        </h1>
        <p className="text-lg sm:text-lg md:text-lg lg:text-xl  font-medium text-white drop-shadow-md">
          Learn more about JCI, our history, and our mission
        </p>
      </div>

      {/* What is JCI Section */}
      <Section title="What is JCI">
        <AnimatedCard direction="left">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={jci.src}
                  alt="JCI Logo"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold mb-4">Junior Chamber International</h3>
                <p className="mb-4 font-light">
                Junior Chamber International (JCI) is a worldwide federation of young leaders and entrepreneurs with nearly five lakh active members and millions of alumni spread across more than 115 countries.
                </p>
                <p className="mb-4 font-light">
                JCI orgin can be traced back to 1915 to the city of St. Louis, Missouri, USA where Sir Henry Giessenbier with 32 other young men established Young Men's Progressive Civic Association (YMPCA)
                </p>
                <p className="mb-4 font-light">
                In 1916, the name was changed from YMPCA to "Junior Citizens", commonly called "JCs", which later became "Jaycees"
                </p>
                <p className="mb-4 font-light">
                Their work so impressed the St. Louis Junior chamber of Commerce that they asked these young men in 1918 to adopt the name “Junior Chamber of Commerce” which later became “Junior Chamber”
                </p>
                <p className="font-light">
                By 1944, the movement had spread through 18 countries officially forming "Junior Chamber International", welcoming people between age 18 and 40 years
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* JCI INDIA Section */}
      <Section title="JCI INDIA" className="bg-gray-50 dark:bg-gray-900">
        <AnimatedCard direction="right">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold mb-4">JCI India</h3>
                <p className="mb-4 font-light">
                JCI India is a voluntary organization, membership based NGO working in India since 1949 for developing the leadership skills of young men and women of this country. It is affiliated to Junior Chamber International(JCI),a worldwide federation of young leaders and entrepreneurs founded in 1944, having headquarter at Chester Field USA. Currently it has over 200,000 active members and more than one million graduates, in over 100 countries and 6,000 communities.
                </p>
                <p className="mb-4 font-light">
                JCI India is the Second largest Member Nation of Junior Chamber International. Currently we are active in more than 26 states and union territories across India.
                </p>
                <p className="mb-4 font-light">
                The membership is offered to everybody regardless of color, cast and creed between the age of 18 -40 years. Junior Chamber International India is registered under Societies Registration Act, Bombay Public Trust Act and Income Tax Act of India.
                </p>
                <p className="font-light">
                In the last 64 years we are able to produce thousands of social and business leaders all over the country through our intensive project based training activities
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                 src={jciindia.src}
                  alt="JCI India Logo"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* JCI Ponda Section */}
      <Section title="JCI Ponda">
        <AnimatedCard direction="left">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
               src={jciponda.src}
                  alt="JCI Ponda Logo"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold mb-4">JCI Ponda</h3>
                <p className="mb-4 font-light">
                  JCI Ponda is a local chapter of JCI India, established to serve the Ponda community in Goa. Since its
                  inception, JCI Ponda has been at the forefront of community development and leadership training in the
                  region.
                </p>
                <p className="mb-4 font-light">
                  Our chapter focuses on implementing impactful projects that address local challenges while providing
                  members with opportunities to develop their skills and network with like-minded individuals.
                </p>
                <p className="font-light">
                  Through various initiatives in education, health, environment, and community welfare, JCI Ponda
                  continues to make a significant difference in the lives of Ponda residents while nurturing the next
                  generation of leaders.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* Galaxy of Past Presidents */}
      <Section title="" className="bg-gray-50 dark:bg-gray-900">
        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center gal">
            <h2 className="text-2xl font-serif text-blue-800 font-semibold">GALAXY OF PAST PRESIDENTS</h2>
            <div className="text-center mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                Honoring the visionary leaders who have guided JCI Ponda through the years
              </p>
            </div>
          </div>

        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md image">
          {/* <div className="text-center mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Honoring the visionary leaders who have guided JCI Ponda through the years
            </p>
          </div> */}
          <div className="w-full">
            <img
              src={galaxy.src}
              alt="Past Presidents of JCI Ponda"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* Leaders Section */}
      <Section title="" >
        {/* National Leaders */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-6 text-center">
            <h2 className="text-2xl font-serif text-blue-800 font-semibold">ACHIVEMENTS OF PAST PRESIDENTS</h2>
          </div>
          <div className="top flex justify-center gap-8 flex-wrap ">
            {leaders.national.map((leader, index) => (
              <AnimatedCard key={index} direction="up" delay={index * 150}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 h-[350px] flex flex-col items-center">
                  {/* <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="card-image"
                    />
                  </div> */}
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
    </div>


  )
}

