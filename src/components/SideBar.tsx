"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const { logout } = useAuth();
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Ana Sayfa", icon: <FiHome size={20} /> },
    { href: "/setting", label: "Ayarlar", icon: <FiSettings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white h-screen p-6 flex flex-col justify-between shadow-lg">
      <div>
        <h2 className="text-3xl font-bold mb-10 tracking-wide">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition 
                ${
                  pathname === href
                    ? "bg-blue-800 font-semibold"
                    : "hover:bg-blue-600"
                }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-500 rounded-lg py-3 px-4 font-semibold transition"
      >
        <FiLogOut size={20} />
        Çıkış Yap
      </button>
    </aside>
  );
}
