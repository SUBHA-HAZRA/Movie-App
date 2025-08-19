Great start! Here’s a tightened, typo-fixed, and consistently formatted README you can copy as-is.

# 🎬 Movie App
React + Vite movie explorer to search films, browse categories, and view details.

Live site : https://movie-app-rho-olive-60.vercel.app/

## ✨ Features
- 🔍 Search movies by title with a dedicated results page
- 🗂 Category browsing (e.g., trending, genres)
- 📄 Movie detail pages (overview, release date, rating, runtime, etc.)
- ♻️ Reusable components (Card, Header, Footer)
- ⬆️ Scroll-to-top between route changes
- ⚡ Fast Vite dev/build pipeline
- 🎨 Tailwind CSS 4 utility-first styling
- 🖼️ Icons via Font Awesome and React Icons

## 🧱 Project Structure
```
src/
├─ assets/                         # Static assets (images/icons)
├─ Components/
│  ├─ Card/
│  │  └─ Card.jsx
│  ├─ Footer/
│  │  └─ Footer.jsx
│  ├─ Header/
│  │  └─ Header.jsx
│  └─ ScrollToTop/
├─ Pages/
│  ├─ Category/
│  │  └─ Category.jsx
│  ├─ Home/
│  │  └─ Home.jsx
│  ├─ MovieDetailPage/
│  │  └─ MovieDetailPage.jsx
│  └─ SearchResults/
│     └─ SearchResults.jsx
├─ App.jsx
├─ index.css
├─ main.jsx
```

## 🛠️ Tech Stack
- React 19, React DOM 19
- React Router DOM 7
- Vite 7
- Tailwind CSS 4 (+ @tailwindcss/vite)
- Font Awesome (SVG Core + Free Solid), React Icons
- ESLint 9

## 🌐 Deployment
Deployed on Vercel (or any static host).  
Live site : https://movie-app-rho-olive-60.vercel.app/
