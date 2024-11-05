import { type NextRequest } from 'next/server';
import { updateSession } from 'supabase/util';

export const config = {
  matcher: ['/admin/:path*'],
};

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
