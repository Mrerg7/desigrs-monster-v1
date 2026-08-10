/**
 * Edge middleware for desigrs.monster:
 * - 301 www → apex (fixes "Alternate page with proper canonical tag")
 * - 301 /404 crawl targets → home (fixes soft-200 on /404)
 */
const CANONICAL_HOST = 'desigrs.monster';

function isSoft404Path(pathname: string): boolean {
  return (
    pathname === '/404' ||
    pathname === '/404/' ||
    pathname === '/404.html'
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (isSoft404Path(url.pathname)) {
      url.hostname = CANONICAL_HOST;
      url.pathname = '/';
      url.search = '';
      url.hash = '';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
