import Layout from '../components/layout/Layout';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: FiCode,
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: FiServer,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Node.js', level: 85 },
        { name: 'JPA & Hibernate', level: 80 },
        { name: 'Microservices', level: 75 },
        { name: 'Event-Driven Design', level: 70 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      category: 'Database & DevOps',
      icon: FiDatabase,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Unit Testing', level: 80 },
      ],
    },
    {
      category: 'CS Fundamentals',
      icon: FiTool,
      skills: [
        { name: 'Data Structures', level: 90 },
        { name: 'Algorithms', level: 90 },
        { name: 'OOP', level: 85 },
        { name: 'System Design', level: 75 },
        { name: 'Operating Systems', level: 80 },
        { name: 'Computer Networking', level: 80 },
      ],
    },
  ];

  return (
    <Layout
      title="Technical Skills - Suraj Biswal | Full Stack Developer"
      description="Explore my frontend, backend, database, and computer science skills. From React and Spring Boot to System Design and Data Structures, here's what I specialize in."
    >
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with regularly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={category.category} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center mb-4">
                    <Icon className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
