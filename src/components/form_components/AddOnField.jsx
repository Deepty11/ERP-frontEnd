import React from 'react'

const AddOnField = ({value}) => {
    return (
        <div className="control">
            <input className="input"
                value={value}
                size="3"
                readOnly={true} />
        </div>
    )
}

export default AddOnField