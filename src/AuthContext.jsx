// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);

  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
