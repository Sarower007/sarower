import { NextRequest, NextResponse } from 'next/server';
import { getLoginSession } from '../../../lib/session';

export async function GET(req: NextRequest) {
  const session = getLoginSession(req);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Authorized' }, { status: 200 });
}
