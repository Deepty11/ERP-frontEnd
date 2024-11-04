import React, { useEffect, useState } from 'react'
import TextField from '../form_components/TextField'
import DropdownComponent from '../form_components/DropdownComponent'
import DateComponent from '../form_components/DateComponent'
import TextFieldWithAddons from '../form_components/TextFieldWithAddons'
import { employmentTypes, levels } from '../../data/JobProfileData'

const JobInfo = ({ jobProfileDto }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 '>
            <div>
                <TextField
                    title='Employee Id'
                    value={jobProfileDto?.employeeId}
                    name='employeeId'
                    //onChange={handleChange}
                    readOnly={true} />
            </div>

            <div>
                {/* <DropdownComponent
                    title="Employee Type"
                    options={employmentTypes}
                    name="employmentType"
                    value={jobProfileDto?.employmentType}
                    //onChange={handleChange}
                    optionLabel="name"
                    disabled={true}
                /> */}

                <TextField
                    title='Employee Type'
                    value={jobProfileDto?.employmentType}
                    name='employmentType'
                    //onChange={handleChange}
                    readOnly={true} />
            </div>

            <div>
                {/* <DropdownComponent
                    title="Level"
                    options={levels}
                    name="level"
                    value={jobProfileDto?.level}
                    //onChange={handleChange}
                    optionLabel="name"
                    disabled={true}
                /> */}
                <TextField
                    title='Level'
                    value={jobProfileDto?.level}
                    name='level'
                    //onChange={handleChange}
                    readOnly={true} />
            </div>

            <div>
                {/* <DropdownComponent
                    title="Designation"
                    options={designationList}
                    name="designationDto"
                    value={jobProfileDto.designationDto}
                    optionLabel="title"
                    disabled={true}
                /> */}
                <TextField
                    title='Designation'
                    value={jobProfileDto?.designationDto.title}
                    name='designationDto'
                    //onChange={handleChange}
                    readOnly={true} />
            </div>

            <DateComponent
                title='Joining Date'
                name='joiningDate'
                value={jobProfileDto?.joiningDate}
                // onChange={handleChange}
                readOnly={true} />

            <TextFieldWithAddons
                title="Basic Salary"
                placeholder="Add basic salary"
                name="basicSalary"
                value={jobProfileDto?.basicSalary}
                // onChange={handleChange}
                readOnly={true}
            />

            <TextFieldWithAddons
                title="Compensation"
                placeholder="Add compensation"
                name="compensation"
                value={jobProfileDto?.compensation}
                //onChange={handleChange}
                readOnly={true}
            />
        </div>
    )
}

export default JobInfo