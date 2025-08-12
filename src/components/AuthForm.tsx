"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (form: {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }) => void;
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-96 bg-white p-8 rounded-lg shadow-lg">
  {type === "register" && (
    <input
      name="name"
      placeholder="Ad Soyad"
      onChange={handleChange}
      required
      value={form.name}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  )}
  <input
    name="email"
    type="email"
    placeholder="E-posta"
    onChange={handleChange}
    required
    value={form.email}
    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
  <input
    name="password"
    type="password"
    placeholder="Şifre"
    onChange={handleChange}
    required
    value={form.password}
    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
  {type === "register" && (
    <input
      name="confirmPassword"
      type="password"
      placeholder="Şifre Tekrar"
      onChange={handleChange}
      required
      value={form.confirmPassword}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  )}
  <button
    type="submit"
    className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition"
  >
    {type === "login" ? "Giriş Yap" : "Kayıt Ol"}
  </button>
</form>

  );
}
