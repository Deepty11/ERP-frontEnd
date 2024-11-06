import React, { useEffect, useState } from 'react'
import TextField from '../form_components/TextField'
import DateComponent from '../form_components/DateComponent'
import DropdownComponent from '../form_components/DropdownComponent'
import { genders, religions } from '../../data/UserData'

const GeneralInfo = ({ userDetails, handleChange }) => {
    return (
        <>
            <TextField
                title='First Name'
                value={userDetails?.firstName ?? ''}
                name='firstName'
                onChange={handleChange} />
            <TextField
                title='Last Name'
                value={userDetails?.lastName ?? ''}
                name='lastName'
                onChange={handleChange} />

            <div className='field'>
                <label className='label'>Username</label>
            </div>
            <div className='field'>
                <label>{userDetails?.username ?? "N/A"}</label>
            </div>

            <DateComponent
                title='Date of Birth'
                value={userDetails?.birthDate ?? ''}
                name='birthDate'
                onChange={handleChange} />
            <DropdownComponent
                title='Gender'
                options={genders}
                name='gender'
                value={userDetails?.gender ?? ''}
                optionLabel='label'
                onChange={handleChange}
            />
            <DropdownComponent
                title='Religion'
                options={religions}
                name='religion'
                value={userDetails?.religion ?? ''}
                optionLabel='label'
                onChange={handleChange}
            />
        </>
    )
}

export default GeneralInfo