export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export interface ComboItem {
  id: string;
  includes: string[];
  price: number;
  image: string;
}

export interface AdicionalPago {
  name: string;
  detail?: string;
  price: number;
}

export interface BebidaItem {
  name: string;
  sizes: { label: string; price: number }[];
}

// ─── HOT DOGS ────────────────────────────────────────────────────────────────
export const hotdogs: MenuItem[] = [
  {
    id: "hd-tradicional",
    name: "Tradicional",
    description: "Salchicha americana, jamón, queso, adicionales y salsas al gusto.",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1619740455993-9d621aba4d6a?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "hd-mixto",
    name: "Mixto",
    description:
      "Salchicha americana, tocineta o pollo, jamón, queso, adicionales y salsas al gusto.",
    price: 10000,
    image:
      "https://images.unsplash.com/photo-1612392062631-94cd0c761c68?w=600&h=400&fit=crop&crop=center",
    badge: "Popular",
  },
  {
    id: "hd-especial",
    name: "Especial",
    description:
      "Salchicha americana, tocineta y pollo, jamón, queso, adicionales y salsas al gusto.",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&crop=center",
    badge: "Especial",
  },
];

// ─── HAMBURGUESAS ─────────────────────────────────────────────────────────────
export const hamburguesas: MenuItem[] = [
  {
    id: "hb-tradicional",
    name: "Tradicional",
    description:
      "Carne de res y cerdo, jamón, queso, tomate, lechuga, maíz tierno, champiñones, ripio, cebolla caramelizada y salsas al gusto.",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "hb-pollo",
    name: "Pollo",
    description:
      "Filete de pollo a la plancha, jamón, queso, tomate, lechuga, maíz tierno, champiñones, ripio, cebolla caramelizada y salsas al gusto.",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "hb-ranchera",
    name: "Ranchera",
    description:
      "Carne de res y cerdo, chorizo, tocineta, jamón, queso, jalapeños, tomate, lechuga, maíz tierno, champiñones, ripio, cebolla caramelizada y salsas al gusto.",
    price: 13000,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop&crop=center",
    badge: "Popular",
  },
  {
    id: "hb-doble",
    name: "Doble Carne",
    description:
      "Dos porciones de carne de res y cerdo, jamón, queso, tomate, lechuga, maíz tierno, champiñones, ripio, cebolla caramelizada y salsas al gusto.",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "hb-solo-perros",
    name: "Solo Perros",
    description:
      "Carne mixta de res y cerdo, filete de pollo a la plancha, chorizo, tocineta, jamón, queso, lechuga, tomate, champiñones, maíz tierno, ripio y salsas al gusto.",
    price: 17000,
    image:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=400&fit=crop&crop=center",
    badge: "Signature",
  },
];

// ─── SALCHIPAPAS ──────────────────────────────────────────────────────────────
export const salchipapas: MenuItem[] = [
  {
    id: "sp-tradicional",
    name: "Tradicional",
    description: "Papa a la francesa, salchicha, queso y maíz tierno, salsas al gusto.",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "sp-mixta",
    name: "Mixta",
    description:
      "Papa a la francesa, tocineta o pollo a la plancha, salchicha, queso y maíz tierno, salsas al gusto.",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop&crop=center",
    badge: "Popular",
  },
  {
    id: "sp-choripapa",
    name: "Choripapa",
    description: "Papa a la francesa, chorizo, queso y maíz tierno, salsas al gusto.",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "sp-especial",
    name: "Especial",
    description:
      "Papa a la francesa, tocineta y pollo a la plancha, salchicha, queso y maíz tierno, salsas al gusto.",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&h=400&fit=crop&crop=center",
    badge: "Especial",
  },
  {
    id: "sp-picada",
    name: "Picada",
    description:
      "Papa amarilla, papa a la francesa, tocineta, chorizo, pollo, salchicha, queso, maíz tierno, guacamole y salsas al gusto.",
    price: 14000,
    image:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&h=400&fit=crop&crop=center",
    badge: "Signature",
  },
];

// ─── ADICIONALES GRATIS (personalizan el pedido sin costo extra) ───────────────
export const adicionales: string[] = [
  "Cebolla caramelizada",
  "Champiñones",
  "Jalapeños",
  "Maíz",
  "Piña calada",
  "Pico de gallo",
  "Ripio",
];

// ─── ADICIONALES CON COSTO EXTRA ──────────────────────────────────────────────
export const adicionalesPago: AdicionalPago[] = [
  { name: "Carne mixta", detail: "De res y cerdo", price: 5000 },
  { name: "Filete de pollo", detail: "A la plancha", price: 4000 },
  { name: "Salchicha americana", price: 3500 },
  { name: "Tocineta", price: 2000 },
  { name: "Queso", price: 1000 },
];

// ─── BEBIDAS ──────────────────────────────────────────────────────────────────
export const bebidas: BebidaItem[] = [
  {
    name: "Jugo HIT",
    sizes: [
      { label: "Pequeño", price: 2500 },
      { label: "Mediano", price: 3500 },
      { label: "Familiar", price: 6000 },
    ],
  },
  {
    name: "Gaseosa",
    sizes: [
      { label: "Pequeña", price: 2000 },
      { label: "Familiar", price: 6000 },
    ],
  },
  {
    name: "Agua personal",
    sizes: [{ label: "Personal", price: 2000 }],
  },
];

// ─── COMBOS ───────────────────────────────────────────────────────────────────
export const combos: ComboItem[] = [
  {
    id: "combo-papa-amarilla",
    includes: ["Porción de papa amarilla", "Gaseosa pequeña", "Guacamole"],
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "combo-papa-francesa",
    includes: ["Porción de papa a la francesa", "Gaseosa pequeña", "Guacamole"],
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop&crop=center",
  },
];

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contact = {
  whatsapp: "+573146868159",
  whatsappDisplay: "+57 314 6868159",
  whatsappMessage: "Hola Solo Perros 🌭 quiero hacer un pedido",
  mapsUrl: "https://maps.google.com/?q=1.2021321,-77.2566142",
  mapsDisplay: "Pasto, Nariño",
  address: "Manzana 9 Casa 10, Villa Flor 2, Pasto, Nariño",
};

// Helpers
export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CO")}`;
}

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? contact.whatsappMessage);
  return `https://wa.me/${contact.whatsapp.replace("+", "")}?text=${text}`;
}
