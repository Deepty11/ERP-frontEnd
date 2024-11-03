import React from 'react'

const TextField = (
    { title = '',
        value = '',
        name = '',
        type = 'text',
        onChange,
        isRequired,
        readOnly = false }) => {
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
                    onChange={onChange}
                    readOnly={readOnly} />
            </div>
        </div>
    )
}

export default TextField