# Cinemateca de Xiao — Catálogo interactivo de películas

Aplicación web hecha con **React + Vite** (sin backend) para explorar un catálogo de películas, con temática inspirada en Xiao de Genshin Impact (paleta anemo y detalles dorados).

## Funcionalidades

- Catálogo con tarjetas: póster, título, género, año, calificación y descripción.
- Buscador por título que se actualiza mientras se escribe.
- Filtros combinables: género, año, calificación mínima y solo favoritas.
- Detalle de película en una ventana que se puede cerrar (botón, clic fuera o tecla Esc).
- Favoritos: agregar, quitar y ver el listado en un panel (se guardan solo los IDs).
- Calificación personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Estructura

```
src/
├── data/movies.js            # 10 películas
├── utils/movieUtils.js       # filtros y listas de géneros/años
├── components/
│   ├── Header.jsx            # título + SearchBar
│   ├── SearchBar.jsx
│   ├── Filters.jsx
│   ├── MovieList.jsx         # lista con map() y mensaje sin resultados
│   ├── MovieCard.jsx
│   ├── MovieDetail.jsx
│   ├── StarRating.jsx
│   └── Favorites.jsx
├── App.jsx                   # estado compartido
├── App.css
└── index.css
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Notas

- Los pósters son ilustraciones de Xiao en formato SVG (`public/posters/xiao-*.svg`). Como son dibujos de tinta oscura, se muestran sobre un fondo de papel claro. Puedes cambiar el campo `image` de cada película por otra ruta o URL.
- La tipografía original de Genshin Impact es propietaria, así que se usan Cinzel y Marcellus (Google Fonts), que se cargan desde internet.
