export default function JuniorJayceePage() {
  return (
    <div>
       <div  style={{ height: '212px' }} className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center space-y-4 pt-8">
        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>

        {/* Centered Texts */}
        <h1 className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          Junior Jaycee Wing
        </h1>

        <p className="text-2xl md:text-2xl font-medium text-white drop-shadow-md">
    Nuturing young leaders through training and mentorship programs.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're currently working on this page. Please check back later for updates on our Junior Jaycee Wing activities
          and programs.
        </p>
      </div>
    </div>
  )
}

