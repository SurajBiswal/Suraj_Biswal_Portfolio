import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Link from 'next/link';
import DSASection from '../pages/DSASection';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Load projects and blog posts
    import('../data/projects.json').then(data => {
      setProjects(data.default.filter(project => project.featured).slice(0, 3));
    });

    import('../data/blog-posts.json').then(data => {
      setBlogPosts(data.default.filter(post => post.featured).slice(0, 3));
    });
  }, []);

  return (
    <Layout
      title="Suraj Biswal | Full Stack Developer | DSA & System Design Blog"
      description="Suraj Biswal's portfolio - Full Stack Software Engineer with a focus on scalable web apps, DSA, system design, and learning blogs.">
      <Hero />
      <Skills />
      <DSASection/>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={project.id} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
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
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center"
            >
              View All Projects
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I write about software development, algorithms, and my learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 category-${post.category}`}>
                  {post.category.replace('-', ' ').toUpperCase()}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiCalendar className="mr-2" />
                  {new Date(post.publishedDate).toLocaleDateString()}
                  <FiClock className="ml-4 mr-2" />
                  {post.readTime}
                </div>
                <Link
                  href={`/blog/${post.category}/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="btn-primary inline-flex items-center"
            >
              View All Posts
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
