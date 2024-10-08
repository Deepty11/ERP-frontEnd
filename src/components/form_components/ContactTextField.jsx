import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const ContactTextField = ({
    title = '',
    value = '',
    name = '',
    type = 'tel',
    onChange }) => {
    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className="control icons-left">
                <input className="input"
                    type={type}
                    placeholder={title}
                    name={name}
                    value={value}
                    onChange={onChange}
                    //{...(type == 'tel' ? { pattern: '02-[0-9]{7}' } : { pattern: '01[0-9]{9}' })}
                />
                <span className='icon left'>
                    {type == 'tel' ? <FaPhone /> : <FaEnvelope />}
                </span>
            </div>
        </div>
    )
}

export default ContactTextField