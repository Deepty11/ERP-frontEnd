import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav/Navbar'
import { Outlet } from 'react-router'
import Asidebar from '../components/aside/Asidebar'
import Herobar from '../components/Herobar'
import { useAuth } from '../components/AuthProvider'
import userService from '../services/UserService'

const MainLayout = ({ pageTitle }) => {
    const [expandSidebar, setExpandSidebar] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const { loggedInUsername } = useAuth()

    const toggleSidebar = () => {
        setExpandSidebar(!expandSidebar)

        changeBodyMargin()
    }

    const changeBodyMargin = () => {
        let root = document.getElementById("root")
        root.style.marginLeft = !expandSidebar ? "15rem" : "0px"
        root.style.marginRight = !expandSidebar ? "-15rem" : "0px"
    }

    useEffect(() => {
        if (!loggedInUser) {
            const fetchLoggedInUser = () => {
                 userService.getUserByUsername(
                    loggedInUsername(),
                    (user) => {
                        console.log("success")
                        setLoggedInUser(user)
                    },
                    (error) => {
                        console.log(error)
                    })
            }

            fetchLoggedInUser()

        }
    }, [loggedInUser])

    return (
        <>
            <Navbar
                toggleSidebar={toggleSidebar}
                isSidebarExpanded={expandSidebar}
            />
            <Asidebar expandSidebar={expandSidebar} loggedInUser={loggedInUser} />
            <Herobar title={pageTitle} />
            <Outlet />
        </>
    )
}

export default MainLayout