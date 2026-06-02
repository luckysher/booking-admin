import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
//import { isAuthenticated } from './app/lib/auth' 
// import { cookies } from "next/headers";
// import Cookies from 'js-cookie';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|image|favicon.ico).*)',
  ],
}

export async function proxy(request: NextRequest) {
  // const cookieStore = await cookies();

  const isAuthenticated = true;// cookieStore.get("authToken")?.value;

  //localStorage.getItem('authToken') || null;
   /* 
  if (!isAuthenticated && request.nextUrl.pathname.replace("?", "") !== "/signin") {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  */
  return NextResponse.next() // Continue to the requested page
}
