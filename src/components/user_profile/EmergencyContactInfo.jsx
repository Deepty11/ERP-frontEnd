import React, { useEffect } from 'react'
import TextField from '../form_components/TextField'
import { relations } from '../../data/UserData'
import DropdownComponent from '../form_components/DropdownComponent'
import ContactTextField from '../form_components/ContactTextField'

const EmergencyContactInfo = ({ emergencyContactInfoDto, handleChange }) => {
    useEffect(() => {
        console.log(emergencyContactInfoDto)
    }, [])
    return (
        <>
            <TextField
                title='Name'
                value={emergencyContactInfoDto?.name ?? ''}
                name='name'
                onChange={handleChange} />
            
            <ContactTextField
                title='Mobile'
                value={emergencyContactInfoDto?.mobileNumber}
                name='mobileNumber'
                onChange={handleChange} />

            <DropdownComponent
                title='Relation'
                options={relations}
                name='relation'
                value={emergencyContactInfoDto?.relation ?? ''}
                optionLabel='label'
                onChange={handleChange}
            />
        </>
    )
}

export default EmergencyContactInfo