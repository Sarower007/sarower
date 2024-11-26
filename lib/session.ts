import { NextResponse } from 'next/server';

export function setLoginSession(res: NextResponse, token: string) {
  const date = new Date();
  date.setTime(date.getTime() + 60 * 60 * 1000); // 1 hour expiry

  res.cookie('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: date,
    path: '/',
  });
}

export function getLoginSession(req: Request) {
  const cookies = req.headers.get('cookie') || '';
  return cookies.split(';').find(cookie => cookie.includes('auth_token'))?.split('=')[1] || null;
}
