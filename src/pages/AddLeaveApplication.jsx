import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import DropdownComponent from '../components/form_components/DropdownComponent'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import { initialLeaveApplication, initialLeaveApplicationFormErrors, leaveTypes } from '../data/LeaveApplicationData'
import { FaPen } from 'react-icons/fa'
import { useAuth } from '../components/AuthProvider'
import userService from '../services/UserService'
import TextArea from '../components/form_components/TextArea'
import DateComponent from '../components/form_components/DateComponent'
import leaveApplicationService from '../services/LeaveApplicationService'


const AddLeaveApplication = (props) => {
    const { loggedInUsername } = useAuth()

    useEffect(() => {
        props.callback('Create Leave Application')

        console.log(loggedInUsername)
        userService.getUserByUsername(
            loggedInUsername(),
            (user) => {
                setUserDto(user)
                console.log(user)
            }, (error) => {
                console.log(error)
            })
    }, [])

    const [leaveApplication, setLeaveApplication] = useState(initialLeaveApplication)
    const [formErrors, setFormErrors] = useState(initialLeaveApplicationFormErrors)
    const [userDto, setUserDto] = useState(null)

    const showSuccessMessage = () => {
        toast.success("Designation added successfully")
    }

    const submitForm = (e) => {
        setUserToLeaveApplication()

        e.preventDefault()
        const errors = validate(leaveApplication)
        setFormErrors(errors)

        if(Object.keys(errors).length === 0) {
            console.log(leaveApplication)
            leaveApplicationService.createLeaveApplication(
                leaveApplication, (data) => {
                    console.log(data)
                    showSuccessMessage("Added leave application successfully")
                }, (error) => {
                    console.log(error)
                })
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLeaveApplication({ ...leaveApplication, [name]: value })
    }

    const validate = (data) => {
        const errors = {}

        if (!data.leaveType.trim()) {
            errors.leaveType = "Leave Type is required"
        }

        if (!data.fromDate.trim()) {
            errors.fromDate = "Required"
        }

        if (!data.toDate.trim()) {
            errors.toDate = "Required"
        }

        return errors
    }

    const setUserToLeaveApplication = () => {
        const tempLeaveApplication = leaveApplication
        tempLeaveApplication.userDto = userDto
        setLeaveApplication(tempLeaveApplication)
    }

    return (
        <div>
            <ToastContainer hideProgressBar={true} />
            <section className="section main-section">
                <form
                    method='post'
                    onSubmit={submitForm}>
                    <div className="card mb-6">
                        {/* <CardHeaderComponent
                            title='Create Leave Application'
                            icon={<FaPen />} /> */}

                        <div className="card-content">
                            <DropdownComponent
                                title="Leave Type"
                                options={leaveTypes}
                                name="leaveType"
                                value={leaveApplication.leaveType}
                                onChange={handleChange}
                                optionLabel="label"
                                isRequired={true}
                            />
                            {formErrors.leaveType
                                && <p className='error-message'>{formErrors.leaveType}</p>}

                            <TextArea
                                title='Description'
                                value={leaveApplication.description}
                                name='description'
                                onChange={handleChange}
                            />

                            <DateComponent
                                title='From'
                                name='fromDate'
                                value={leaveApplication.fromDate}
                                onChange={handleChange} />

                            <DateComponent
                                title='To'
                                name='toDate'
                                value={leaveApplication.toDate}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <FormButtonComponent handleReset={(e) => {
                        setLeaveApplication(initialLeaveApplication)
                    }} />
                </form >
            </section >
        </div>
    )
}

export default AddLeaveApplication