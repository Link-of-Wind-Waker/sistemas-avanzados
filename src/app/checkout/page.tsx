"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    card: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email && !form.card) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Correo inválido");
      return;
    }

    console.log("Procesando pago", form);
    localStorage.setItem("ultimoPago", JSON.stringify(form));

    setError("");
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="p-10 text-center">
        <p className="text-3xl">✅ ¡Gracias por tu compra!</p>
        <p className="mt-2 text-gray-600">
          Te enviaremos la confirmación a {form.email}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-10">
      <h1 className="mb-2 text-4xl font-bold">Pagar</h1>
      <p className="mb-6 text-gray-500">{items.length} productos en tu pedido</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Nombre completo" value={form.name} onChange={handleChange} className="w-full border-b p-2 outline-none" />
        <input name="email" placeholder="Correo" value={form.email} onChange={handleChange} className="w-full border-b p-2 outline-none" />
        <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} className="w-full border-b p-2 outline-none" />
        <input name="address" placeholder="Dirección" value={form.address} onChange={handleChange} className="w-full border-b p-2 outline-none" />

        <h2 className="pt-4 text-xl font-semibold">Tarjeta</h2>
        <input name="card" placeholder="Número de tarjeta" value={form.card} onChange={handleChange} className="w-full border-b p-2 outline-none" />
        <div className="flex gap-3">
          <input name="expiry" placeholder="MM/AA" value={form.expiry} onChange={handleChange} className="w-full border-b p-2 outline-none" />
          <input name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} className="w-full border-b p-2 outline-none" />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="rounded bg-amber-700 px-2 py-0.5 text-[10px] text-white"
        >
          Pagar ahora
        </button>
      </form>
    </div>
  );
}
