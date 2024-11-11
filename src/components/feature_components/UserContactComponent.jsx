import React, { useState } from 'react'
import CardHeaderComponent from '../card/CardHeaderComponent'
import ContactTextField from '../form_components/ContactTextField'
import TextArea from '../form_components/TextArea'
import { initialContactInfoData } from '../../data/UserData'
import { FaPen } from 'react-icons/fa'

const UserContactComponent = ({ contactInfoDto, handleContactInfo }) => {
    return (
        <div className="card mb-6">
            <CardHeaderComponent
                title='Contact Information'
                leftIcon={<FaPen />} />

            <div className="card-content">
                <ContactTextField
                    title='Mobile'
                    value={contactInfoDto.mobileNumber}
                    name='mobileNumber'
                    onChange={handleContactInfo} />

                <ContactTextField
                    type='email'
                    title='Email'
                    value={contactInfoDto.email}
                    name='email'
                    onChange={handleContactInfo} />

                <TextArea
                    title='Address'
                    name='address'
                    value={contactInfoDto.address}
                    onChange={handleContactInfo} />
            </div>
        </div>
    )
}

export default UserContactComponent