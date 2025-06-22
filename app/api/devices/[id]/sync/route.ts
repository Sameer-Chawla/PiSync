import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  return NextResponse.json({ message: `Sync triggered for device ${id}` });
}
