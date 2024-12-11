"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedPhoneNumber = localStorage.getItem("phoneNumber");
    if (savedPhoneNumber) {
      setPhoneNumber(savedPhoneNumber);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (number) => {
    localStorage.setItem("phoneNumber", number);
    setPhoneNumber(number);
    setIsLoggedIn(true);
    router.push("/user");
  };

  const handleLogout = () => {
    localStorage.removeItem("phoneNumber");
    setPhoneNumber("");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        phoneNumber,
        isLoggedIn,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
