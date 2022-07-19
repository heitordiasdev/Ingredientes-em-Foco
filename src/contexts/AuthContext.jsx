import { createContext, useState } from 'react';
import { useApi } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const api = useApi();

    const signin = async (email, password) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            localStorage.setItem("TOKEN", data.token);
            localStorage.setItem("ID", data.user.id)
            return true;
        }
        return false;
    }

    const signout = async () => {
        setUser(null);
        await api.signout();

    }

    return (
        <AuthContext.Provider value={{ user, setUser, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}