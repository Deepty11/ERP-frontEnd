import React from 'react'
import { FaCalendarAlt, FaPen } from 'react-icons/fa'

const DateComponent = ({ title = '', value = '', name='', onChange}) => {
    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className="control icons-left">
                <input className="input"
                    type="date"
                    placeholder={title}
                    name={name}
                    value={value}
                    onChange={onChange} />
                <span className='icon left'>
                    <FaCalendarAlt />
                </span>
            </div>
        </div>
    )
}

export default DateComponent