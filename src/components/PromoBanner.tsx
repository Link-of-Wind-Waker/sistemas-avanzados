"use client";

import { useEffect, useState } from "react";

const promos = [
  "🎉 10% de descuento con el cupón CAFE10",
  "🚚 Envío gratis en compras mayores a $150.000",
  "🌱 Café 100% colombiano, directo del productor",
];

export default function PromoBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((i) => (i + 1) % promos.length);
    }, 3000);
  });

  return (
    <div className="bg-amber-200 py-2 text-center text-sm font-medium text-amber-900">
      {promos[index]}
    </div>
  );
}
