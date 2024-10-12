import React from 'react'
import { Dropdown } from 'primereact/dropdown'

const DropdownComponent = ({
    name,
    title,
    value,
    onChange,
    options = [],
    placeholder = "Please Select",
    optionLabel,
    isRequired }) => {
    return (
        <div className='field'>
            <label className={`label ${isRequired ? 'required' : ''}`}>
                {title}
            </label>
            <div className='control select'>
                <Dropdown
                    name={name}
                    options={options}
                    value={value}
                    onChange={onChange}
                    optionLabel={optionLabel}
                    placeholder={placeholder}
                    //className="w-44 md:w-14rem p-dropdown"
                />
            </div>
        </div>
    )
}

export default DropdownComponent