import { createContext, useState, useEffect } from 'react';

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token !== null && token !== undefined) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>{props.children}</TokenContext.Provider>
  );
};
