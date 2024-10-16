import { jwtDecode } from 'jwt-decode'
import React, { createContext, useContext } from 'react'
import userService from '../services/UserService'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const login = (token) => {
        localStorage.setItem('token', token)
    }

    const logout = () => {
        localStorage.removeItem('token')
    }

    const isAuthenticated = () => {
        let token = localStorage.getItem('token')

        if (token == null) {
            return false;
        }

        let tokenExpirationTime = jwtDecode(token).exp
        let currentTime = Date.now() / 1000 // converting milisecond to second

        if (tokenExpirationTime > currentTime) {
            return true
        }

        localStorage.removeItem('token')
        return false
    }

    const loggedInUsername = () => {
        const token = localStorage.getItem('token')
        if (token == null) {
            return null;
        }

        return jwtDecode(token).sub
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loggedInUsername }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}