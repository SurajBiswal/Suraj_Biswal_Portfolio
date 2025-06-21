import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { FiMapPin, FiCalendar, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    import('../data/experience.json').then(data => {
      setExperiences(data.default);
    });
  }, []);

  return (
    <>
      {/* SEO HEAD Section */}
      <Head>
        <title>Professional Experience | Suraj Biswal | Full Stack Developer</title>
        <meta
          name="description"
          content="Explore Suraj Biswal’s professional journey as a full stack developer including roles, technologies used, and major achievements."
        />
        <meta
          name="keywords"
          content="Suraj Biswal, Experience, Full Stack Developer, Work Experience, React, Node.js, Software Engineer, Internship"
        />
        <meta name="author" content="Suraj Biswal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://suraj-biswal-portfolio.vercel.app/experience" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Suraj Biswal | Professional Experience" />
        <meta
          property="og:description"
          content="See the timeline of Suraj Biswal’s full stack development experience and technical achievements."
        />
        <meta property="og:url" content="https://suraj-biswal-portfolio.vercel.app/experience" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suraj Biswal | Professional Experience" />
        <meta
          name="twitter:description"
          content="See the timeline of Suraj Biswal’s full stack development experience and technical achievements."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Suraj Biswal",
            url: "https://suraj-biswal-portfolio.vercel.app",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://github.com/SurajBiswal",
              "https://linkedin.com/in/suraj-biswal-b53b29192/"
            ]
          }),
        }}
      />

      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey through different roles and the impact I've made along the way
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-32 bg-gray-200 dark:bg-gray-700"></div>
                  )}

                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 card p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.position}
                          </h2>
                          <h3 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                            {exp.company}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                            <FiCalendar className="mr-2" size={16} />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <FiMapPin className="mr-2" size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 responsive-text leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <FiChevronRight className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
