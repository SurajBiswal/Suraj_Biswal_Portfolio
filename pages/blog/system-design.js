import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function SystemDesignBlog() {
  const [systemDesignPosts, setSystemDesignPosts] = useState([]);

  useEffect(() => {
    import('../../data/blog-posts.json').then(data => {
      const filtered = data.default.filter(post => post.category === 'system-design');
      setSystemDesignPosts(filtered);
    });
  }, []);

  return (
    <Layout title="System Design - Blog" description="Learn about scalable system architecture, distributed systems, and design patterns">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline mb-6">
            <FiArrowLeft className="mr-2" />
            Back to All Posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            System Design
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore scalable architecture patterns, distributed systems, and engineering best practices for building robust applications
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {systemDesignPosts.map((post, index) => (
              <article key={post.id} className="card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="category-system-design inline-block px-3 py-1 rounded-full text-sm mb-4">
                  SYSTEM DESIGN
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  <Link href={`/blog/${post.category}/${post.slug}`} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6 responsive-text leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <FiCalendar className="mr-2" />
                  {new Date(post.publishedDate).toLocaleDateString()}
                  <FiClock className="ml-4 mr-2" />
                  {post.readTime}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.category}/${post.slug}`}
                  className="text-green-600 dark:text-green-400 hover:underline font-medium"
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>

          {systemDesignPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No System Design posts available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
