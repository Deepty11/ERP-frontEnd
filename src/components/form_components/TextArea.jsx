import React from 'react'

const TextArea = ({title='', value='', name='', onChange}) => {
    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className="control">
                <textarea
                    className="textarea"
                    placeholder={title}
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default TextArea