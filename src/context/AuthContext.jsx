import React, { createContext, useState, useContext }  from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const stored = localStorage.getItem('isAuthenticated');
        return stored === 'true';
     });


    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('user');
        try {
            return stored ? JSON.parse(stored) : null;
        } catch (e) {
            console.error('Failed to parse user from localStorage:', e);
            return null;
        }
    });

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
         localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
         localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', true);
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);