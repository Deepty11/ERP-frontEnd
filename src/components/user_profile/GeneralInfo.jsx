import React, { useEffect } from 'react'
import TextField from '../form_components/TextField'
import DateComponent from '../form_components/DateComponent'
import DropdownComponent from '../form_components/DropdownComponent'
import { genders, religions } from '../../data/UserData'

const GeneralInfo = ({userDetails, handleChange}) => {
    useEffect(() => {
        console.log("UserDetail from GeneralInfo")
        console.log(userDetails)
    }, [])

    return (
        <>
            <TextField
                title='First Name'
                value={userDetails?.firstName}
                name='firstName'
                onChange={handleChange} />
            <TextField
                title='Last Name'
                value={userDetails?.lastName}
                name='lastName'
                onChange={handleChange} />
            <TextField
                title='Username'
                value={userDetails?.username}
                name='username'
                onChange={handleChange}
                readOnly={true} />
            <DateComponent
                title='Date of Birth'
                value={userDetails?.birthDate}
                name='birthDate'
                onChange={handleChange} />
            <DropdownComponent
                title='Gender'
                options={genders}
                name={userDetails?.gender}
                value='gender'
                optionLabel='label'
                onChange={handleChange}
            />
            <DropdownComponent
                title='Religion'
                options={religions}
                name='religion'
                value={userDetails?.religion}
                optionLabel='label'
                onChange={handleChange}
            />
        </>
    )
}

export default GeneralInfo