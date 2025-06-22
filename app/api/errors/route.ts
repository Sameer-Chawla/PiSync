import { NextResponse } from 'next/server';

export async function GET() {
  const errors = [
    { deviceId: 'PBX00124', errorMessage: 'Connection Timeout', lastAttempt: '27-Apr-2025' },
    { deviceId: 'PBX00158', errorMessage: 'Storage Full', lastAttempt: '26-Apr-2025' },
    { deviceId: 'PBX00178', errorMessage: 'Unknown Sync Error', lastAttempt: '25-Apr-2025' },
    { deviceId: 'PBX00182', errorMessage: 'Authentication Failure', lastAttempt: '24-Apr-2025' },
    { deviceId: 'PBX00191', errorMessage: 'Server Not Reachable', lastAttempt: '23-Apr-2025' },
  ];

  return NextResponse.json(errors);
}
