import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import type { Leader } from '../types';

const Contact = () => {
  const leaders: Leader[] = [
    {
      name: 'Vadiraj Inamdar',
      position: 'President',
      imageUrl: 'https://drive.google.com/file/d/1UXFuWIhtypuz_onxXSQ47NO2Dub7pci6/view?usp=share_link',
      contact: {
        email: 'vadirajinamdar4@gmail.com',
        phone: '-'
      }
    },
    {
      name: 'Muskan Naik',
      position: 'Secretary',
      imageUrl: 'src/images/1722509376448.jpeg',
      contact: {
        email: '-',
        phone: '-'
      }
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Get in touch with our leadership team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={leader.imageUrl}
                    alt={leader.name}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {leader.position}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {leader.name}
                  </h2>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-2" />
                      <a href={`mailto:${leader.contact.email}`} className="hover:text-blue-600">
                        {leader.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-2" />
                      <a href={`tel:${leader.contact.phone}`} className="hover:text-blue-600">
                        {leader.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-gray-700 mb-6">
            JCI Ponda Office<br />
            123 Main Street<br />
            Ponda, Goa 403401<br />
            India
          </p>
          <div className="aspect-w-16 aspect-h-9">
            {/* Add Google Maps iframe here */}
            <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;