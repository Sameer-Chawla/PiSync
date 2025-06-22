import { useEffect, useState } from 'react';

type Device = {
  deviceId: string;
  lastSyncTime: string;
  syncStatus: 'Success' | 'Pending' | 'Failed';
};

export default function DeviceTable() {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    fetch('/api/devices')
      .then(res => res.json())
      .then(data => setDevices(data));
  }, []);

  const triggerSync = async (deviceId: string) => {
    const res = await fetch(`/api/devices/${deviceId}/sync`, { method: 'POST' });
    const data = await res.json();
    alert(data.message);
  };

  const getStatusColor = (status: string) => {
    if (status === 'Success') return 'text-green-600';
    if (status === 'Failed') return 'text-red-600';
    if (status === 'Pending') return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Device Sync Status</h2>
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Device ID</th>
            <th>Last Sync Time</th>
            <th>Sync Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.deviceId} className="border-b">
              <td className="py-2">{device.deviceId}</td>
              <td>{device.lastSyncTime}</td>
              <td className={getStatusColor(device.syncStatus)}>
                {device.syncStatus}
              </td>
              <td>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => triggerSync(device.deviceId)}
                >
                  [Sync Now]
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
