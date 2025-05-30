const About = () => {
    return (
      <section id="about" className="py-20 bg-gray-50 mt-72">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">50+</h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">5+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">1000+</h3>
              <p className="text-gray-600 text-sm">Cups of Coffee</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">100%</h3>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
          </div>
  
          <div className="flex justify-center">
            {/* Personal Info */}
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">MU</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Muhammad Usaid</h3>
                  <p className="text-purple-600 font-medium">Frontend Developer</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                
"Im a passionate Frontend Developer based in Karachi specializing in crafting beautiful and intuitive user interfaces. With expertise in modern frontend technologies and frameworks and i transform creative designs into seamless and responsive web experiences."
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My journey in frontend development began with curiosity about how websites work and has evolved into a professional career dedicated to crafting exceptional user experiences and pixel-perfect interfaces.
              </p>
  
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <span className="text-gray-500 text-sm block">Location</span>
                  <p className="font-medium text-gray-900">Karachi Pakistan</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm block">Experience</span>
                  <p className="font-medium text-gray-900">1+ Years</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm block">Specialization</span>
                  <p className="font-medium text-gray-900">Frontend Development</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm block">Availability</span>
                  <p className="font-medium text-purple-600">Available for Projects</p>
                </div>
              </div>
  
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
