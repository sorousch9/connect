import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  country: string;
  language: string;
  website: string;
  facebook: string;
  github: string;
  branch: string;
  title: string;
  coverPic: string;
  profilePhoto: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (inputs: LoginInputs) => void;
}

interface LoginInputs {
  username: string;
  password: string;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedUser = localStorage.getItem("user");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const [currentUser, setCurrentUser] = useState<User>(parsedUser);
  const login = async (inputs: LoginInputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);
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
