import React from 'react'

const TextField = (
    { title = '',
        value = '',
        name = '',
        type = 'text',
        onChange,
        isRequired }) => {
    return (
        <div className="field">
            <div>
                <label className={`label ${isRequired ? 'required' : ''}`}>
                    {title}
                </label>
            </div>

            <div className="field">
                <input className="input"
                    type={type}
                    placeholder={title}
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default TextField