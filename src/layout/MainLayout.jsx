import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav/Navbar'
import { Outlet, useNavigate } from 'react-router'
import Asidebar from '../components/aside/Asidebar'
import Herobar from '../components/Herobar'
import { useAuth } from '../components/AuthProvider'
import userService from '../services/UserService'

const MainLayout = ({ pageTitle }) => {
    const [expandSidebar, setExpandSidebar] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)

    useEffect(() => {
        const data = localStorage.getItem('loggedInUser')
        const user = JSON.parse(data)
        console.log("user" + user)

        if (user) {
            console.log("User ache")
            setLoggedInUser(user)
        } else {
            console.log("User nai")
        }
        //setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    // const { loggedInUsername } = useAuth()
    // const navigate = useNavigate()

    const toggleSidebar = () => {
        setExpandSidebar(!expandSidebar)

        changeBodyMargin()
    }

    const changeBodyMargin = () => {
        let root = document.getElementById("root")
        root.style.marginLeft = !expandSidebar ? "15rem" : "0px"
        root.style.marginRight = !expandSidebar ? "-15rem" : "0px"
    }

    // useEffect(() => {
    //     const user = localStorage.getItem('loggedInUser')
    //     console.log("bleh")

    //     if(user) {
    //         console.log("User ache")
    //         setLoggedInUser(user)
    //     } else {
    //         console.log("User nai")
    //     }
    //     //setLoggedInUser(localStorage.getItem('loggedInUser'))
    // }, [])

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