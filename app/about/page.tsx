import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6 sm:px-12 lg:px-24 min-h-screen">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-16 rounded-xl mb-16 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">About Us</h1>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto font-medium">
          Learn more about our project&apos;s journey built with React and TypeScript.
        </p>
      </section>

      {/* About Content Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-4xl font-semibold text-indigo-600 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to create scalable, efficient, and beautiful web applications that provide lasting value to our users. We use modern technologies like React and TypeScript to build high-quality, maintainable applications.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-indigo-600 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We started as a small team of passionate developers with a shared vision. Over time, we&apos;ve grown into a dedicated team focused on creating cutting-edge applications and delivering innovative solutions for our clients.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-semibold text-center text-indigo-600 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="" alt="Bakar" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Bakar</h3>
              <p className="text-pink-500">Lead Developer</p>
              <p className="text-gray-600 mt-4">
                Bakar is the backbone of our development team, turning complex challenges into elegant solutions.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="" alt="Ali" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ali</h3>
              <p className="text-pink-500">UI/UX Designer</p>
              <p className="text-gray-600 mt-4">
                Ali brings the magic to our interfaces with her creative and user-centric designs.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="" alt="Kashif" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kashif</h3>
              <p className="text-pink-500">Project Manager</p>
              <p className="text-gray-600 mt-4">
                Kashif keeps our projects on track and ensures smooth collaboration across teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
