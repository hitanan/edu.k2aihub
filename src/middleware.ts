import { NextRequest, NextResponse } from 'next/server';

// Define redirect mappings for old URLs
const REDIRECT_MAPPINGS: Record<string, string> = {
  // Old city URLs to new format
  '/thanh-pho-ho-chi-minh': '/city/ho-chi-minh',
  '/ha-noi': '/city/ha-noi',
  '/da-nang': '/city/da-nang',
  '/hai-phong': '/city/hai-phong',
  '/can-tho': '/city/can-tho',

  // Old learning module URLs
  '/khoa-hoc/digital-marketing': '/learning/digital-marketing',
  '/khoa-hoc/ai-hoc-tap': '/learning/ai-art',
  '/khoa-hoc/lap-trinh': '/learning/python',
  '/course/arduino': '/arduino',
  '/course/robotics': '/robotics',

  // Old AI guide URLs
  '/huong-dan-ai/van-phong': '/ai/office-work',
  '/huong-dan-ai/sang-tao': '/ai/creative-design',
  '/huong-dan-ai/hoc-tap': '/ai/education-learning',
  '/huong-dan-ai/kinh-doanh': '/ai/business-marketing',
  '/huong-dan-ai/cuoc-song': '/ai/daily-life',
  '/huong-dan-ai/lap-trinh': '/ai/programming-dev',

  // Legacy URLs
  '/old-homepage': '/',
  '/old-about': '/',
  '/contact': '/feedback',
  '/lien-he': '/feedback',

  // Mistyped URLs
  '/city': '/city',
  '/ai': '/ai',
  '/learning': '/learning',
  '/stem': '/stem',
  '/arduino': '/arduino',
  '/python': '/python',
  '/robotics': '/robotics',
  '/scratch': '/scratch',

  // Common misspellings
  '/dia-ly-vietnam': '/city',
  '/ai-cua-toi': '/ai',
  '/hoc-tap': '/learning',

  // Old lesson URLs (examples)
  '/lesson/digital-marketing-basics':
    '/learning/digital-marketing/digital-marketing-fundamentals',
  '/lesson/python-basics': '/python/python-basics',
  '/lesson/arduino-intro': '/arduino/arduino-setup',
};

// Function to check if URL should be redirected
export function getRedirectUrl(pathname: string): string | null {
  // Direct mapping check
  if (REDIRECT_MAPPINGS[pathname]) {
    return REDIRECT_MAPPINGS[pathname];
  }

  // Pattern-based redirects
  // Old city pattern: /tinh-thanh/[slug] -> /city/[slug]
  const cityMatch = pathname.match(/^\/tinh-thanh\/(.+)$/);
  if (cityMatch) {
    return `/city/${cityMatch[1]}`;
  }

  // Old lesson pattern: /bai-hoc/[module]/[lesson] -> /learning/[module]/[lesson]
  const lessonMatch = pathname.match(/^\/bai-hoc\/(.+)\/(.+)$/);
  if (lessonMatch) {
    return `/learning/${lessonMatch[1]}/${lessonMatch[2]}`;
  }

  // Old AI pattern: /ai-guide/[category] -> /ai/[category]
  const aiMatch = pathname.match(/^\/ai-guide\/(.+)$/);
  if (aiMatch) {
    return `/ai/${aiMatch[1]}`;
  }

  // Handle trailing slashes
  if (pathname.endsWith('/') && pathname.length > 1) {
    const withoutSlash = pathname.slice(0, -1);
    if (REDIRECT_MAPPINGS[withoutSlash]) {
      return REDIRECT_MAPPINGS[withoutSlash];
    }
  }

  // Handle missing slashes
  if (!pathname.endsWith('/') && pathname !== '/') {
    const withSlash = pathname + '/';
    if (REDIRECT_MAPPINGS[withSlash]) {
      return REDIRECT_MAPPINGS[withSlash];
    }
  }

  return null;
}

// Middleware function for Next.js
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const redirectUrl = getRedirectUrl(pathname);

  if (redirectUrl) {
    return NextResponse.redirect(new URL(redirectUrl, request.url), 301);
  }

  // Handle case-insensitive redirects
  const lowercasePathname = pathname.toLowerCase();
  if (lowercasePathname !== pathname) {
    const lowercaseRedirect = getRedirectUrl(lowercasePathname);
    if (lowercaseRedirect) {
      return NextResponse.redirect(
        new URL(lowercaseRedirect, request.url),
        301,
      );
    }
  }

  return NextResponse.next();
}

// Configure which paths to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
};
