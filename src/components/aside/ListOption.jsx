import React from 'react'
import { Link } from 'react-router-dom'

const ListOption = ({url, icon, title}) => {
    return (
        <li className="--set-active-tables-html">
            <Link to={url}>
                <span className="icon">{icon}</span>
                <span className="menu-item-label">{title}</span>
            </Link>
        </li>
    )
}

export default ListOption