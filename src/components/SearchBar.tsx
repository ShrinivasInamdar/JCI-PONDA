import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;