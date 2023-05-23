import { createContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggle: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: false,
  toggle: () => {},
});

interface DarkModeContextProviderProps {
  children: ReactNode;
}

export const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem("darkMode") || "false")
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
