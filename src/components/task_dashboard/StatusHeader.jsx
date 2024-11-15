import React, { useEffect } from 'react'

const StatusHeader = ({status}) => {
    return (
        <div className='status-header mb-4' style={{backgroundColor: status?.backgroundColor}}>
            <label>{status?.label}</label>
            <div className='status-count' style={{backgroundColor: status?.countBG}}>
                <label>{status?.count}</label>
            </div>
        </div>
    )
}

export default StatusHeader