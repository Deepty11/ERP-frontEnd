import React, { useEffect, useState } from 'react'
import TextArea from '../components/form_components/TextArea'
import TextFieldWithAddons from '../components/form_components/TextFieldWithAddons'
import TextField from '../components/form_components/TextField'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { FaPen } from 'react-icons/fa'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import designationService from '../services/DesignationService'
import { initialDesignation, initialFormErrors, initialSalaryRange } from '../data/DesignationData.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddDesignation = (props) => {
    useEffect(() => {
        props.callback('Add New Designation')
    }, [])

    const [designation, setDesignation] = useState(initialDesignation)
    const [salaryRange, setSalaryRange] = useState(initialSalaryRange)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const showSuccessMessage = () => {
        toast.success("Designation added successfully")
    }
    const resetFormErrors = () => {
        setFormErrors(initialFormErrors)
    }
    const validateForm = (data) => {
        const errors = {}

        if (!data.title.trim()) {
            errors.title = "Title is required"
        }

        return errors
    }

    const updateSalaryRange = () => {
        const tempDesignation = designation
        tempDesignation.salaryRange = salaryRange
        setDesignation(tempDesignation)
    }

    const submitForm = (e) => {
        e.preventDefault()
        resetFormErrors()

        updateSalaryRange()
        const errors = validateForm(designation)
        setFormErrors(errors)

        console.log(designation)

        if (Object.keys(errors).length === 0) {
            console.log("I am here")
            designationService.saveDesignation(
                designation,
                (res) => {
                    console.log("Added designation successfully")
                    showSuccessMessage()
                    console.log(res)
                    setDesignation(initialDesignation)

                }, (error) => {
                    console.log(error)
                })

        }
    }

    const handleSalaryRangeChange = (e) => {
        const { name, value } = e.target
        const doubleValue = parseFloat(value)

        if (!isNaN(doubleValue)) {
            setSalaryRange({ ...salaryRange, [name]: doubleValue })
        } else {
            setSalaryRange({ ...salaryRange, [name]: "" })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setDesignation({ ...designation, [name]: value })
    }

    return (
        <div>
            <ToastContainer
                hideProgressBar={true}
                autoClose={3000}
            />
            <section className="section main-section">
                <form
                    method='post'
                    onSubmit={submitForm}>
                    <div className="card mb-6">
                        <div className="card-content">
                            <TextField
                                title='Title'
                                value={designation.title}
                                name='title'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.title
                                && <p className='error-message'>{formErrors.title}</p>}
                            <TextArea
                                title='Description'
                                value={designation.description}
                                name='description'
                                onChange={handleChange}
                            />
                            <hr />

                            <CardHeaderComponent
                                title='Salary Range'
                                leftIcon={<FaPen />} />

                            <TextFieldWithAddons
                                title="Min"
                                placeholder="Add minimum salary..."
                                name="min"
                                value={salaryRange.min}
                                onChange={handleSalaryRangeChange}
                            />

                            <TextFieldWithAddons
                                title="Max"
                                placeholder="Add maximum salary..."
                                name="max"
                                value={salaryRange.max}
                                onChange={handleSalaryRangeChange}
                            />
                        </div>
                    </div>
                    <FormButtonComponent />

                </form >
            </section >
        </div>


    )
}

export default AddDesignation