import React, { useEffect, useState } from 'react'
import leaveApplicationService from '../services/LeaveApplicationService'
import SpinnerComponent from '../components/SpinnerComponent'
import dateUtils from '../utils/DateUtils'
import {
    TableContainer,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
    Paper
} from '@mui/material'
import EmptyViewComponent from '../components/EmptyViewComponent'
import { ApproveButton, DeclineButton } from '../components/button_components/ButtonComponents'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { FaPen } from 'react-icons/fa'

const LeaveApplications = (props) => {
    const [applications, setApplications] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        props.callback('Leave Applications')

        const fetchLeaveApplications = () => {
            leaveApplicationService.
                getAllApplications((data) => {
                    setApplications(data)
                    setIsLoading(false)
                }, (error) => {
                    console.log(error)
                })
        }

        fetchLeaveApplications()
    }, [])


    if (isLoading) {
        return <SpinnerComponent />
    }

    if (LeaveApplications.length === 0) {
        return <EmptyViewComponent message='No application available' />
    }

    return (
        <section className="section main-section">
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Employee Name</TableCell>
                            <TableCell align="left">Leave Type</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left"># of Days</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell className='action-col'
                                align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.id}</TableCell>
                                <TableCell align="left" style={{ 'width': '4rem' }}>{row.userDto.firstName} {row.userDto.lastName}</TableCell>
                                <TableCell align="left" style={{ 'width': '2rem' }}>{row.leaveType}</TableCell>
                                <TableCell align="left" style={{ 'width': '8rem' }}>{row.fromDate} - {row.toDate}</TableCell>
                                <TableCell align="left" style={{ 'width': '2rem' }}>{dateUtils.getDifference(row.fromDate, row.toDate)}</TableCell>
                                <TableCell align="left" style={{ 'width': '2rem' }}>{row.status}</TableCell>
                                <TableCell align="left" style={{ 'width': '4rem' }}>
                                    <div className='button-container'>
                                        <ApproveButton title='Approve' />
                                        <DeclineButton title='Decline' />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>

    )
}

export default LeaveApplications