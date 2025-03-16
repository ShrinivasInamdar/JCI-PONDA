import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Developer = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full md:w-48 object-cover"
                src="src/images/IMG_2277.jpg"
                alt="Developer"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                Frontend Dev
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Shrinivas Inamdar
              </h2>
              <p className="mt-4 text-gray-600">
              Passionate about crafting stunning front-end experiences and exploring the endless possibilities of tech!
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://github.com/ShrinivasInamdar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shrinivas-inamdar-a83a30237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:shrinivasinamdar6@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Technologies Used',
              description: 'React, TypeScript, Tailwind CSS, Framer Motion',
              icon: Code
            },
            {
              title: 'Development Time',
              description: 'Completed in 2 weeks',
              icon: Code
            },
            {
              title: 'Project Scope',
              description: 'Full website development for JCI Ponda',
              icon: Code
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <item.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Developer;