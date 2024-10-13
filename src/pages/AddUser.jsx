import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import TextField from '../components/form_components/TextField'
import DateComponent from '../components/form_components/DateComponent'
import DropdownComponent from '../components/form_components/DropdownComponent'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import { genders, religions, roles, initialUserData, initialFormErrors, initialContactInfoData } from '../data/UserData'
import userService from '../services/UserService'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { ToastContainer, toast } from 'react-toastify'
import UserContactComponent from '../components/UserContactComponent'
import JobProfileComponent from '../components/JobProfileComponent'
import designationService from '../services/DesignationService'
import SpinnerComponent from '../components/SpinnerComponent'
import { initialJobProfileData } from '../data/JobprofileData'
import { initialDesignation } from '../data/DesignationData'

const AddUser = (props) => {
    useEffect(() => {
        props.callback('Add User')
        retreiveDesignations()
    }, [])

    const [user, setUser] = useState(initialUserData)
    const [contactInfoDto, setContactInfoDto] = useState(initialUserData.contactInfoDto)
    const [jobProfileDto, setJobProfileDto] = useState(initialUserData.jobProfileDto)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [designations, setDesignations] = useState([])
    const [loading, setLoading] = useState(true)

    const retreiveDesignations = () => {
        designationService.getAllDesignations(
            (designations) => {
                setDesignations(designations)
                setLoading(false)
            }, (error) => {
                console.log("Error: " + error)
                setLoading(false)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleContactInfo = (e) => {
        const { name, value } = e.target
        setContactInfoDto({ ...contactInfoDto, [name]: value })
    }

    const handleJobProfile = (e) => {
        const { name, value } = e.target

        if (name == 'basicSalary' || name == 'compensation') {
            const doubleValue = parseFloat(value)
            if (!isNaN(doubleValue)) {
                setJobProfileDto({ ...jobProfileDto, [name]: doubleValue })
            } else {
                setJobProfileDto({ ...jobProfileDto, [name]: "" })
            }
        } else {
            setJobProfileDto({ ...jobProfileDto, [name]: value })
        }
        
    }

    const setJobProfileDtoToUserData = () => {
        const userData = user
        userData.jobProfileDto = jobProfileDto
        setUser(userData)
    }

    const setContactInfoToUserData = () => {
        const userData = user
        userData.contactInfoDto = contactInfoDto
        setUser(userData)
    }

    const validateForm = (data) => {
        const errors = {}
        console.log(data)

        if (!data.firstName.trim()) {
            errors.firstName = "First name is required"
        }

        if (!data.lastName.trim()) {
            errors.lastName = "Last name is required"
        }

        if (!data.username.trim()) {
            errors.username = "Username is required"
        }

        if (!data.password.trim()) {
            errors.password = "Password is required"
        }

        if (!data.gender.trim()) {
            errors.gender = "Gender is required"
        }

        if (!data.role.trim()) {
            errors.role = "Role is required"
        }

        if (!data.jobProfileDto.employeeId.trim()) {
            errors.employeeId = "Employee Id is required"
        }

        if (data.jobProfileDto.designationDto == null) {
            errors.designationTitle = "Designation is required"
        }

        if(!data.jobProfileDto.employmentType.trim()) {
            errors.employmentType = "Required"
        }

        if(!data.jobProfileDto.level.trim()) {
            errors.level = "Required"
        }

        return errors
    }

    const submitForm = (e) => {
        e.preventDefault()
        setContactInfoToUserData()
        setJobProfileDtoToUserData()
        const errors = validateForm(user)
        console.log(errors)
        setFormErrors(errors)

        if (Object.keys(errors).length === 0) {
            userService.createUser(user, () => {
                toast.success("Added user successfully!")
            }, (error) => {
                console.log(error)
            })
            console.log("submitted data: ", user)
        }
    }

    if (loading) {
        return <SpinnerComponent />
    }

    return (
        <div>
            <ToastContainer hideProgressBar={true} />
            <section className="section main-section">
                <form
                    method='post'
                    onSubmit={submitForm}>
                    <div className="card mb-6">
                        <CardHeaderComponent
                            title='Basic Information'
                            leftIcon={<FaPen />} />

                        <div className="card-content">

                            <TextField
                                title='First Name'
                                value={user.firstName}
                                name='firstName'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.firstName
                                && <p className='error-message'>{formErrors.firstName}</p>}

                            <TextField
                                title='Last Name'
                                value={user.lastName}
                                name='lastName'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.lastName
                                && <p className='error-message'>{formErrors.lastName}</p>}

                            <TextField
                                title='Username'
                                value={user.username}
                                name='username'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.username
                                && <p className='error-message'>{formErrors.username}</p>}

                            <TextField
                                type='password'
                                title='Password'
                                value={user.password}
                                name='password'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.password
                                && <p className='error-message'>{formErrors.password}</p>}

                            <DropdownComponent
                                title="Role"
                                options={roles}
                                name="role"
                                value={user.role}
                                onChange={handleChange}
                                optionLabel="label"
                                isRequired={true}
                            />
                            {formErrors.role
                                && <p className='error-message'>{formErrors.role}</p>}

                            <DateComponent
                                title='Date of Birth'
                                name='birthDate'
                                value={user.birthDate}
                                onChange={handleChange} />

                            <DropdownComponent
                                title="Gender"
                                options={genders}
                                name="gender"
                                value={user.gender}
                                onChange={handleChange}
                                optionLabel="label"
                                isRequired={true}
                            />
                            {formErrors.gender
                                && <p className='error-message'>{formErrors.gender}</p>}

                            <DropdownComponent
                                title="Religion"
                                options={religions}
                                name="religion"
                                value={user.religion}
                                onChange={handleChange}
                                optionLabel="label"
                            />
                        </div>
                    </div>

                    <JobProfileComponent
                        jobProfileDto={jobProfileDto}
                        designationList={designations}
                        handleChange={handleJobProfile}
                        formErrors={formErrors} />

                    <UserContactComponent
                        contactInfoDto={contactInfoDto}
                        handleContactInfo={handleContactInfo} />

                    <FormButtonComponent handleReset={(e) => {
                        setUser(initialUserData)
                        setContactInfoDto(initialContactInfoData)
                        setJobProfileDto(initialJobProfileData)
                        setDesignations(initialDesignation)
                        setFormErrors(initialFormErrors)
                    }} />
                </form >
            </section >
        </div>
    )
}

export default AddUser