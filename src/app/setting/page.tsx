"use client";
import useProtectedRoute from "@/hooks/useProtectedRoute";
import SideBar from "@/components/SideBar";

export default function Setting() {
  useProtectedRoute();

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl">Settings</h1>
      </div>
    </div>
  );
}
