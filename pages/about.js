import Layout from '../components/layout/Layout';
import { FiCode, FiHeart, FiTarget, FiUsers } from 'react-icons/fi';

export default function About() {
  const values = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, readable code that stands the test of time.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'Great software is built by great teams. I value communication and teamwork.',
    },
    {
      icon: FiTarget,
      title: 'Problem Solving',
      description: 'I enjoy breaking down complex problems into simple, elegant solutions.',
    },
    {
      icon: FiHeart,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I stay updated with the latest trends and best practices.',
    },
  ];

  const interests = [
    'Web Development',
    'Machine Learning',
    'Open Source',
    'System Design',
    'DevOps',
    'Mobile Development',
    'UI/UX Design',
    'Data Structures & Algorithms',
  ];

  return (
    <Layout title="About - Portfolio" description="Learn more about me, my journey, and what drives me as a software engineer">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate software engineer who loves building things that make a difference. 
            Here's a bit more about my journey and what drives me.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 responsive-text">
                <p>
                  I started my journey in software development during my college years, 
                  fascinated by the power of code to solve real-world problems. What began 
                  as curiosity has evolved into a career I'm passionate about.
                </p>
                <p>
                  Over the years, I've had the opportunity to work on diverse projects, 
                  from small startups to large-scale applications. Each experience has 
                  taught me valuable lessons about software architecture, user experience, 
                  and the importance of writing maintainable code.
                </p>
                <p>
                  When I'm not coding, you'll find me writing blog posts to share knowledge 
                  with the developer community, contributing to open-source projects, or 
                  exploring new technologies that could improve my work.
                </p>
                <p>
                  I believe that the best software is built with empathy - understanding 
                  the users' needs and creating solutions that truly make their lives better.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              What I Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Icon className="text-primary-600 dark:text-primary-400 mb-4" size={32} />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Areas of Interest
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {interests.map((interest, index) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
