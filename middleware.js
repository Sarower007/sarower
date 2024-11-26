// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow access to login page and public routes
  if (pathname === '/login' || pathname === '/') {
    return NextResponse.next();
  }

  // Check if the user is logged in (via session or cookie)
  const token = req.cookies.get('dashboard_token');
  if (!token) {
    // If no token, redirect to login page
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};
