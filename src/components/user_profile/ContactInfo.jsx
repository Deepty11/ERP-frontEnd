import React from 'react'
import ContactTextField from '../form_components/ContactTextField'
import TextArea from '../form_components/TextArea'

const ContactInfo = ({userDetail}) => {
    const handleContactInfo = (e) => {}

    return (
        <>
            <ContactTextField
                title='Mobile'
                value=''
                name='mobileNumber'
                onChange={handleContactInfo} />

            <ContactTextField
                type='email'
                title='Email'
                value=''
                name='email'
                onChange={handleContactInfo} />

            <TextArea
                title='Address'
                name='address'
                value=''
                onChange={handleContactInfo} />
        </>
    )
}

export default ContactInfo