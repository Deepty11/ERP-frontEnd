import React, { useEffect } from 'react'

const NavbarMenu = ({ items }) => {
    return (
        <div className="navbar-menu active" id="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item dropdown has-divider">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <a href={item.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                                {React.cloneElement(item.icon, { className: "mr-2" })}
                                {item.label}
                            </a>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu