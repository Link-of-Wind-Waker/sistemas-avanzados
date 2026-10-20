# ☕ Café Express — Reto de Sistemas Avanzados

Tienda online de café hecha con **Next.js 16 + TypeScript + Tailwind CSS**.

La app "funciona"... más o menos. Tiene **errores escondidos a propósito**: de lógica,
de diseño, de responsive (mobile vs. desktop), de accesibilidad, de buenas prácticas y
hasta de seguridad. Tu misión es encontrarlos y corregirlos.

**Participantes:** Kevin y Niko.

---

## 🚀 Cómo empezar

1. Haz un **fork** de este repositorio (botón *Fork* arriba a la derecha).
2. Clona **tu fork**:
   ```bash
   git clone https://github.com/TU-USUARIO/sistemas-avanzados.git
   cd sistemas-avanzados
   npm install
   npm run dev
   ```
3. Abre <http://localhost:3000> y pruébala en **desktop y en mobile**
   (DevTools → modo responsive, o desde tu celular).

## 🔧 Cómo enviar tus correcciones

1. Crea una rama por cada corrección, con tu nombre:
   ```bash
   git checkout -b kevin/arreglar-total-carrito
   ```
2. Haz tus cambios y commits con mensajes claros.
3. Sube la rama a tu fork: `git push origin kevin/arreglar-total-carrito`
4. Abre un **Pull Request** hacia la rama `main` de este repositorio y llena la plantilla.

El profesor revisa y hace merge. **Solo cuentan los PRs que se mergean.**

## 🏆 Reglas y puntaje

| Tipo de error | Puntos |
| --- | --- |
| Diseño / texto / visual | 1 |
| Responsive (mobile ↔ desktop) | 2 |
| Lógica / funcionalidad | 3 |
| Accesibilidad | 2 |
| Seguridad / buenas prácticas | 3 |

- **Un PR = un error** (o un grupo de errores muy relacionados). PRs gigantes con todo mezclado no se aceptan.
- **El primero que lo arregla se lleva los puntos.** Si los dos arreglan lo mismo, gana el PR que se abrió primero (y que esté bien hecho).
- Cada PR debe explicar: **qué estaba mal, cómo lo encontraste y cómo lo arreglaste.**
- El PR debe pasar el CI (`lint` + `build`). Si rompe el build, no cuenta.
- Si tu PR introduce un error nuevo: **−2 puntos**.
- Antes de abrir un PR, actualiza tu fork con `main` para evitar conflictos:
  ```bash
  git remote add upstream https://github.com/pablofelipe01/sistemas-avanzados.git
  git fetch upstream
  git rebase upstream/main
  ```
- **Bonus:** errores que el profesor no sabía que existían 😉

> Pista: hay más de 20 errores. Algunos solo se ven en el celular, otros solo
> después de arreglar otro error, y otros solo leyendo el código.

## 📁 Estructura

```
src/
├── app/            # Páginas (inicio, productos, detalle, carrito, checkout)
├── components/     # Navbar, Footer, ProductCard, PromoBanner
├── context/        # Estado global del carrito
├── data/           # Catálogo de productos
└── lib/            # Utilidades (formato de precios, envío)
```

¡Suerte! ☕
