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
          <p className="text-lg text-gray-700">
            Meet the developer behind this website
          </p>
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
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500"
                alt="Developer"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                Full Stack Developer
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                John Developer
              </h2>
              <p className="mt-4 text-gray-600">
                Passionate about creating beautiful and functional web applications
                using modern technologies.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:developer@example.com"
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