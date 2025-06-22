'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/DashboardHeader';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in a real app, you'd validate against your backend
    if (username && password) {
      // Navigate to dashboard
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <div className="text-center text-4xl font-bold mb-4">π</div>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Enter username" 
              className="input w-full p-2 border border-gray-300 rounded mb-4" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Enter password" 
              className="input w-full p-2 border border-gray-300 rounded mb-1" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right text-xs text-blue-500 mt-1 cursor-pointer">Forgot password?</div>
            <button 
              type="submit"
              className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
