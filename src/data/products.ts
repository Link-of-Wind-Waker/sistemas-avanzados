export type Category = "cafe" | "metodos" | "accesorios";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  stock: number;
  emoji: string;
  color: string;
  featured?: boolean;
}

export const categories: { value: Category | "Todos"; label: string }[] = [
  { value: "Todos", label: "Todos" },
  { value: "cafe", label: "Café" },
  { value: "metodos", label: "Métodos" },
  { value: "accesorios", label: "Accesorios" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Café Huila Especial",
    description:
      "Notas a panela, frutos rojos y chocolate. Tueste medio, 500 g en grano.",
    price: 38000,
    category: "cafe",
    stock: 12,
    emoji: "☕",
    color: "bg-amber-100",
    featured: true,
  },
  {
    id: 2,
    name: "Café Sierra Nevada",
    description:
      "Cultivado por comunidades arhuacas. Notas cítricas y cuerpo ligero. 500 g.",
    price: 42000,
    category: "cafe",
    stock: 5,
    emoji: "🏔️",
    color: "bg-emerald-100",
    featured: true,
  },
  {
    id: 3,
    name: "Café Nariño Lavado",
    description: "Acidez brillante, notas a caramelo y durazno. 250 g molido.",
    price: 26000,
    category: "cafe",
    stock: 0,
    emoji: "🌋",
    color: "bg-orange-100",
  },
  {
    id: 4,
    name: "Prensa Francesa 600 ml",
    description: "Vidrio borosilicato y filtro de acero inoxidable.",
    price: 89000,
    category: "metodos",
    stock: 7,
    emoji: "🫖",
    color: "bg-sky-100",
    featured: true,
  },
  {
    id: 5,
    name: "Chemex 6 tazas",
    description: "El clásico de vidrio para un café limpio y aromático.",
    price: 210000,
    category: "metodos",
    stock: 3,
    emoji: "⚗️",
    color: "bg-indigo-100",
  },
  {
    id: 6,
    name: "Moka Italiana",
    description: "Cafetera de aluminio para 3 tazas, apta para estufa a gas.",
    price: 75000,
    category: "metodos",
    stock: 10,
    emoji: "🇮🇹",
    color: "bg-rose-100",
  },
  {
    id: 7,
    name: "Molino Manual",
    description: "Muelas cerámicas ajustables. Ideal para viajar.",
    price: 120000,
    category: "accesorios",
    stock: 4,
    emoji: "⚙️",
    color: "bg-stone-200",
  },
  {
    id: 8,
    name: "Taza de Cerámica",
    description: "Hecha a mano en Ráquira, Boyacá. 300 ml.",
    price: 32000,
    category: "accesorios",
    stock: 20,
    emoji: "🍵",
    color: "bg-lime-100",
  },
];
