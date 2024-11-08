import React from 'react'
import CardHeaderComponent from '../card/CardHeaderComponent'
import { FaBriefcase, FaHome } from 'react-icons/fa'

const ContactDetails = ({userDetails}) => {
    return (
        <div className="card mb-6">
            <CardHeaderComponent
                title='Contact'
                leftIcon={<FaHome />} />
            <div className="card-content">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
                    <div className='form-control'>
                        <label className='label'>Mobile</label>
                        <label>{userDetails?.contactInfoDto?.mobileNumber ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Email</label>
                        <label>{userDetails?.contactInfoDto?.email ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Address</label>
                        <label>{userDetails?.contactInfoDto?.address ?? 'N/A'}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails