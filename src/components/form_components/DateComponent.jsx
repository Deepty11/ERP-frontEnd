const DateComponent = (
    { title = '',
        value = '',
        name = '',
        readOnly = false,
        onChange }) => {
    return (
        <div className="field">
            <label className="label">{title}</label>

            <div className="field w-44 md:w-14rem">
                <input className="input"
                    type="date"
                    placeholder={title}
                    name={name}
                    value={value}
                    readOnly={readOnly}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default DateComponent