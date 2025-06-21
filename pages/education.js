import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { FiMapPin, FiCalendar, FiAward, FiBook } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    import('../data/education.json').then(data => {
      setEducation(data.default);
    });
  }, []);

  return (
    <>
      {/* ✅ SEO Head Tags */}
      <Head>
        <title>Education | Suraj Biswal | Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the academic background, technical certifications, and educational achievements of Suraj Biswal — Full Stack Developer."
        />
        <meta
          name="keywords"
          content="Suraj Biswal, Education, Certifications, Degrees, Software Engineering, MCA, BSc, University, Academic Achievements"
        />
        <meta name="author" content="Suraj Biswal" />
        <link rel="canonical" href="https://suraj-biswal-portfolio.vercel.app/education" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Suraj Biswal | Education & Certifications" />
        <meta
          property="og:description"
          content="Suraj Biswal’s academic journey, including technical degrees and certifications in computer science and engineering."
        />
        <meta property="og:url" content="https://suraj-biswal-portfolio.vercel.app/education" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suraj Biswal | Education & Certifications" />
        <meta
          name="twitter:description"
          content="Explore Suraj Biswal’s academic background and technical achievements in the field of software development."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      {/* ✅ Optional: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Suraj Biswal",
            url: "https://suraj-biswal-portfolio.vercel.app",
            alumniOf: education.map((edu) => ({
              "@type": "EducationalOrganization",
              name: edu.institution,
              sameAs: edu.link || "",
            })),
            sameAs: [
              "https://github.com/SurajBiswal",
              "https://linkedin.com/in/suraj-biswal-b53b29192/"
            ]
          })
        }}
      />

      {/* Page Layout */}
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Education & Certifications
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My academic journey and continuous learning through certifications
            </p>
          </div>
        </section>

        {/* Education Content */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.id} className="card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      {edu.type === 'certification' ? (
                        <FiAward className="text-primary-600 dark:text-primary-400" size={24} />
                      ) : (
                        <FiBook className="text-primary-600 dark:text-primary-400" size={24} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h2>
                          <h3 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                            {edu.institution}
                          </h3>
                          {edu.gpa && (
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                              <strong>GPA:</strong> {edu.gpa}
                            </p>
                          )}
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1 md:justify-end">
                            <FiCalendar className="mr-2" size={16} />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 md:justify-end">
                            <FiMapPin className="mr-2" size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 responsive-text leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Courses */}
                      {edu.courses && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-sm rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {edu.achievements && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                            Achievements & Activities
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start">
                                <FiAward className="text-secondary-600 dark:text-secondary-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
