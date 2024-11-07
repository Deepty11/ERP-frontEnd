import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav/Navbar'
import { Outlet, useNavigate } from 'react-router'
import Asidebar from '../components/aside/Asidebar'
import Herobar from '../components/common_components/Herobar'

const MainLayout = ({ pageTitle }) => {
    const [expandSidebar, setExpandSidebar] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)

    useEffect(() => {
        const root = document.getElementById("root")
        root.style.marginLeft = "0px"
        const data = localStorage.getItem('loggedInUser')
        const user = JSON.parse(data)
        console.log("user" + user)

        if (user) {
            console.log("User ache")
            setLoggedInUser(user)
        } else {
            console.log("User nai")
        }
    }, [])

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
                loggedInUser={loggedInUser} />
            <Asidebar
                expandSidebar={expandSidebar}
                loggedInUser={loggedInUser} />
            <Herobar title={pageTitle} />
            <Outlet />
        </>
    )
}

export default MainLayout