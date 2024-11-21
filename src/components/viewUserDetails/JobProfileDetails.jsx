import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import CardHeaderComponent from '../card/CardHeaderComponent'

const JobProfileDetails = ({userDetails}) => {
    return (
        <div className="card mb-6">
            <CardHeaderComponent
                title='Work'
                leftIcon={<FaBriefcase />} />
            <div className="card-content">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
                    <div className='form-control'>
                        <label className='label'>Employee Id</label>
                        <label>{userDetails?.jobProfileDto?.employeeId ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Employment Type</label>
                        <label>{userDetails?.jobProfileDto?.employmentType ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Designation</label>
                        <label>{userDetails?.jobProfileDto?.designationDto?.title ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Designation Level</label>
                        <label>{userDetails?.jobProfileDto?.level ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Joinning Date</label>
                        <label>{userDetails?.jobProfileDto?.joiningDate ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Basic Salary</label>
                        <label>{`${userDetails?.jobProfileDto?.basicSalary != null ? 'BDT' + userDetails?.jobProfileDto?.basicSalary : 'N/A'}`}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Compensation</label>
                        <label>{`${userDetails?.jobProfileDto?.compensation != null ? 'BDT ' + userDetails?.jobProfileDto?.compensation : 'N/A'}`}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobProfileDetails