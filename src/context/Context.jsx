import { useState, useEffect } from "react";
import { createContext } from "react";

const Context = createContext();

const TokenContext = ({ children }) => {
  const [registered, setRegistered] = useState(JSON.parse(window.localStorage.getItem('registered')) || [])
  const [token, setToken] = useState(() => {
    try {
      const storedToken = window.localStorage.getItem("token");
      return storedToken ? JSON.parse(storedToken) : false;
    } catch (e) {
      console.error("LocalStorage olishda xatolik bo'ldi bor", e);
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("token", JSON.stringify(token));
    } catch (e) {
      console.error("Xato yuz berdi", e);
    }
  }, [token]);
  window.localStorage.setItem('registered', JSON.stringify(registered))
  return (
    <Context.Provider value={{ token, setToken, registered, setRegistered }}>{children}</Context.Provider>
  );
};


export { Context, TokenContext };
