import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { generateCSSVariables } from "./constants/ui";

// Initialize theme before rendering
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") as
    | "light"
    | "dark"
    | "system"
    | null;

  let isDark = false;

  if (savedTheme === "dark") {
    isDark = true;
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    isDark = false;
    document.documentElement.classList.remove("dark");
  } else {
    // System preference
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Apply CSS variables for the current theme
  const cssVariables = generateCSSVariables(isDark);
  Object.entries(cssVariables).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}

// Initialize theme before creating the root
initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
