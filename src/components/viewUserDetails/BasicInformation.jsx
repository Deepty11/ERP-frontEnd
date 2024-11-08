import React from 'react'
import CardHeaderComponent from '../card/CardHeaderComponent'
import { FaUser } from 'react-icons/fa'

const BasicInformation = ({ userId, userDetails }) => {
    return (
        <div className="card mb-6">
            <CardHeaderComponent
                title='Basic Information'
                leftIcon={<FaUser />} />

            <div className="card-content">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
                    <div className='form-control'>
                        <label className='label'>Id</label>
                        <label>{userId ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>First Name</label>
                        <label>{userDetails?.firstName ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Last Name</label>
                        <label>{userDetails?.lastName ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Username</label>
                        <label>{userDetails?.username ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Role</label>
                        <label>{userDetails?.role ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Religion</label>
                        <label>{userDetails?.religion ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Gender</label>
                        <label>{userDetails?.gender ?? 'N/A'}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInformation