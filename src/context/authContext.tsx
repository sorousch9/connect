import { createContext, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  profilePic: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (): void => {
    // TO DO
    setCurrentUser({
      id: 1,
      name: "Patrick Müller",
      profilePic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
