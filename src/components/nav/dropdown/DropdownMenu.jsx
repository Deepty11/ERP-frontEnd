import React from "react"
import { motion } from "framer-motion"

const DropdownMenu = ({ menuItems, isOpen, hasLastDivider = false }) => {
    return (
        <motion.div
            initial={{ 'opacity': 0, height: 0}}
            animate={isOpen
                ? { opacity: 1, height: 'auto' }
                : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10 top-full left-0">

            {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                    <button onClick={(e) => {
                        console.log("button")
                        console.log(e.target)
                    }

                    }
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                        {React.cloneElement(item.icon, { className: "mr-2" })}
                        {item.label}
                    </button>

                    {hasLastDivider === true && index === menuItems.length - 2 && <hr className="navbar-divider" />}
                </React.Fragment>
            ))}

        </motion.div>

    )
}

export default DropdownMenu