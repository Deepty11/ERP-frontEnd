import React, { useState } from 'react'
import Navbar from '../components/nav/Navbar'
import { Outlet } from 'react-router'
import Asidebar from '../components/aside/Asidebar'
import Herobar from '../components/Herobar'

const MainLayout = ({ pageTitle }) => {
    const [expandSidebar, setExpandSidebar] = useState(false)

    const toggleSidebar = () => {
        setExpandSidebar(!expandSidebar)

        changeBodyMargin()
    }

    const changeBodyMargin = () => {
        let root = document.getElementById("root")
        root.style.marginLeft = !expandSidebar ? "15rem" : "0px"
        root.style.marginRight = !expandSidebar ? "-15rem" : "0px"
    }

    return (
        <> 
            <Navbar
                toggleSidebar={toggleSidebar}
                isSidebarExpanded={expandSidebar}
            />
            <Asidebar expandSidebar={expandSidebar} />
            <Herobar title={pageTitle} />
            <Outlet />
        </>
    )
}

export default MainLayout