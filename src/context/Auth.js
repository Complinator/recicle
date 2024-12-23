import React, { createContext, useState, useContext } from 'react';

// Sample user data
const MOCK_USERS = [
  {
    email: 'usuario1@example.com',
    password: '123456',
    name: 'Juan Pérez',
    subscription: 'básica',
    points: 150
  },
  {
    email: 'usuario2@example.com',
    password: '123456',
    name: 'María García',
    subscription: 'premium',
    points: 340
  }
];

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    const user = MOCK_USERS.find(
      u => u.email === email && u.password === password
    );
    if (user) {
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const register = (email, password, name) => {
    if (MOCK_USERS.some(u => u.email === email)) {
      return false;
    }
    
    const newUser = {
      email,
      password,
      name,
      subscription: 'básica',
      points: 0
    };
    
    MOCK_USERS.push(newUser);
    const { password: _, ...userWithoutPassword } = newUser;
    setCurrentUser(userWithoutPassword);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateSubscription = (type) => {
    setCurrentUser(prev => ({
      ...prev,
      subscription: type
    }));
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, updateSubscription }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);