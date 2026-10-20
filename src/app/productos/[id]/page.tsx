import { products } from "@/data/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({
  params,
}: PageProps<"/productos/[id]">) {
  const { id } = await params;
  const product = products[Number(id)];

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl">Producto no encontrado 😢</div>
    );
  }

  return <ProductDetail product={product} />;
}
