import React from 'react'

const CardHeaderComponent = ({ title, leftIcon, rightIcon }) => {
    const rightIconView = () => {
        return <a href="#" className="card-header-icon">
            <span className="icon">
                {rightIcon}
            </span>
        </a>
    }

    return (
        <header className="card-header">
            <p className="card-header-title">
                {leftIcon && <span className="icon">
                    {leftIcon}
                </span>}

                {title}
            </p>
            {rightIcon && rightIconView()}

        </header>
    )
}

export default CardHeaderComponent