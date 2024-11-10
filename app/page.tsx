import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 text-center px-6 md:px-12 py-24 mx-auto max-w-7xl">
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Welcome to the Home Page
        </h1>
        
        {/* Description Section */}
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          This is the homepage of our simple multi-page website built with React and TypeScript. We hope you enjoy your visit!
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg transform transition-all hover:scale-105"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
