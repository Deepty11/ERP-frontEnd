import React, { useEffect } from 'react'
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const NavbarMenu = ({ items, displayNavbarMenu, callback }) => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleAction = (e) => {
        console.log(e.target.name)
        callback()
        switch (e.target.name) {
            case 'Logout':
                logout()
                navigate('/login')
                break;
            case 'Profile':
                navigate('/profile')
            default:
                break;
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={displayNavbarMenu
                ? { opacity: 1, height: 'auto' }
                : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-menu active"
            id="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item dropdown has-divider">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <button
                            style={{width: '100%'}}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                                name={item.label}
                                onClick={handleAction}>
                                {React.cloneElement(item.icon, { className: "mr-2" })}
                                {item.label}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default NavbarMenu