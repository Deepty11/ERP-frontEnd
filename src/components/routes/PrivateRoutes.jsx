import React from 'react'
import { useAuth } from '../AuthProvider'
import { Navigate, Outlet, useNavigate } from 'react-router'

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth()

    return isAuthenticated() ? <Outlet/> : <Navigate to={"/login"}/>
}

export default PrivateRoutes