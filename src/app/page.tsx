import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div>
      <section className="bg-gradient-to-r from-amber-800 to-amber-600 py-20 text-white">
        <div className="mx-auto w-[1100px] px-6">
          <h1 className="text-7xl font-extrabold leading-tight">
            El mejor café de Colombia, directo a tu puerta
          </h1>
          <p className="mt-6 max-w-xl text-xl text-amber-100">
            Granos seleccionados de pequeños productores, tostados cada semana.
          </p>
          <Link
            href="/productos"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-amber-900"
          >
            Ver productos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold">Productos destacdos</h2>
        <div className="grid grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
