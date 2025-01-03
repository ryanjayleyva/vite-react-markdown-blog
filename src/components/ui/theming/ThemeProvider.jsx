import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext(undefined);

const DEFAULT_THEME = "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME;
    applyTheme(savedTheme);
  }, []);

  const themeSwitcher = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeSwitcher }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ThemeContext;
