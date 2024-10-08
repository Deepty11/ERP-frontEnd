import React from 'react'
import AddOnField from './AddOnField'

const TextFieldWithAddons = ({ title, placeholder, name, value, onChange}) => {
    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className='field'>
                <div className="field addons w-96">
                    <AddOnField value="BDT"/>
                    <div className="control expanded">
                        <input className="input"
                            type="number"
                            placeholder={placeholder}
                            name={name}
                            value={value}
                            onChange={onChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextFieldWithAddons