import Link from 'next/link';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiExternalLink,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/SurajBiswal',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/suraj-biswal-b53b29192/',
      icon: FiLinkedin,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/SurajBi85516465',
      icon: FiTwitter,
    },
    {
      name: 'Email',
      href: 'mailto:surajbiswal390@gmail.com',
      icon: FiMail,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding & Description */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              suraj
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Software Engineer passionate about building scalable web applications 
              and sharing knowledge through blog posts. Always learning and growing.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm flex items-center"
                    aria-label={link.name}
                  >
                    {link.name}
                    <FiExternalLink className="ml-1 w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Feel free to reach out for collaborations or just to say hi!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Suraj Biswal. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
