import { useContext } from "react";
import ThemeProvider from "../theme/ThemeProvider.jsx";

export const useTheme = () => {
  const context = useContext(ThemeProvider);
  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider. Wrap your component tree with <ThemeProvider>.",
    );
  }
  return context;
};
