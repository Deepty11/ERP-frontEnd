import React, { useState, useEffect } from 'react'
import designationService from '../services/DesignationService'
import SpinnerComponent from '../components/SpinnerComponent'
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper
} from '@mui/material'

const DesignationList = (props) => {
    const [designations, setDesignations] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        props.callback('Designations')

        designationService.getAllDesignations((designations) => {
            console.log(designations)
            setDesignations(designations)
            setLoading(false)
        }, (error) => {
            setError(error)
            setLoading(false)
        })
    }, [])

    const tableContent = () => {
        return <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Level</TableCell>
                        <TableCell align="left">Employment Type</TableCell>
                        <TableCell align="left">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {designations.map((row) => {
                        <h1>hello {row.title}</h1>
                    })}
                    {designations.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.id}</TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="left">{row.level}</TableCell>
                            <TableCell align="left">{row.employmentType}</TableCell>
                            <TableCell align="left">
                                <button
                                    type='button'
                                    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400">
                                    Edit
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    }

    const emptyView = () => {
        return (
            <div className='empty-view'>
                <h1>No Data found</h1>
            </div>
        )
    }
    return (
        <>
            {loading && <SpinnerComponent />}
            {designations.length === 0 ? emptyView() : tableContent()}
        </>
    )
}

export default DesignationList