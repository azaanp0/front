# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Project Notes for This Frontend

### What was fixed

- Reworked image handling across the app using a centralized responsive image component.
- Improved mobile responsiveness and fixed layout issues in homepage banners, menus, product cards, and checkout views.
- Added robust fallback handling for broken image loads.
- Cleaned up ESLint issues and removed unused imports / unused state variables.
- Verified production build output successfully.

### How to run

```bash
cd d:\store\frontend
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Notes

- ESLint should be run from `frontend` using `npm run lint`.
- `postcss.config.cjs`, `tailwind.config.cjs`, and the external static vendor directories are excluded from the project linting rules.
- The Vite dev server is expected to start on `http://127.0.0.1:5173/`.
