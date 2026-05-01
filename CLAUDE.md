# Solo Perros — Carta Digital

Página web de la carta del local de comidas rápidas **Solo Perros** (Pasto, Nariño).
Hot dogs, hamburguesas y combos con pedidos por WhatsApp.

## Comandos rápidos

| Comando           | Acción                                 |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Servidor local → http://localhost:4321 |
| `npm run build`   | Construir para producción → `dist/`    |
| `npm run preview` | Ver la versión final antes de publicar |

## Estructura del proyecto

```
src/
├── data/
│   └── menu.ts           ← ⭐ EDITAR AQUÍ: productos, precios, imágenes, contacto
├── components/
│   ├── Header.astro      ← Barra de navegación con logo y botón WhatsApp
│   ├── Hero.astro        ← Sección principal con banner
│   ├── MenuSection.astro ← Sección genérica de categoría (Hot Dogs / Hamburguesas)
│   ├── ProductCard.astro ← Tarjeta individual de producto
│   ├── Adicionales.astro ← Banda de adicionales disponibles
│   ├── Combos.astro      ← Sección de combos
│   ├── Location.astro    ← Mapa y datos de contacto
│   └── Footer.astro      ← Pie de página
├── layouts/
│   └── Layout.astro      ← HTML base: meta tags, fuentes, estructura
├── pages/
│   └── index.astro       ← Página principal — ensambla todos los componentes
└── styles/
    └── global.css        ← Colores de marca, fuentes, utilidades CSS

public/
└── images/
    └── logo.png          ← ⭐ Logo del negocio (reemplazar con el logo real)
```

## Cómo agregar un nuevo producto

Abre `src/data/menu.ts` y agrega un objeto al array correspondiente:

```typescript
// Para un hot dog nuevo:
{
  id: "hd-nuevo",           // ID único, sin espacios
  name: "El Nuevo",          // Nombre en la carta
  description: "...",        // Descripción de ingredientes
  price: 12000,              // Precio en pesos colombianos (número entero)
  image: "/images/hd-nuevo.jpg",  // Foto del producto (ver abajo)
  badge: "Nuevo",            // Opcional: "Nuevo", "Popular", "Especial", "Signature"
},
```

## Cómo cambiar la foto de un producto

1. Guarda la foto en `public/images/nombre-del-producto.jpg`
   - Tamaño recomendado: 600×400 px
   - Formato: JPG o WebP
   - Nombre: sin espacios ni tildes (ej: `hd-especial.jpg`, `hb-ranchera.jpg`)

2. En `src/data/menu.ts`, cambia el campo `image`:

   ```typescript
   image: "/images/hb-ranchera.jpg",
   ```

3. Corre `npm run dev` para verificar que se ve bien.

## Cómo agregar una categoría nueva

1. En `src/data/menu.ts`, crea un nuevo array (como `hotdogs` o `hamburguesas`).
2. En `src/pages/index.astro`, importa el array y agrega un `<MenuSection>`:
   ```astro
   import {miNuevaCategoria} from '../data/menu'
   <MenuSection id="mi-seccion" title="Mi Categoría" emoji="🍕" items={miNuevaCategoria} accent="yellow"
   />
   ```

## Colores de marca

| Color       | Hex       | Uso                                     |
| ----------- | --------- | --------------------------------------- |
| Rojo        | `#E31E24` | Borde logo, badges, botones principales |
| Azul oscuro | `#0D1B3E` | Fondo header, fondo de tarjetas         |
| Azul medio  | `#1B3F8B` | Bordes, acentos secundarios             |
| Amarillo    | `#F5A623` | Acentos, combos, etiquetas              |
| Naranja     | `#F07D00` | Badges "Signature", hover               |

## Despliegue

### Vercel (recomendado — más fácil)

1. Ir a vercel.com → New Project
2. Conectar el repositorio de GitHub
3. Vercel detecta Astro automáticamente → clic en Deploy
4. Cada `git push` a `main` despliega automáticamente

### GitHub Pages

1. Subir el código a GitHub
2. Settings → Pages → Source: **GitHub Actions**
3. El próximo `git push` a `main` despliega automáticamente
