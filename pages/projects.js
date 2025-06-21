import Layout from '../components/layout/Layout';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { useState } from 'react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'web', name: 'Web Apps' },
    { id: 'api', name: 'APIs' },
  ];

  const projects = [
    {
      id: 1,
      title: 'GOFood',
      description:
        'An online food delivery app using React, Node.js, MongoDB, and Express.js. Includes login, cart, and responsive UI.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
      githubUrl: 'https://github.com/SurajBiswal/gofood',
      liveUrl: '',
      image: '/images/projects/gofood.png',
    },
    {
      id: 2,
      title: 'EmailGenie - AI Chrome Extension',
      description:
        'Chrome extension using Gemini AI to auto-generate Gmail replies, improving productivity for professionals.',
      technologies: ['ReactJS', 'Material UI', 'Java', 'Gemini API'],
      githubUrl: 'https://github.com/SurajBiswal/EmailGenie',
      liveUrl: '',
      image: '/images/projects/emailgenie.png',
    },
    {
      id: 3,
      title: 'RouteMate',
      description:
        'Spring Boot-based backend for ride-sharing with booking, live location, and role-based access using PostGIS.',
      technologies: ['Spring Boot', 'JWT', 'PostgreSQL', 'PostGIS', 'AWS'],
      githubUrl: 'https://github.com/SurajBiswal/RouteMate',
      liveUrl: '',
      image: '/images/projects/routemate.png',
    },
    {
      id: 4,
      title: 'Developer Portfolio',
      description:
        'Responsive portfolio built using Next.js, React, and Tailwind CSS to showcase full stack development work.',
      technologies: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/SurajBiswal/Suraj_Biswal_Portfolio',
      liveUrl: 'https://surajbiswalportfolio.vercel.app/',
      image: '/images/projects/portfolio.png',
    },
    {
      id: 5,
      title: 'Job Application System (Ongoing)',
      description:
        'Microservice-based job application backend built with Spring Boot, Docker, AWS, RabbitMQ, and Java.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'AWS', 'RabbitMQ'],
      githubUrl: 'https://github.com/SurajBiswal/job-application',
      liveUrl: '',
      image: '/images/projects/jobapp.png',
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : selectedFilter === 'featured'
      ? projects.filter((p) => p.title !== 'Job Application System (Ongoing)')
      : selectedFilter === 'web'
      ? projects.filter((p) =>
          ['React', 'Next.js', 'Spring Boot'].some((tech) =>
            p.technologies.includes(tech)
          )
        )
      : selectedFilter === 'api'
      ? projects.filter((p) =>
          ['Node.js', 'Spring Boot'].some((tech) =>
            p.technologies.includes(tech)
          )
        )
      : projects;

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
  };

  return (
    <Layout
      title="Projects | Suraj Biswal | Full Stack Developer Portfolio"
      description="Explore Suraj Biswal's full stack development projects using React, Node.js, Java, Spring Boot, APIs, and microservices. View source code and live demos."
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A curated portfolio of full stack applications, APIs, and development tools.
            </p>
          </header>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <FiFilter className="text-gray-400 mt-2" size={20} />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview image`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 responsive-text">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="mr-2" size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
