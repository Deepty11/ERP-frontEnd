import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import DropdownComponent from '../components/form_components/DropdownComponent'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import { initialLeaveApplication, initialLeaveApplicationFormErrors, leaveTypes } from '../data/LeaveApplicationData'
import { useAuth } from '../components/AuthProvider'
import TextArea from '../components/form_components/TextArea'
import DateComponent from '../components/form_components/DateComponent'
import leaveApplicationService from '../services/LeaveApplicationService'
import { useHerobar } from '../components/HerobarProvider.jsx'

const AddLeaveApplication = (props) => {
    const { loggedInUsername } = useAuth()
    const [leaveApplication, setLeaveApplication] = useState(initialLeaveApplication)
    const [formErrors, setFormErrors] = useState(initialLeaveApplicationFormErrors)
    const [userDto, setUserDto] = useState(null)
    const {updateHerobar} = useHerobar()

    useEffect(() => {
        updateHerobar('Create New Leave Application')

        console.log(loggedInUsername)
        if (userDto != null) return

        const user = localStorage.getItem('loggedInUser')
        setUserDto(JSON.parse(user))
        
        return () =>  updateHerobar("","",null)
    }, [])

    const showSuccessMessage = () => {
        toast.success("New Application is saved successfully")
    }

    const reset = () => {
        setLeaveApplication(initialLeaveApplication)
        setFormErrors(initialLeaveApplicationFormErrors)
    }

    const submitForm = async (e) => {
        setUserToLeaveApplication()

        e.preventDefault()
        const errors = validate(leaveApplication)
        setFormErrors(errors)

        if (Object.keys(errors).length === 0) {
            console.log(leaveApplication)
            try {
                const res = await leaveApplicationService.createLeaveApplication(leaveApplication)
                reset()
                showSuccessMessage("Added leave application successfully")
            } catch(error) {
                throw new Error(error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLeaveApplication({ ...leaveApplication, [name]: value })
    }

    const validate = (data) => {
        const errors = {}

        if (!data.leaveType.trim()) {
            errors.leaveType = "Required"
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
                            {formErrors.fromDate
                                && <p className='error-message'>{formErrors.fromDate}</p>}

                            <DateComponent
                                title='To'
                                name='toDate'
                                value={leaveApplication.toDate}
                                onChange={handleChange} />
                            {formErrors.toDate
                                && <p className='error-message'>{formErrors.toDate}</p>}
                        </div>
                    </div>

                    <FormButtonComponent handleReset={(e) => {
                        reset()
                    }} />
                </form >
            </section >
        </div>
    )
}

export default AddLeaveApplication