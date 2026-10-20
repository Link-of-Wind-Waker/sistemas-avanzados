"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/carrito", label: "Carrito" },
  { href: "/checkout", label: "Pagar" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-900 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold whitespace-nowrap">
          ☕ Café Express
        </Link>

        <ul className="flex gap-10 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="whitespace-nowrap hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/carrito" className="relative text-2xl">
            🛒
            {count > 0 && (
              <span className="absolute -top-2 -right-3 rounded-full bg-red-500 px-2 text-xs">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
