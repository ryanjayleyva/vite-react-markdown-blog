import styles from "../theming/theme.module.css";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { useEffect, useState } from "react";

const DEFAULT_THEME = "light";

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME;
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const themeSwitcher = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={themeSwitcher}
      className={styles.themeSwitcher}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitcher;
