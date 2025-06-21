import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title = 'Suraj Biswal | Full Stack Developer Portfolio', description = 'Portfolio of Suraj Biswal, Full Stack Software Engineer passionate about scalable applications.' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}