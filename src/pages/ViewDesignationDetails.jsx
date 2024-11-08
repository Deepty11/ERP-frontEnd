import React, { useEffect, useState } from 'react'
import { initialDesignation } from '../data/DesignationData'
import { useSearchParams } from 'react-router-dom'
import DesignationService from '../services/DesignationService'

const ViewDesignationDetails = (props) => {
    const [searchParams] = useSearchParams()
    const designationId = searchParams.get('id')
    const [designationDetails, setDesignationDetails] = useState(initialDesignation)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.callback('Designation Details')
        getDesignationDetails()
    }, [])

    const getDesignationDetails = async () => {
        try {
            const designationDetails = await DesignationService.getDesignationDetailsById(designationId)
            setDesignationDetails(designationDetails)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <section className='section main-section'>
            <div className="card mb-6">
                <div className="card-content">
                    <div className='form-control'>
                        <label className='label'>Id</label>
                        <label>{designationId ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Title</label>
                        <label>{designationDetails?.title ?? 'N/A'}</label>
                    </div>

                    <div className='form-control'>
                        <label className='label'>Description</label>
                        <label>{designationDetails?.description ?? 'N/A'}</label>
                    </div>

                    <label className='label mt-2'>Salary Range:</label>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-0.5 ml-10 mt-2 '>
                        <div className='form-control'>
                            <label className='label'>Min Salary</label>
                            <label>BDT {designationDetails?.salaryRangeDto?.min ?? 0}</label>
                        </div>

                        <div className='form-control'>
                            <label className='label'>Max Salary</label>
                            <label>BDT {designationDetails?.salaryRangeDto?.max ?? 0}</label>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default ViewDesignationDetails