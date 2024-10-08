import React from 'react'

const TextField = ({ title = '', value = '', name = '', type='text', onChange }) => {
    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className="field">
                <input className="input"
                    type={type}
                    placeholder={title}
                    name={name}
                    value={value}
                    onChange={onChange}/>
            </div>
        </div>
    )
}

export default TextField