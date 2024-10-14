import React, { useEffect, useState } from 'react'
import {
    TableContainer,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
    Paper
} from '@mui/material'
import { intialLeaveData } from '../data/LeaveApplicationData'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { FaPen } from 'react-icons/fa'

const MyLeaveInformation = (props) => {
    useEffect(() => {
        props.callback('My Leave Information')
    }, [])

    const [leaveInformation, setLeaveInformation] = useState(intialLeaveData)

    return (
        <section className="section main-section">

            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Leave Type</TableCell>
                            <TableCell align="left">Total Allowed Leave</TableCell>
                            <TableCell align="left">Taken</TableCell>
                            <TableCell align="left">Due</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leaveInformation.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.type}</TableCell>
                                <TableCell align="left" style={{ 'width': '4rem' }}>{row.total}</TableCell>
                                <TableCell align="left" style={{ 'width': '2rem' }}>{row.taken}</TableCell>
                                <TableCell align="left" style={{ 'width': '8rem' }}>{row.remaining}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </section>
    )
}

export default MyLeaveInformation