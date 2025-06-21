export const getServerSideProps = async ({ res }) => {
    const baseUrl = 'https://suraj-biswal-portfolio.vercel.app';
  
    const staticPages = [
      '',
      '/about',
      '/projects',
      '/experience',
      '/education',
      '/blog',
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
        </url>`
        )
        .join('')}
    </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return { props: {} };
  };
  
  export default function Sitemap() {
    return null;
  }
  