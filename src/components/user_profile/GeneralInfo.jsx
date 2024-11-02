import React, { useEffect } from 'react'
import TextField from '../form_components/TextField'
import DateComponent from '../form_components/DateComponent'
import DropdownComponent from '../form_components/DropdownComponent'

const GeneralInfo = ({userDetail}) => {
    useEffect(() => {
        console.log("UserDetail from GeneralInfo")
        console.log(userDetail)
    }, [])
    return (
        <>
            <TextField
                title='First Name'
                value={userDetail?.firstName}
                name='firstName'
                onChange={(e) => {} } />
            <TextField
                title='Last Name'
                value={userDetail?.lastName}
                name='lastName'
                onChange={(e) => { }} />
            <TextField
                title='Username'
                value={userDetail?.username}
                name='username'
                onChange={(e) => { }} />
            <DateComponent
                title='Date of Birth'
                value={userDetail?.DateOfBirth}
                name='dateOfBirth'
                onChange={(e) => { }} />
            <DropdownComponent
                title='Gender'
                name={userDetail?.gender}
                value='gender'
                onChange={(e) => { }}
            />
            <DropdownComponent
                title='Religion'
                name='religion'
                value={userDetail?.religion}
                onChange={(e) => { }}
            />
        </>
    )
}

export default GeneralInfo