/**
 * Edge middleware for desigrs.monster:
 * - 301 http → https and www → apex (single indexable host)
 * - 301 soft-404 crawl targets → home (fixes soft-200 on /404)
 * - 308 trailing-slash normalisation, but only for paths that resolve, so
 *   unknown URLs return a real 404 instead of a redirect hop
 * - X-Robots-Tag: noindex on every redirect so GSC logs no "Page with redirect" URLs
 */
const CANONICAL_HOST = 'desigrs.monster';
const HAS_EXTENSION = /\.[A-Za-z0-9]+$/;

function isSoft404Path(pathname: string): boolean {
  return pathname === '/404' || pathname === '/404/' || pathname === '/404.html';
}

function redirectResponse(url: URL, status: number): Response {
  const target = url.toString();
  return new Response(null, {
    status,
    headers: {
      Location: target,
      'Cache-Control': 'public, max-age=86400',
      'X-Robots-Tag': 'noindex, follow',
      Link: `<${target}>; rel="canonical"`,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return redirectResponse(url, 301);
    }

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return redirectResponse(url, 301);
    }

    if (url.pathname === '/index.html' || url.pathname === '/index.html/') {
      url.pathname = '/';
      return redirectResponse(url, 301);
    }

    if (isSoft404Path(url.pathname)) {
      url.pathname = '/';
      url.search = '';
      url.hash = '';
      return redirectResponse(url, 301);
    }

    if (!HAS_EXTENSION.test(url.pathname) && !url.pathname.endsWith('/')) {
      const slashed = new URL(url.toString());
      slashed.pathname = `${url.pathname}/`;
      const probe = await env.ASSETS.fetch(new Request(slashed.toString(), { method: 'HEAD' }));
      if (probe.status === 200) {
        return redirectResponse(slashed, 308);
      }
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
