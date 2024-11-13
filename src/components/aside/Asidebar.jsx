import '../../css/aside/asidebar.css'
import { Link } from 'react-router-dom'
import { FaEdit, FaGithub, FaList, FaPlus, FaQuestionCircle, FaTv } from 'react-icons/fa'
import ListOption from './ListOption'
import { useState } from 'react'
import { MdDashboard } from 'react-icons/md'

const Asidebar = ({ expandSidebar, loggedInUser }) => {
    const [expandList, setExpandList] = useState(false)

    const handleDropdownAction = (e) => {
        setExpandList(!expandList)

        if (expandList) {
            e.target.parentNode.classList.toggle('active')
        }
    }

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
                    <ListOption
                        url="/dashboard"
                        icon={<FaTv />}
                        title="Dashboard"
                    />
                    <ListOption
                        url="/add-task"
                        icon={<FaEdit />}
                        title="Add Task"
                    />
                    {/* {console.log(loggedInUser.role)} */}
                    {loggedInUser?.role == "ADMIN" &&
                        <ListOption
                            url="/users"
                            icon={<FaList />}
                            title="Users"
                        />}

                    {loggedInUser?.role == "ADMIN" &&
                        <ListOption
                            url="/add-user"
                            icon={<FaEdit />}
                            title="Add User"
                        />}

                    <ListOption
                        url="/designations"
                        icon={<FaList />}
                        title="Designations"
                    />

                    {loggedInUser?.role == "ADMIN" &&
                        <ListOption
                            url="/add-designation"
                            icon={<FaEdit />}
                            title="Add Designation"
                        />}

                    <ListOption
                        url="/leave/create-application"
                        icon={<FaEdit />}
                        title="Create Leave Application" />

                    {loggedInUser?.role == 'ADMIN' &&
                        <ListOption
                            url="/leave/applications"
                            icon={<FaList />}
                            title="Leave Applications" />}

                    <ListOption
                        url={`/leave/applications?userId=${loggedInUser?.id}`}
                        icon={<FaList />}
                        title="My Leave Information" />

                    <ListOption
                        url={`/task-dashboard`}
                        icon={<MdDashboard />}
                        title="Task Board" />

                    <li>
                        <Link className="dropdown" onClick={handleDropdownAction}>
                            <span className="icon"><FaList /></span>
                            <span className="menu-item-label">Task Management</span>
                            <span className="icon"><FaPlus /></span>
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
                {/* <p className="menu-label">About</p>
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
                </ul> */}
            </div>
        </aside>
    )
}

export default Asidebar