import { Code, Palette, GitBranch, Smartphone, Globe, Zap } from 'lucide-react';

const experiences = [
  {
    title: "Next.js",
    description: "Building performant web applications with server-side rendering.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "React.js",
    description: "Creating interactive user interfaces with modern components.",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "TypeScript",
    description: "Writing type-safe code that reduces bugs and improves productivity.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Tailwind CSS",
    description: "Crafting beautiful designs with utility-first CSS framework.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Responsive Design",
    description: "Creating websites that work perfectly on all devices.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Git",
    description: "Managing code versions and team collaboration effectively.",
    icon: <GitBranch className="w-6 h-6" />
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Experience</h2>
          <p className="text-lg text-gray-600">
            Technologies I work with to create exceptional digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                {exp.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {exp.title}
              </h3>
              
              <p className="text-gray-600">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;