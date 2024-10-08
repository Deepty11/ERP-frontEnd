import React, { useContext, useState } from 'react'
import '../../css/nav/navbar.css'
import '../../css/icon.css'
import NavbarDropdown from './dropdown/NavbarDropdown'
import { FaUser, FaCog, FaEnvelope, FaSignOutAlt, FaBars, FaQuestionCircle, FaRegTimesCircle } from 'react-icons/fa';
import NavbarElement from './NavbarElement';
import { FaCircleQuestion } from 'react-icons/fa6';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import NavbarMenu from './NavbarMenu';
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router';

function Navbar({ toggleSidebar, isSidebarExpanded }) {

    const userMenuItems = [
        { icon: <FaUser />, label: 'Profile', href: '#profile' },
        { icon: <FaCog />, label: 'Settings', href: '#settings' },
        { icon: <FaEnvelope />, label: 'Messages', href: '#messages' },
        { icon: <FaSignOutAlt />, label: 'Logout', href: '#logout' },
    ];

    const navbarMenuItems = [
        { icon: <FaUser />, label: 'Profile', href: '#profile' },
        { icon: <FaCog />, label: 'Settings', href: '#settings' },
        { icon: <FaEnvelope />, label: 'Messages', href: '#messages' },
        { icon: <FaQuestionCircle />, label: 'About', href: '#about' },
        { icon: <FaSignOutAlt />, label: 'Logout', href: '#logout' },

    ];

    const [displayNavbarMenu, setDisplayNavbarMenu] = useState(false)

    const onClickNavBarMenuBtn = () => {
        console.log("I am clicked!")
        setDisplayNavbarMenu(!displayNavbarMenu)
    }

    const signoutIcon = <FaSignOutAlt />;
    const circleQuestionIcon = <FaCircleQuestion />;

    const { logout } = useAuth()
    const navigate = useNavigate()

    return (
        <nav
            id="navbar-main"
            className={`navbar is-fixed-top ${isSidebarExpanded ? 'expand-sidebar' : ''}`}>
            <div className="navbar-brand">
                <a className="navbar-item mobile-aside-button"
                    onClick={toggleSidebar}>
                    <span className="icon">
                        <FaBars className='mdi-24px' />
                    </span>
                </a>
                <div className="navbar-item">
                    <div className="control">
                        <input
                            placeholder="Search everywhere..."
                            className="input" />
                    </div>
                </div>
            </div>
            <div
                className="navbar-brand is-right"
                onClick={onClickNavBarMenuBtn}>
                <a
                    className="navbar-item --jb-navbar-menu-toggle"
                    data-target="navbar-menu">
                    <span className="icon">
                        {displayNavbarMenu
                            ? <FaRegTimesCircle className='mdi-24px' />
                            : <BiDotsVerticalRounded className='mdi-24px' />}
                    </span>
                </a>
            </div>

            {displayNavbarMenu && <NavbarMenu items={navbarMenuItems} />}

            <div className="navbar-menu" id="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item dropdown has-divider has-user-avatar">
                        <NavbarDropdown items={userMenuItems}
                            btnName="John Doe"
                            hasUserAvatar={true}
                            isUserName={true}
                            hasLastDivider={true} />
                    </div>

                    <NavbarElement icon={circleQuestionIcon} elementName="About" />
                    <NavbarElement
                        icon={signoutIcon}
                        elementName="Logout"
                        handler={() => {
                            logout()
                            navigate("/login")
                        }} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar