import { useEffect, useState } from 'react';

type ErrorLog = {
  deviceId: string;
  errorMessage: string;
  lastAttempt: string;
};

export default function ErrorTable() {
  const [errors, setErrors] = useState<ErrorLog[]>([]);

  useEffect(() => {
    fetch('/api/errors')
      .then(res => res.json())
      .then(data => setErrors(data));
  }, []);

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Sync Errors</h2>
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Device ID</th>
            <th>Error Message</th>
            <th>Last Attempt</th>
          </tr>
        </thead>
        <tbody>
          {errors.map((error, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2">{error.deviceId}</td>
              <td>{error.errorMessage}</td>
              <td>{error.lastAttempt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
