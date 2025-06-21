import Link from "next/link";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h1
              className="
                text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6
                overflow-hidden whitespace-nowrap 
                border-r-2 border-r-primary-600 pr-2 
                animate-typing animate-blink
                inline-block max-w-full
              "
            >
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Suraj Biswal
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Software Engineer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I build scalable web applications and love sharing knowledge
              through blog posts. Passionate about clean code, user experience,
              and continuous learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </Link>
              <a
                href="/images/Suraj_Biswal resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-secondary inline-flex items-center justify-center"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/SurajBiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/suraj-biswal-b53b29192/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1 overflow-hidden">
                <img
                  src="/images/surajprofile.jpg"
                  alt="Suraj Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
