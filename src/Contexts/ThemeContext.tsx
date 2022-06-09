import * as React from "react";

type ThemeContextType = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = React.createContext<ThemeContextType| null>(null);
