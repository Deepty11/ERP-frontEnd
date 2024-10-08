import React from 'react'
import TextField from './form_components/TextField'
import { FaHouse } from 'react-icons/fa6'

const AddressComponent = ({ address, handler }) => {
    return (
        <>
            <TextField
                title='House No.'
                value={address.houseNo}
                name='houseNo'
                onChange={handler} />

            <TextField
                title='Road'
                value={address.road}
                name='road'
                onChange={handler} />

            <TextField
                title='City'
                value={address.city}
                name='city'
                onChange={handler} />

            <TextField
                title='District'
                value={address.district}
                name='district'
                onChange={handler} />

            <TextField
                title='Thana'
                value={address.thana}
                name='thana'
                onChange={handler} />

            <TextField
                title='Postal Code'
                value={address.postalCode}
                name='postalCode'
                onChange={handler} />
        </>
    )
}

export default AddressComponent