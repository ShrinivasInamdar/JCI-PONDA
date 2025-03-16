import { motion } from 'framer-motion';
import { FileText, Download, Search } from 'lucide-react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import type { Report } from '../types';

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const reports: Report[] = [
    {
      id: '1',
      title: 'Annual Report 2024',
      date: '2024-12-31',
      pdfUrl: '#',
      description: 'Comprehensive overview of JCI Ponda\'s activities and achievements in 2024.'
    },
    {
      id: '2',
      title: 'Community Impact Report',
      date: '2024-11-15',
      pdfUrl: '#',
      description: 'Detailed analysis of our community service projects and their impact.'
    },
    {
      id: '3',
      title: 'Leadership Training Summary',
      date: '2024-10-01',
      pdfUrl: '#',
      description: 'Report on leadership development programs conducted throughout the year.'
    }
  ];

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Reports</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Access detailed reports of our activities and achievements
          </p>
        </motion.div>

        <SearchBar
          placeholder="Search reports..."
          onSearch={setSearchQuery}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReports.map((report) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{report.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {new Date(report.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{report.description}</p>
              <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 dark:bg-gray-700 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upload a Report</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Members can upload new reports using the form below
          </p>
          <div className="flex items-center justify-center w-full">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg tracking-wide uppercase border border-blue-600 dark:border-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
              <FileText className="w-8 h-8" />
              <span className="mt-2 text-base">Select a PDF file</span>
              <input type="file" className="hidden" accept=".pdf" />
            </label>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;