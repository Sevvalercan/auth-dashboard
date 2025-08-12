"use client";

import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = (form: {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }) => {
    if (form.password !== form.confirmPassword) {
      alert("Şifreler uyuşmuyor!");
      return;
    }
    register(form.name || "", form.email, form.password);
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-tr from-blue-200 to-blue-400 px-4">
      <AuthForm type="register" onSubmit={handleRegister} />
      <p className="mt-4 text-sm text-gray-700">
        Zaten üye misiniz?{" "}
        <Link href="/login" className="text-blue-700 hover:underline">
          Giriş yapın
        </Link>
      </p>
    </div>
  );
}
