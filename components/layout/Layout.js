import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({
  children,
  title = 'Portfolio',
  description = 'Software Engineer Portfolio',
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
