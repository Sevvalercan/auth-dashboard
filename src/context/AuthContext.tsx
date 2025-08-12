"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { showError, showSuccess } from "@/utils/toastConfig";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const storedUserStr = localStorage.getItem("user");
    if (!storedUserStr) {
      showError("Kayıtlı kullanıcı bulunamadı!");
      return false;
    }
    const storedUser: User = JSON.parse(storedUserStr);
    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      showSuccess("Giriş başarılı!");
      return true;
    }
    showError("E-posta veya şifre hatalı!");
    return false;
  };

  const register = (name: string, email: string, password: string) => {
    const newUser: User = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    showSuccess("Kayıt başarılı! Giriş yapabilirsiniz.");
  };

  const logout = () => {
    setUser(null);
    router.push("/login");
    showSuccess("Çıkış yapıldı.");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
