"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col rounded-xl bg-white p-4 shadow">
      <Link href={`/productos/${product.id}`}>
        <div
          className={`${product.color} flex h-40 items-center justify-center rounded-lg text-6xl`}
        >
          {product.emoji}
        </div>
        <h3 className="mt-3 font-semibold">{product.name}</h3>
      </Link>
      <p className="mt-1 text-lg font-bold text-gray-300">
        {formatPrice(product.price)}
      </p>
      <div
        onClick={() => addItem(product, 1)}
        className="mt-auto cursor-pointer rounded bg-amber-700 py-1 text-center text-xs text-white"
      >
        Agregar al carito
      </div>
    </div>
  );
}
