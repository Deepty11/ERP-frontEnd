import React from 'react'
import TextField from '../form_components/TextField'
import DateComponent from '../form_components/DateComponent'
import DropdownComponent from '../form_components/DropdownComponent'

const GeneralInfo = () => {
    return (
        <>
            <TextField
                title='First Name'
                value=''
                name=''
                onChange={(e) => {} } />
            <TextField
                title='Last Name'
                value=''
                name=''
                onChange={(e) => { }} />
            <TextField
                title='Username'
                value=''
                name=''
                onChange={(e) => { }} />
            <DateComponent
                title='Date of Birth'
                value=''
                name=''
                onChange={(e) => { }} />
            <DropdownComponent
                title='Gender'
                name=''
                value=''
                onChange={(e) => { }}
            />
            <DropdownComponent
                title='Religion'
                name=''
                value=''
                onChange={(e) => { }}
            />
        </>
    )
}

export default GeneralInfo