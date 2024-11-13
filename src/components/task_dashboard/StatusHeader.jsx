import React, { useEffect } from 'react'

const StatusHeader = ({statusAttribute}) => {
    return (
        <div className='status-header mb-4' style={{backgroundColor: statusAttribute?.backgroundColor}}>
            <label>{statusAttribute?.title}</label>
            <div className='status-count' style={{backgroundColor: statusAttribute?.countBG}}>
                <label>{statusAttribute?.count}</label>
            </div>
        </div>
    )
}

export default StatusHeader