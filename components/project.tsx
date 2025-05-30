export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      link: "https://your-ecommerce-project.vercel.app",
      github: "https://github.com/usaidkhan123/Hackathon-Three-MarketPlace.git",
    },
    {
      title: "Frontend Only",
      description: "Designed and developed a pixel-perfect UI for this website, ensuring every element aligns with the original design vision.",
      tech: ["Next.js", "Html", "Tailwind", "Shadcn Ui"],
      link: "https://next-js-assignment-6-figma-design-xijx.vercel.app/",
      github: "https://github.com/usaidkhan123/Next.Js-Assignment-6-FigmaDesign.git",
    },
    {
      title: "Blog Website",
      description: "A responsive weather dashboard with current conditions and forecasts.",
      tech: ["Next.js", "Tailwind", "Sanity", "React"],
      link: "https://milestone3-assdignment-blogwebsite-zj5w.vercel.app/",
      github: "https://github.com/usaidkhan123/Milestone3-Assdignment-Blogwebsite..git",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-600">
          Recent projects showcasing my skills and passion for creating innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors inline-block"
              >
                View Project
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors inline-block"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}