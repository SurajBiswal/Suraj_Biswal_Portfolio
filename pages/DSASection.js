import Head from 'next/head';
import { FiExternalLink } from 'react-icons/fi';

export default function DSASection() {
  return (
    <>
      {/* ✅ SEO Enhancer: Structured Data for Coding Profiles */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Suraj Biswal",
              url: "https://suraj-biswal-portfolio.vercel.app",
              sameAs: [
                "https://leetcode.com/u/suraj_100-biswal/",
                "https://www.geeksforgeeks.org/user/surajbiswal156/"
              ],
              knowsAbout: [
                "Data Structures",
                "Algorithms",
                "Competitive Programming",
                "Problem Solving"
              ]
            }),
          }}
        />
      </Head>

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
              Over 300+ problems solved. Actively participating in contests and daily challenges.
            </p>
            <a
              href="https://leetcode.com/u/suraj_100-biswal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              aria-label="View Suraj Biswal's LeetCode Profile"
            >
              View Profile <FiExternalLink className="ml-2" aria-hidden="true" />
            </a>
          </div>

          {/* GeeksforGeeks */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">GeeksforGeeks</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Solved hundreds of DSA problems in arrays, trees, and graphs. Regular participant in GFG contests.
            </p>
            <a
              href="https://www.geeksforgeeks.org/user/surajbiswal156/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline font-medium"
              aria-label="View Suraj Biswal's GeeksforGeeks Profile"
            >
              View Profile <FiExternalLink className="ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
