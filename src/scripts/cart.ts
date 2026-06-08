export interface CartItem {
  uid: string;
  name: string;
  basePrice: number;
  combo: { label: string; price: number; includes: string } | null;
  adicionalesGratis: string[];
  adicionalesPago: { name: string; price: number }[];
  observaciones: string;
  total: number;
}

const _items: CartItem[] = [];

export function addItem(item: Omit<CartItem, "uid">): void {
  _items.push({ ...item, uid: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}` });
  _dispatch();
}

export function removeItem(uid: string): void {
  const i = _items.findIndex((x) => x.uid === uid);
  if (i !== -1) _items.splice(i, 1);
  _dispatch();
}

export function getItems(): CartItem[] {
  return _items;
}

export function getTotal(): number {
  return _items.reduce((s, x) => s + x.total, 0);
}

export function clearCart(): void {
  _items.length = 0;
  _dispatch();
}

function _dispatch(): void {
  document.dispatchEvent(
    new CustomEvent("cart:update", {
      detail: { count: _items.length, total: getTotal() },
    })
  );
}
