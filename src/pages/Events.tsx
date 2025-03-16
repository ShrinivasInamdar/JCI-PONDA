import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import type { Event } from '../types';

const Events = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const events: Event[] = [
    {
      id: '1',
      title: 'Community Service Day',
      date: '2024-01-01',
      description: 'Join us for a day of giving back to our local community through various service projects.',
      imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=500',
      category: 'past'
    },
    {
      id: '2',
      title: 'Leadership Summit',
      date: '2023-12-15',
      description: 'Annual leadership conference focusing on personal development and community impact.',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500',
      category: 'past'
    },
    {
      id: '3',
      title: 'New Year Celebration',
      date: '2023-12-31',
      description: 'Celebrating the new year with fellow JCI members and community leaders.',
      imageUrl: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=500',
      category: 'past'
    }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Past Events</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore our successful events and achievements
          </p>
        </motion.div>

        <SearchBar
          placeholder="Search events..."
          onSearch={setSearchQuery}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
                <button
                  onClick={() => navigate('/reports')}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;