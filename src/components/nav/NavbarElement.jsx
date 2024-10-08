import React from "react"

const NavbarElement = ({ icon, elementName, handler }) => {
    return (
        <a
            href="#"
            className="flex items-center space-x-2 text-black hover:text-gray-600 px-4 py-2"
            onClick={handler}>
            <span>{elementName}</span>
            <span className="icon">
                {React.cloneElement(icon)}
            </span>
        </a>
    )
}

export default NavbarElement