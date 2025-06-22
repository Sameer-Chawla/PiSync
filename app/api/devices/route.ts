import { NextResponse } from 'next/server';

export async function GET() {
  const devices = [
    { deviceId: 'PBX00123', lastSyncTime: '27-Apr-2025 10:00 AM', syncStatus: 'Success' },
    { deviceId: 'PBX00124', lastSyncTime: '27-Apr-2025 09:00 AM', syncStatus: 'Failed' },
    { deviceId: 'PBX00125', lastSyncTime: '26-Apr-2025 05:00 PM', syncStatus: 'Pending' },
    { deviceId: 'PBX00126', lastSyncTime: '26-Apr-2025 02:30 PM', syncStatus: 'Success' },
    { deviceId: 'PBX00127', lastSyncTime: '25-Apr-2025 07:45 PM', syncStatus: 'Failed' },
  ];

  return NextResponse.json(devices);
}
