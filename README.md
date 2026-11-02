# React-Movie 🎬

A modern, responsive React-based movie web application built with **React 19**, **Vite**, **React Router v7**, and **The Movie Database (TMDB) REST API**.

Browse popular movies, search across thousands of titles, view release years and ratings, and save your favorite movies with persistent local storage.

---

## ✨ Features

- 🌟 **Popular Movies Showcase**: Automatically loads and displays trending movies with posters, titles, and release dates.
- 🔍 **Live Movie Search**: Fast search capability to look up movies by name.
- ❤️ **Favorites System**: Add and remove movies to/from your personal Favorites list with instant state synchronization.
- 💾 **Local Storage Persistence**: Your favorite movies stay saved even after reloading or closing the browser.
- 📱 **Responsive Design**: Clean and modern dark-themed layout that adapts smoothly across desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool & Dev Server**: [Vite](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **State Management**: React Context API (`MovieContext`) & Custom Hooks
- **Data Source**: [TMDB (The Movie Database) API](https://www.themoviedb.org/)
- **Styling**: Modern CSS3 (Grid, Flexbox, Keyframe Animations)
- **Code Quality**: ESLint flat config with React Hooks & React Refresh rules

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/1630aniruddhanimbalkar-create/React-Movie.git
   ```

2. Navigate into the frontend project directory:
   ```bash
   cd "React-Movie/frontend"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## 📦 Available Scripts

In the `frontend` folder, you can run:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles and compiles the production build to the `dist` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.

---

## 📂 Project Structure

```
React Movie/
├── .gitignore
├── README.md
└── frontend/
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   └── vite.svg
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── assets/
        ├── components/
        │   ├── MovieCard.jsx
        │   └── NavBar.jsx
        ├── contexts/
        │   └── MovieContext.jsx
        ├── css/
        │   ├── App.css
        │   ├── Favorites.css
        │   ├── Home.css
        │   ├── index.css
        │   ├── MovieCard.css
        │   └── Navbar.css
        ├── pages/
        │   ├── Favorites.jsx
        │   └── Home.jsx
        └── services/
            └── api.js
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
