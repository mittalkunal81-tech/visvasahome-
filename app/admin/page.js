"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <p>Only admin can access this page.</p>
    </div>
  );
}
