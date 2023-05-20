import { createContext, useEffect, useState } from "react";

// Define the User type
interface User {
  id: number;
  name: string;
  profilePic: string;
}

// Define the AuthContextType
interface AuthContextType {
  currentUser: User | null;
  login: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Retrieve the user from local storage, or provide a default value
  const storedUser = localStorage.getItem("user");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const [currentUser, setCurrentUser] = useState<User>(parsedUser);

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Patrick Müller",
      profilePic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
  };
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
