'use client'
import { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { User, UserContextType } from "@/types/user.type"

const AuthContext = createContext<UserContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) setUser(JSON.parse(user))
        setIsLoading(false)
    }, [])

    const login = (data: User) => {
        setUser(data)
        localStorage.setItem("user", JSON.stringify(data))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }} >
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}