"use client";

import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (form: { email: string; password: string }) => {
    const success = login(form.email, form.password);
    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-tr from-blue-200 to-blue-400 px-4">
      <AuthForm type="login" onSubmit={handleLogin} />
      <p className="mt-4 text-sm text-gray-700">
        Hesabınız yok mu?{" "}
        <Link href="/register" className="text-blue-700 hover:underline">
          Kayıt olun
        </Link>
      </p>
    </div>
  );
}
