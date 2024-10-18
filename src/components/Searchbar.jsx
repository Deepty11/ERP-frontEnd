import React from 'react'

const Searchbar = ({searchQuery, handleChange}) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
                className='search-bar'
            />
        </div>
  )
}

export default Searchbar