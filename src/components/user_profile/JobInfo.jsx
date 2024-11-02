import React from 'react'
import TextField from '../form_components/TextField'
import DropdownComponent from '../form_components/DropdownComponent'
import DateComponent from '../form_components/DateComponent'
import TextFieldWithAddons from '../form_components/TextFieldWithAddons'
import { employmentTypes, levels } from '../../data/JobProfileData'

const JobInfo = ({userDetail}) => {
    const handleChange = (e) => {

    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
            <div>
                <TextField
                    title='Employee Id'
                    value=''
                    name='employeeId'
                    onChange={handleChange}
                    isRequired={true} />
                {/* {formErrors.employeeId
                    && <p className='error-message'>{formErrors.employeeId}</p>} */}

            </div>

            <div>
                <DropdownComponent
                    title="Employee Type"
                    options={employmentTypes}
                    name="employmentType"
                    value=''
                    onChange={handleChange}
                    optionLabel="name"
                    isRequired={true}
                />
                {/* {formErrors.employmentType
                    && <p className='error-message'>{formErrors.employmentType}</p>} */}
            </div>

            <div>
                <DropdownComponent
                    title="Level"
                    options={levels}
                    name="level"
                    value=''
                    onChange={handleChange}
                    optionLabel="name"
                    isRequired={true}
                />
                {/* {formErrors.level
                    && <p className='error-message'>{formErrors.level}</p>} */}
            </div>

            <div>
                <DropdownComponent
                    title="Designation"
                    options={[]}
                    name="designationDto"
                    value=''
                    onChange={handleChange}
                    optionLabel="title"
                    isRequired={true}
                />
                {/* {formErrors.designationTitle
                    && <p className='error-message'>{formErrors.designationTitle}</p>} */}
            </div>

            <DateComponent
                title='Joining Date'
                name='joiningDate'
                value=''
                onChange={handleChange} />

            <TextFieldWithAddons
                title="Basic Salary"
                placeholder="Add basic salary"
                name="basicSalary"
                value=''
                onChange={handleChange}
            />

            <TextFieldWithAddons
                title="Compensation"
                placeholder="Add compensation"
                name="compensation"
                value=''
                onChange={handleChange}
            />
        </div>
    )
}

export default JobInfo