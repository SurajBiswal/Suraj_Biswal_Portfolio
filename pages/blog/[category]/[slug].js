import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiShare2,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const router = useRouter();
  const { category, slug } = router.query;
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category || !slug) return;

    import("../../../data/blog-posts.json").then((data) => {
      const allPosts = data.default;
      const foundPost = allPosts.find(
        (p) => p.category === category && p.slug === slug
      );

      if (foundPost) {
        setPost(foundPost);

        // Find related posts in the same category
        const related = allPosts
          .filter((p) => p.category === category && p.slug !== slug)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        router.push("/blog");
      }

      setLoading(false);
    });
  }, [category, slug, router]);

  const getCategoryColor = (cat) => {
    const colors = {
      dsa: "category-dsa",
      "system-design": "category-system-design",
      "cs-fundamentals": "category-cs-fundamentals",
      "web-development": "category-web-development",
    };
    return colors[cat] || "bg-gray-100 text-gray-800";
  };

  const getCategoryName = (cat) => {
    const names = {
      dsa: "Data Structures & Algorithms",
      "system-design": "System Design",
      "cs-fundamentals": "CS Fundamentals",
      "web-development": "Web Development",
    };
    return names[cat] || cat;
  };

  if (loading) {
    return (
      <Layout title="Loading..." description="Loading blog post">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) return null;

  return (
    <Layout title={`${post.title} - Blog`} description={post.excerpt}>
      {/* Hero Section */}
      <section
        className={`section-padding bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800`}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/blog/${category}`}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6"
          >
            <FiArrowLeft className="mr-2" />
            Back to {getCategoryName(category)}
          </Link>

          <div
            className={`${getCategoryColor(
              category
            )} inline-block px-3 py-1 rounded-full text-sm mb-6`}
          >
            {getCategoryName(category).toUpperCase()}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 mb-8 gap-y-2">
            <div className="flex items-center mr-6">
              <FiCalendar className="mr-2" />
              {new Date(post.publishedDate).toLocaleDateString()}
            </div>
            <div className="flex items-center mr-6">
              <FiClock className="mr-2" />
              {post.readTime}
            </div>
            <div>
              <span className="mr-2">By</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {post.author}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg dark:prose-invert max-w-none mb-10">
                <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {post.excerpt}
                </p>

                <div className="mb-12">
                  {/* This would be the full blog post content */}
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="text-3xl font-bold text-gray-900 dark:text-white my-6"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-2xl font-bold text-gray-900 dark:text-white my-4"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p
                          className="text-gray-700 dark:text-gray-300 mb-4"
                          {...props}
                        />
                      ),
                      code: ({
                        node,
                        inline,
                        className,
                        children,
                        ...props
                      }) => {
                        return !inline ? (
                          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                            <code
                              {...props}
                              className="text-sm font-mono text-gray-800 dark:text-gray-200"
                            >
                              {children}
                            </code>
                          </pre>
                        ) : (
                          <code
                            className="bg-gray-200 dark:bg-gray-700 px-1 rounded"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="mb-1" {...props} />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>

                  
                </div>
              </article>

              {/* Author Bio */}
              <div className="card p-6 mb-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  About the Author
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {post.author}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Software engineer passionate about building scalable
                      applications and sharing knowledge through blog posts.
                      Specialized in web development and algorithms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FiTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Share via link"
                  >
                    <FiShare2 size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Related Articles
                </h3>
                {relatedPosts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <div
                        key={related.id}
                        className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0"
                      >
                        <Link
                          href={`/blog/${related.category}/${related.slug}`}
                          className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm"
                        >
                          {related.title}
                        </Link>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <FiCalendar className="mr-1" size={12} />
                          {new Date(related.publishedDate).toLocaleDateString()}
                          <FiClock className="ml-2 mr-1" size={12} />
                          {related.readTime}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    No related articles found.
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/blog/dsa"
                      className="block p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Data Structures & Algorithms
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/blog/system-design"
                      className="block p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          System Design
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/blog/cs-fundamentals"
                      className="block p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          CS Fundamentals
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/blog/web-development"
                      className="block p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Web Development
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
