import React, { useState } from 'react'

const HorizontalButtonGroup = ({ items, onClickHandler }) => {
    const [selectedId, setSelectedId] = useState(0)

    return (
        <>
            <div className='horizontal-content'>
                {items.map((item) =>
                    <InfoButton
                        selectedId={selectedId}
                        item={item}
                        handler={(e) => {
                            setSelectedId(item.id)
                            onClickHandler(e)
                        }} />
                )}
            </div>
            <hr style={{ marginTop: '0px' }} />
        </>
    )
}

const InfoButton = ({ item, handler, selectedId }) => {
    const activeColor = '#01579b'
    const inActiveColor = '#e0e0e0'

    const activeBorderColor = '#0277bd'
    const inActiveBorderColor = '#eeeeee'

    return <button
        style={{
            color: selectedId == item.id ? activeColor : inActiveColor,
            borderColor: selectedId == item.id ? activeBorderColor : inActiveBorderColor
        }}
        key={item.id}
        className='profile-button'
        title={item.label}
        onClick={handler}
    >
        {item.label}
    </button>
}


export default HorizontalButtonGroup