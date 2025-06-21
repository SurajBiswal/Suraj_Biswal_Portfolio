import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'Suraj Biswal | Full Stack Developer Portfolio', description = 'Portfolio of Suraj Biswal, a full stack developer specializing in scalable web applications.' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://suraj-biswal-portfolio.vercel.app/" />

        {/* Social Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suraj-biswal-portfolio.vercel.app/" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}