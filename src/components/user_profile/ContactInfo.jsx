import React from 'react'
import ContactTextField from '../form_components/ContactTextField'
import TextArea from '../form_components/TextArea'

const ContactInfo = ({contactInfoDto}) => {
    const handleContactInfo = (e) => {}

    return (
        <>
            <ContactTextField
                title='Mobile'
                value={contactInfoDto?.mobileNumber}
                name='mobileNumber'
                onChange={handleContactInfo} />

            <ContactTextField
                type='email'
                title='Email'
                value={contactInfoDto?.email}
                name='email'
                onChange={handleContactInfo} />

            <TextArea
                title='Address'
                name='address'
                value={contactInfoDto?.address}
                onChange={handleContactInfo} />
        </>
    )
}

export default ContactInfo