import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Hide popup after 5s
    }
  }, []);

  return (
    <Layout title="Contact - Suraj Biswal" description="Contact Suraj Biswal">
      <section className="section-padding bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl animate-slide-up relative">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Contact Me</h1>

          {submitted && (
            <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-700 text-green-800 dark:text-white px-4 py-2 rounded shadow-lg animate-fade-in-out">
              ✅ Your message has been delivered!
            </div>
          )}

          <form
            action="https://formsubmit.co/surajbiswal390@gmail.com"
            method="POST"
            className="space-y-6"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://suraj-biswal-portfolio.vercel.app/contact?submitted=true" />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full mt-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Attach File (optional)</label>
              <input
                type="file"
                name="attachment"
                className="w-full mt-1 text-sm text-gray-500 dark:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in-out {
          animation: fadeInOut 4s ease-in-out;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </Layout>
  );
}
