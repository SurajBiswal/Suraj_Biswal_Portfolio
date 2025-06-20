import Layout from '../components/layout/Layout';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    import('../data/projects.json').then(data => {
      setProjects(data.default);
      setFilteredProjects(data.default);
    });
  }, []);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'web', name: 'Web Apps' },
    { id: 'api', name: 'APIs' },
  ];

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
    if (filterId === 'all') {
      setFilteredProjects(projects);
    } else if (filterId === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects); // You can extend this logic
    }
  };

  return (
    <Layout title="Portfolio - Suraj Biswal" description="DSA and Software Development Portfolio">

      {/* DSA Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            DSA Profiles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore my progress in solving Data Structures & Algorithms problems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {/* LeetCode */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">LeetCode</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              300+ problems solved, active in contests and consistent practice.
            </p>
            <a
              href="https://leetcode.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              View Profile <FiExternalLink className="ml-2" />
            </a>
          </div>

          {/* GFG */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">GeeksforGeeks</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Solved hundreds of problems in arrays, trees, graphs and participated in contests.
            </p>
            <a
              href="https://auth.geeksforgeeks.org/user/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline font-medium"
            >
              View Profile <FiExternalLink className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of software I’ve built and collaborated on.
            </p>
          </div>

          {/* Filter Buttons */}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>

                {project.featured && (
                  <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full mb-4">
                    Featured
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

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
