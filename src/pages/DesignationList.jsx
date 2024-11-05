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

const DesignationList = (props) => {
    const [designations, setDesignations] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null)

    useEffect(() => {
        props.callback('Designations')
        if (designations.length != 0) {
            return
        }

        designationService.getAllDesignations((designations) => {
            console.log(designations)
            setDesignations(designations)
            setLoading(false)
        }, (error) => {
            setError(error)
            setLoading(false)
        })

        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [designations])

    const tableContent = () => {
        return <section className="section main-section">
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Title</TableCell>
                            {loggedInUser?.role == 'ADMIN'
                                && <TableCell align="left">Action</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {designations.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.id}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                {loggedInUser?.role == 'ADMIN'
                                    && <TableCell align="left">
                                        <button
                                            type='button'
                                            className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400">
                                            Edit
                                        </button>
                                    </TableCell>}
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