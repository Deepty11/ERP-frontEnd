import React from 'react'

const EmptyViewComponent = ({message}) => {
    return (
        <div className='empty-view'>
            <h1>{message}</h1>
        </div>
    )
}

export default EmptyViewComponent