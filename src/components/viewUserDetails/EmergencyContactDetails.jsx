import React from 'react'
import CardHeaderComponent from '../card/CardHeaderComponent'
import { MdContactEmergency } from 'react-icons/md'

const EmergencyContactDetails = ({ userDetails }) => {
    return (
        <div className="card mb-6">
            <CardHeaderComponent
                title='Emergency Contact'
                leftIcon={<MdContactEmergency />} />
            <div className="card-content">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
                    <div className='form-control'>
                        <label className='label'>Name</label>
                        <label>{userDetails?.emergencyContactInfoDto?.name ?? 'N/A'}</label>
                    </div>
                    <div className='form-control'>
                        <label className='label'>Relationship</label>
                        <label>{userDetails?.emergencyContactInfoDto?.relation ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Mobile</label>
                        <label>{userDetails?.emergencyContactInfoDto?.mobileNumber ?? 'N/A'}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmergencyContactDetails