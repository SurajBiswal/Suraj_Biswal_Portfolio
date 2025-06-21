import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* ✅ Global Fallback Title (will be overridden per-page) */}
        <title>Suraj Biswal | Full Stack Developer || DSA & System Design Blog</title>

        {/* ✅ Meta Description Fallback */}
        <meta
          name="description"
          content="Portfolio of Suraj Biswal – Full Stack Developer. Explore projects, DSA blogs, system design notes and more."
        />

        {/* ✅ Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Open Graph Tags */}
        <meta property="og:title" content="Suraj Biswal | Full Stack Developer" />
        <meta
          property="og:description"
          content="Explore Suraj Biswal's portfolio showcasing full stack projects, DSA blogs, and system design knowledge."
        />
        <meta property="og:url" content="https://suraj-biswal-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suraj Biswal | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Developer portfolio with projects, blogs, and coding achievements by Suraj Biswal."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
