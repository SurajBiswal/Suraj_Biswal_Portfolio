import Head from 'next/head'; 
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
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    import('../data/projects.json').then(data => {
      setProjects(data.default.filter(project => project.featured).slice(0, 3));
    });

    import('../data/blog-posts.json').then(data => {
      setBlogPosts(data.default.filter(post => post.featured).slice(0, 3));
    });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Suraj Biswal | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Suraj Biswal, full stack developer with expertise in scalable web apps, DSA, and system design." />
        <meta name="keywords" content="Suraj Biswal, full stack developer, react developer, next.js, software engineer, DSA blog, system design" />
        <meta name="author" content="Suraj Biswal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suraj-biswal-portfolio.vercel.app/" />
        <meta property="og:title" content="Suraj Biswal | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Explore Suraj Biswal's personal portfolio including DSA blogs, system design guides, and live project demos." />
        <meta property="og:image" content="/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://suraj-biswal-portfolio.vercel.app/" />
        <meta name="twitter:title" content="Suraj Biswal | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Explore Suraj Biswal's personal portfolio including DSA blogs, system design guides, and live project demos." />
        <meta name="twitter:image" content="/og-image.jpg" />

        <link rel="canonical" href="https://suraj-biswal-portfolio.vercel.app/" />
      </Head>

      <Layout
        title="Suraj Biswal | Full Stack Developer || DSA & System Design Blog"
        description="Suraj Biswal's portfolio - Full Stack Software Engineer with a focus on scalable web apps, DSA, system design, and learning blogs.">
        <main>
          <Hero />
          <Skills />
          <DSASection />

          {/* Featured Projects */}
          <section className="section-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Projects
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Explore recent projects showcasing my frontend and backend skills.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {projects.map((project, index) => (
                  <article key={project.id} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl" role="img" aria-label="project icon">🚀</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline text-sm">
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline text-sm">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <Link href="/projects" className="btn-primary inline-flex items-center">
                  View All Projects <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* Recent Blogs */}
          <section className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Recent Blog Posts
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Insights into algorithms, system design, and web development.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogPosts.map((post, index) => (
                  <article key={post.id} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 category-${post.category}`}>
                      {post.category.replace('-', ' ').toUpperCase()}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <FiCalendar className="mr-2" />
                      {new Date(post.publishedDate).toLocaleDateString()}
                      <FiClock className="ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <Link href={`/blog/${post.category}/${post.slug}`} className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                      Read More →
                    </Link>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <Link href="/blog" className="btn-primary inline-flex items-center">
                  View All Posts <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </section>

            {/* Contact Section */}
            <section className="section-padding bg-white dark:bg-gray-900 relative">
            {submitted && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 dark:bg-green-700 dark:text-white px-6 py-3 rounded-md shadow-lg animate-fade-in-out z-50">
                Your message has been sent successfully!
              </div>
            )}
            <div className="max-w-xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md mt-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
              <form
                action="https://formsubmit.co/surajbiswal390@gmail.com"
                method="POST"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://suraj-biswal-portfolio.vercel.app/?submitted=true" />

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Attachment (optional)</label>
                  <input type="file" name="attachment" className="w-full mt-1" />
                </div>

                <button type="submit" className="w-full bg-primary-600 text-white font-medium py-2 px-4 rounded-md hover:bg-primary-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </Layout>

      {/* Fade Animation */}
      <style jsx>{`
        .animate-fade-in-out {
          animation: fadeInOut 4s ease-in-out;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
}
