import React from 'react'
import CardHeaderComponent from './card/CardHeaderComponent'
import { FaBriefcase } from 'react-icons/fa6'
import { levels, employmentTypes } from '../data/JobprofileData'
import DropdownComponent from './form_components/DropdownComponent'
import DateComponent from './form_components/DateComponent'
import TextFieldWithAddons from './form_components/TextFieldWithAddons'
import TextField from './form_components/TextField'

const JobProfileComponent = ({
    jobProfileDto,
    designationList,
    handleChange,
    formErrors }) => {

    return (
        <div className="card mb-6">
            <CardHeaderComponent
                title='Work'
                icon={<FaBriefcase />} />

            <div className="card-content">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
                    <div>
                        <TextField
                            title='Employee Id'
                            value={jobProfileDto.employeeId}
                            name='employeeId'
                            onChange={handleChange}
                            isRequired={true} />
                        {formErrors.employeeId
                            && <p className='error-message'>{formErrors.employeeId}</p>}

                    </div>
                    
                    <div>
                        <DropdownComponent
                            title="Employee Type"
                            options={employmentTypes}
                            name="employmentType"
                            value={jobProfileDto.employmentType}
                            onChange={handleChange}
                            optionLabel="name"
                            isRequired={true}
                        />
                        {formErrors.employmentType
                            && <p className='error-message'>{formErrors.employmentType}</p>}
                    </div>

                    <div>
                        <DropdownComponent
                            title="Level"
                            options={levels}
                            name="level"
                            value={jobProfileDto.level}
                            onChange={handleChange}
                            optionLabel="name"
                            isRequired={true}
                        />
                        {formErrors.level
                            && <p className='error-message'>{formErrors.level}</p>}
                    </div>

                    <div>
                        <DropdownComponent
                            title="Designation"
                            options={designationList}
                            name="designationDto"
                            value={jobProfileDto.designationDto}
                            onChange={handleChange}
                            optionLabel="title"
                            isRequired={true}
                        />
                        {formErrors.designationTitle
                            && <p className='error-message'>{formErrors.designationTitle}</p>}
                    </div>

                    <DateComponent
                        title='Joining Date'
                        name='joiningDate'
                        value={jobProfileDto.joiningDate}
                        onChange={handleChange} />

                    <TextFieldWithAddons
                        title="Basic Salary"
                        placeholder="Add basic salary"
                        name="basicSalary"
                        value={jobProfileDto.basicSalary}
                        onChange={handleChange}
                    />

                    <TextFieldWithAddons
                        title="Compensation"
                        placeholder="Add compensation"
                        name="compensation"
                        value={jobProfileDto.compensation}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default JobProfileComponent