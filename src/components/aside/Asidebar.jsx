import React, { useEffect, useState } from 'react'
import '../../css/aside/asidebar.css'
import { Link } from 'react-router-dom'
import { FaEdit, FaGithub, FaList, FaQuestionCircle, FaTv } from 'react-icons/fa'
import { useAuth } from '../AuthProvider'
import userService from '../../services/UserService'

const Asidebar = ({ expandSidebar }) => {
    const { loggedInUsername } = useAuth()
    const [loggedInUserId, setLoggedInUserId] = useState(null)

    useEffect(() => {
        if (loggedInUserId == null) {
            userService.getUserByUsername(
                loggedInUsername(),
                (user) => {
                    setLoggedInUserId(user.id)
                },
                (error) => {
                    console.log(error)

                })
        }


    }, [loggedInUserId])

    return (
        <aside className={`aside ${expandSidebar ? 'expand-sidebar' : ''}`}>
            <div className="aside-tools">
                <div>
                    Admin <b className="font-black">One</b>
                </div>
            </div>
            <div className="menu is-menu-main">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li className="--set-active-index-html">
                        <Link to="/dashboard">
                            <span className="icon"><FaTv /></span>
                            <span className="menu-item-label">Dashboard</span>
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Examples</p>
                <ul className="menu-list">
                    <li className="--set-active-tables-html">
                        <Link to="/add-task">
                            <span className="icon"><FaEdit /></span>
                            <span className="menu-item-label">Add Task</span>
                        </Link>
                    </li>
                    <li className="--set-active-tables-html">
                        <Link to="/users">
                            <span className="icon"><FaList /></span>
                            <span className="menu-item-label">Users</span>
                        </Link>
                    </li>

                    <li className="--set-active-tables-html">
                        <Link to="/add-user">
                            <span className="icon"><FaEdit /></span>
                            <span className="menu-item-label">Add User</span>
                        </Link>
                    </li>

                    <li className="--set-active-tables-html">
                        <Link to="/designations">
                            <span className="icon"><FaList /></span>
                            <span className="menu-item-label">Designations</span>
                        </Link>
                    </li>

                    <li className="--set-active-tables-html">
                        <Link to="/add-designation">
                            <span className="icon"><FaEdit /></span>
                            <span className="menu-item-label">Add Designation</span>
                        </Link>
                    </li>

                    <li className="--set-active-tables-html">
                        <Link to="/leave/create-application">
                            <span className="icon"><FaEdit /></span>
                            <span className="menu-item-label">Create Leave Application</span>
                        </Link>
                    </li>

                    <li className="--set-active-tables-html">
                        <Link to="/leave/applications">
                            <span className="icon"><FaList /></span>
                            <span className="menu-item-label">Leave Applications</span>
                        </Link>
                    </li>

                    <li className="--set-active-tables-html">
                        <Link to={`/leave/applications?userId=${loggedInUserId}`}>
                            <span className="icon"><FaList /></span>
                            <span className="menu-item-label">My Leave Information</span>
                        </Link>
                    </li>

                    <li className="--set-active-forms-html">
                        <Link to="forms.html">
                            <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
                            <span className="menu-item-label">Forms</span>
                        </Link>
                    </li>
                    <li className="--set-active-profile-html">
                        <Link to="profile.html">
                            <span className="icon"><i className="mdi mdi-account-circle"></i></span>
                            <span className="menu-item-label">Profile</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="dropdown">
                            <span className="icon"><i className="mdi mdi-view-list"></i></span>
                            <span className="menu-item-label">Submenus</span>
                            <span className="icon"><i className="mdi mdi-plus"></i></span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="#void">
                                    <span>Sub-item One</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#void">
                                    <span>Sub-item Two</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">About</p>
                <ul className="menu-list">
                    <li>
                        <Link to="https://justboil.me/tailwind-admin-templates/free-dashboard/" className="has-icon">
                            <span className="icon"><FaQuestionCircle /></span>
                            <span className="menu-item-label">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://github.com/justboil/admin-one-tailwind" className="has-icon">
                            <span className="icon"><FaGithub /></span>
                            <span className="menu-item-label">GitHub</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Asidebar