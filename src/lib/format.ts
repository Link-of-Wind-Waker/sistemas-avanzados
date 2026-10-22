export function formatPrice(value: number) {
  return "$" + value.toLocaleString("es-CO");
}

export const SHIPPING_COST = 12000;
export const FREE_SHIPPING_FROM = 150000;
