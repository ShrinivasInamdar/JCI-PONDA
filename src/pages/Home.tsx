import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Target, Calendar } from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#0284c7" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#0284c7", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          },
          retina_detect: true
        }}
        className="absolute inset-0"
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-blue-600/90 to-blue-800/90 flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to JCI Ponda
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Empowering Young Leaders for a Better Tomorrow
            </p>
            <img
              src="src/images/JCI Ponda - 20250210174700 Logo.png"
              alt="JCI Ponda Logo"
              className="mx-auto h-32 mb-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section with Glass Effect */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To provide development opportunities that empower young people to create positive change.
              </p>
              <ul className="space-y-4">
                {[
                  'Leadership Development',
                  'Community Service',
                  'Personal Growth',
                  'International Cooperation'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <ArrowRight className="text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                To be the leading global network of young active citizens.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, label: 'Excellence' },
                  { icon: Users, label: 'Community' },
                  { icon: Target, label: 'Impact' },
                  { icon: Calendar, label: 'Growth' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 bg-blue-50/50 rounded-xl backdrop-blur-sm hover:bg-blue-100/50 transition-all"
                  >
                    <item.icon className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-gray-900 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-lg text-gray-700">
              Explore our successful events and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Service Day',
                date: '2024-01-01',
                description: 'Join us for a day of giving back to our local community through various service projects.',
                image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=500'
              },
              {
                title: 'Leadership Summit',
                date: '2023-12-15',
                description: 'Annual leadership conference focusing on personal development and community impact.',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500'
              },
              {
                title: 'New Year Celebration',
                date: '2023-12-31',
                description: 'Celebrating the new year with fellow JCI members and community leaders.',
                image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=500'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => navigate('/reports')}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;