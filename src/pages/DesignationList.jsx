import React, { useState, useEffect } from 'react'
import designationService from '../services/DesignationService'
import SpinnerComponent from '../components/common_components/SpinnerComponent'
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper
} from '@mui/material'
import EmptyViewComponent from '../components/common_components/EmptyViewComponent'
import { useNavigate } from 'react-router'
import { useHerobar } from '../components/HerobarProvider.jsx'
import { toast } from 'react-toastify'

const DesignationList = () => {
    const [designations, setDesignations] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const {updateHerobar} = useHerobar()

    useEffect(() => {
        updateHerobar('Designations')
        if (designations.length != 0) {
            return
        }

        getAllDesignations()

        return () =>  updateHerobar("","",null)

    }, [designations])

    const getAllDesignations = () => {
        designationService.getAllDesignations((designations) => {
            console.log(designations)
            setDesignations(designations)
            setLoading(false)
        }, (error) => {
            setError(error)
            setLoading(false)
        })
    }

    const tableContent = () => {
        return <section className="section main-section">
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {designations.map((row, index) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{index + 1}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left" style={{ 'width': '8rem' }}>
                                    <div className='button-container'>
                                        <button
                                            type='button'
                                            className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400"
                                            onClick={(e) => {
                                                navigate('/designation-details?id=' + row.id)
                                            }}>
                                            View
                                        </button>

                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>

    }

    return (
        <>
            <section className="section main-section">
                {loading && <SpinnerComponent />}
                {designations.length === 0
                    ? <EmptyViewComponent message='No Data found' />
                    : tableContent()}
            </section>
        </>
    )
}

export default DesignationList