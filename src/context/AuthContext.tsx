import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: ()=> void;
    logout: ()=> void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode}> = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = ()=>setAuthenticated(true);
    const logout = ()=>setAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;