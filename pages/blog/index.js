import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTag, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    import('../../data/blog-posts.json').then(data => {
      setBlogPosts(data.default);
      setFilteredPosts(data.default);
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'dsa', name: 'DSA', count: blogPosts.filter(post => post.category === 'dsa').length },
    { id: 'system-design', name: 'System Design', count: blogPosts.filter(post => post.category === 'system-design').length },
    { id: 'cs-fundamentals', name: 'CS Fundamentals', count: blogPosts.filter(post => post.category === 'cs-fundamentals').length },
    { id: 'web-development', name: 'Web Development', count: blogPosts.filter(post => post.category === 'web-development').length },
  ];

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    filterPosts(categoryId, searchTerm);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterPosts(selectedCategory, term);
  };

  const filterPosts = (categoryId, searchTerm) => {
    let filtered = blogPosts;

    if (categoryId !== 'all') {
      filtered = filtered.filter(post => post.category === categoryId);
    }

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'dsa': 'category-dsa',
      'system-design': 'category-system-design',
      'cs-fundamentals': 'category-cs-fundamentals',
      'web-development': 'category-web-development',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout title="Blog - Portfolio" description="Read my blog posts about software development, algorithms, and technology">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Sharing knowledge about software development, algorithms, and my learning journey
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-gray-100"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryFilter(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Category Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Explore by Category
                  </h3>
                  <div className="space-y-2">
                    <Link href="/blog/dsa" className="block p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">Data Structures & Algorithms</span>
                      </div>
                    </Link>
                    <Link href="/blog/system-design" className="block p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900 transition-colors">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">System Design</span>
                      </div>
                    </Link>
                    <Link href="/blog/cs-fundamentals" className="block p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">CS Fundamentals</span>
                      </div>
                    </Link>
                    <Link href="/blog/web-development" className="block p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900 transition-colors">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Category Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${getCategoryColor(post.category)}`}>
                      {post.category.replace('-', ' ').toUpperCase()}
                    </div>

                    {/* Post Title */}
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      <Link href={`/blog/${post.category}/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <FiCalendar className="mr-2" />
                      {new Date(post.publishedDate).toLocaleDateString()}
                      <FiClock className="ml-4 mr-2" />
                      {post.readTime}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.category}/${post.slug}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>

              {/* No Posts Message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No posts found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
