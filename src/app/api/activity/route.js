import { NextResponse } from 'next/server';
import { getDevActivity } from '@/lib/devActivity';

export const revalidate = 3600;
export const maxDuration = 60;

export async function GET() {
  try {
    const data = await getDevActivity();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch developer activity.' },
      { status: 500 }
    );
  }
}
