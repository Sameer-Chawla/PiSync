'use client';

import { useState } from 'react';
import DeviceTable from '@/components/DeviceTable';
import ErrorTable from '@/components/ErrorTable';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'devices' | 'errors'>('devices');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">PiSync Admin Dashboard</h1>

      </header>

      <div className="px-6 mt-19">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-19">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('devices')}
              className={`font-semibold ${
                activeTab === 'devices'
                  ? 'border-b-2 border-black text-black'
                  : 'text-black'
              }`}
              style={{ background: 'none', padding: 0 }}
            >
              Device Management
            </button>
            <button
              onClick={() => setActiveTab('errors')}
              className={`font-semibold ${
                activeTab === 'errors'
                  ? 'border-b-2 border-black text-black'
                  : 'text-black'
              }`}
              style={{ background: 'none', padding: 0 }}
            >
              Recent Errors
            </button>
          </div>
          <div className="flex space-x-4">
            <button title="Refresh" className="hover:opacity-80">
              <img src="/file.svg" alt="Refresh" className="w-5 h-5" />
            </button>
            <button title="Logout" className="hover:opacity-80">
              <img src="/window.svg" alt="Logout" className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          {activeTab === 'devices' ? <DeviceTable /> : <ErrorTable />}
        </div>
      </div>
    </div>
  );
}
