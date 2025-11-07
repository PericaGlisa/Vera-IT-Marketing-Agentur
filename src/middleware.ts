import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Security headers for better protection
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Performance headers for mobile optimization
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Preload', 'fonts')
  response.headers.set('Link', '</fonts/inter.woff2>; rel=preload; as=font; type=font/woff2; crossorigin')
  
  // Mobile-specific performance headers
  const userAgent = request.headers.get('user-agent') || ''
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent)
  
  if (isMobile) {
    response.headers.set('X-Mobile-Optimized', 'true')
    response.headers.set('Vary', 'User-Agent')
    // Aggressive caching for mobile
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400')
  }
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://embed.cal.com https://cal.com https://app.cal.com https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.cal.com https://cal.com https://app.cal.com",
    "font-src 'self' https://fonts.gstatic.com https://embed.cal.com https://cal.com https://app.cal.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://embed.cal.com https://cal.com https://api.cal.com https://app.cal.com https://cloudflareinsights.com",
    "frame-src 'self' https://www.youtube.com https://player.vimeo.com https://www.google.com https://maps.google.com https://embed.cal.com https://cal.com https://app.cal.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)
  
  // Handle redirects for SEO optimization
  const url = request.nextUrl.clone()
  
  // Redirect trailing slashes (except for root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }
  
  // Redirect old URLs to new structure (if any)
  const redirects: Record<string, string> = {
    '/services': '/leistungen',
    '/about': '/ueber-uns',
    '/contact': '/kontakt',
    '/legal': '/rechtliches',
  }
  
  if (redirects[url.pathname]) {
    url.pathname = redirects[url.pathname]
    return NextResponse.redirect(url, 301)
  }
  
  // Add cache headers for static assets
  if (url.pathname.startsWith('/images/') || 
      url.pathname.startsWith('/icons/') || 
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.webp') ||
      url.pathname.endsWith('.avif')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Add cache headers for fonts
  if (url.pathname.startsWith('/fonts/') ||
      url.pathname.endsWith('.woff') ||
      url.pathname.endsWith('.woff2') ||
      url.pathname.endsWith('.ttf') ||
      url.pathname.endsWith('.otf')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Geolocation-based optimizations (example)
  const country = request.geo?.country || 'US'
  const city = request.geo?.city || 'Unknown'
  
  // Add custom headers for analytics
  response.headers.set('X-User-Country', country)
  response.headers.set('X-User-City', city)
  
  // Bot detection and handling
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent)
  
  if (isBot) {
    // Add special handling for bots (faster response, no analytics)
    response.headers.set('X-Robots-Tag', 'index, follow')
    response.headers.set('Cache-Control', 'public, max-age=3600')
  }
  
  // A/B testing setup (example)
  if (!request.cookies.get('ab-test-variant')) {
    const variant = Math.random() > 0.5 ? 'A' : 'B'
    response.cookies.set('ab-test-variant', variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
  }
  
  return response
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|icon.png).*)',
  ],
}