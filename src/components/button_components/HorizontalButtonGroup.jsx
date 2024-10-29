import React from 'react'

const HorizontalButtonGroup = ({ items }) => {
    return (
        <>
            <div className='horizontal-content'>
                {items.map((item) => 
                    <button
                        key={item.id}
                        className='profile-button'
                        title={item.label}
                        onClick={(e) => {
                            console.log(e.target.value)
                        }}
                    >
                        {item.label}
                    </button>
                )}
            </div>
            <hr style={{marginTop: '0px'}} />
        </>
    )
}


export default HorizontalButtonGroup