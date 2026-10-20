"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
  }

  return (
    <div className="mx-auto flex max-w-5xl gap-10 px-6 py-10">
      <div
        className={`${product.color} flex h-96 w-96 shrink-0 items-center justify-center rounded-2xl text-9xl`}
      >
        {product.emoji}
      </div>

      <div className="flex flex-col gap-4">
        <Link href="/productos" className="text-sm text-amber-700">
          ← Volver
        </Link>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-3xl font-bold text-amber-800">
          {formatPrice(product.price)}
        </p>
        <p className="text-sm text-gray-500">
          {product.stock > 0
            ? `Quedan ${product.stock} unidades`
            : "Agotado"}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="h-8 w-8 rounded bg-gray-200"
          >
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="h-8 w-8 rounded bg-gray-200"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white"
        >
          Agregar al carrito
        </button>

        {added && (
          <p className="text-green-600">¡Producto agregado al carrito!</p>
        )}
      </div>
    </div>
  );
}
