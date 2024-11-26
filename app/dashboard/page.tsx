'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch('/api/auth/check-session');
      if (!res.ok) {
        router.push('/login');
      }
      setLoading(false);
    };

    checkSession();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard Content */}
    </div>
  );
}
