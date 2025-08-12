"use client";

import useProtectedRoute from "@/hooks/useProtectedRoute";
import SideBar from "@/components/SideBar";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  useProtectedRoute();
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <main className="p-10 flex-1">
        <h1 className="text-4xl font-bold mb-6">Hoşgeldin, {user?.name}</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg leading-relaxed">
            Burası dashboard sayfası. Burada uygulamanın özet bilgilerini görebilirsin.
          </p>
        </div>
      </main>
    </div>
  );
}
