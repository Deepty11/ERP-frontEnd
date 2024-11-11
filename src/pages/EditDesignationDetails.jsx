import React, { useEffect, useState } from 'react'
import TextField from '../components/form_components/TextField'
import { useSearchParams } from 'react-router-dom'
import { initialDesignation, initialSalaryRange } from '../data/DesignationData'
import TextArea from '../components/form_components/TextArea'
import TextFieldWithAddons from '../components/form_components/TextFieldWithAddons'
import DesignationService from '../services/DesignationService'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import { toast, ToastContainer } from 'react-toastify'
import { useHerobar } from '../components/HerobarProvider.jsx'

const EditDesignationDetails = () => {
    const [searchParams] = useSearchParams()
    const designationId = searchParams.get('id')
    const [designationDetails, setDesignationDetails] = useState(initialDesignation)
    const [newDesignationDetails, setNewDesignationDetails] = useState(initialDesignation)
    const [newSalaryRange, setNewSalaryRange] = useState(initialSalaryRange)
    const [loading, setLoading] = useState(true)

    const {updateHerobar} = useHerobar()

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewDesignationDetails({ ...newDesignationDetails, [name]: value })
    }

    const handleSalaryRangeChange = (e) => {
        const { name, value } = e.target
        const doubleValue = parseFloat(value)

        if (!isNaN(doubleValue)) {
            setNewSalaryRange({ ...newSalaryRange, [name]: doubleValue })
        } else {
            setNewSalaryRange({ ...newSalaryRange, [name]: "" })
        }
    }

    const updateSalaryRange = () => {
        const designationDetails = newDesignationDetails
        designationDetails.salaryRangeDto = newSalaryRange
        setNewDesignationDetails(designationDetails)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        updateSalaryRange()

        console.log(newDesignationDetails)
        setLoading(true)
        await updateDesignationDetails()
    }

    const updateDesignationDetails = async () => {
        try {
            const res = await DesignationService.updateDesignationDetailsById(designationId, newDesignationDetails)
            setLoading(false)
            toast.success(res.message)

        } catch (error) {
            setLoading(false)
            console.log(error)
            // toast.error(error.res.data.message)
        }
    }

    const handleReset = (e) => {
        setNewDesignationDetails(designationDetails)
        setNewSalaryRange(designationDetails?.salaryRange)
    }

    useEffect(() => {
        updateHerobar('Edit Designation')

        getDesignationDetails()

        return () =>  updateHerobar("","",null)
    }, [])

    const getDesignationDetails = async () => {
        try {
            const designationDetails = await DesignationService.getDesignationDetailsById(designationId)
            setDesignationDetails(designationDetails)
            setNewDesignationDetails(designationDetails)
            setNewSalaryRange(designationDetails?.salaryRangeDto)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <>
            <ToastContainer hideProgressBar={true} />
            <section className='section main-section'>
                <div className="card mb-6">
                    <div className="card-content">
                        <form
                            method='post'
                            onSubmit={handleSubmit}>
                            <TextField
                                title='Title'
                                name='title'
                                value={newDesignationDetails?.title ?? 'N/A'}
                                onChange={handleChange} />
                            <TextArea
                                title='Description'
                                name='description'
                                value={newDesignationDetails?.description ?? 'N/A'}
                                onChange={handleChange} />

                            <label className='label'>Salary Range: </label>
                            <div className='grid grid-cols-s md:grid-cols-2 gap-2 mt-1 ml-1'>
                                <TextFieldWithAddons
                                    title="Min"
                                    placeholder="Add minimum salary..."
                                    name="min"
                                    value={newSalaryRange?.min ?? 0}
                                    onChange={handleSalaryRangeChange}
                                />

                                <TextFieldWithAddons
                                    title="Max"
                                    placeholder="Add maximum salary..."
                                    name="max"
                                    value={newSalaryRange?.max ?? 0}
                                    onChange={handleSalaryRangeChange}
                                />
                            </div>

                            <FormButtonComponent handleReset={handleReset} />
                        </form>
                    </div>
                </div>
            </section >
        </>

    )
}

export default EditDesignationDetails