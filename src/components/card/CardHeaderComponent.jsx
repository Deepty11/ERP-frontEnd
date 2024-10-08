import React from 'react'

const CardHeaderComponent = ({ title, icon }) => {
    return (
        <header className="card-header">
            <p className="card-header-title">
                {icon && <span className="icon">
                    {icon}
                </span>}

                {title}
            </p>
        </header>
    )
}

export default CardHeaderComponent