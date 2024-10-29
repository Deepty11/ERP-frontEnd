import React, { useEffect, useState } from 'react'
import leaveApplicationService from '../services/LeaveApplicationService'
import SpinnerComponent from '../components/common_components/SpinnerComponent'
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
import EmptyViewComponent from '../components/common_components/EmptyViewComponent'
import { ApproveButton, DeclineButton } from '../components/button_components/ButtonComponents'
import { initialLeaveData, initialLeaveOverview } from '../data/LeaveApplicationData'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { useSearchParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const LeaveApplications = (props) => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('userId')

    const [applications, setApplications] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [leaveInformation, setLeaveInformation] = useState(initialLeaveOverview)

    useEffect(() => {
        props.callback('Leave Applications')

        if (userId) {
            fetchIndividualLeaveInfo(userId)
        } else {
            fetchLeaveApplications()
        }
    }, [])

    const fetchLeaveApplications = async () => {
        const leaves = await leaveApplicationService.getAllApplications()
        setApplications(leaves)
        setIsLoading(false)
    }

    const fetchIndividualLeaveInfo = async (userId) => {
        try {
            const overView = await leaveApplicationService.getLeaveOverview(userId)
            setLeaveInformation(overView)
            console.log(overView)

            const leaves = await leaveApplicationService.getAllApplicationsByUserId(userId)
            setApplications(leaves)
            setIsLoading(false)

        } catch (error) {
            throw new Error(error)
        }
    }

    const handleAction = async (e) => {
        const actionName = e.target.name

        const res = await leaveApplicationService.leaveApplicationAction(e.target.value, (actionName == 'Approve' ? true : false))
        console.log(res)

        toast.success(`Status is updated for application Id ${e.target.value}`)
        fetchLeaveApplications()

    }

    if (isLoading) {
        return <SpinnerComponent />
    }

    const personalLeaveInformationTable = () => {
        return <div className="card mb-6">
            <CardHeaderComponent
                title='OverView' />
            <div className='card-content'>
                <TableContainer component={Paper}>
                    <Table
                        // sx={{ minWidth: 650 }}
                        size="small"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Leave Type</TableCell>
                                <TableCell align="right">Total Allowed Leave</TableCell>
                                <TableCell align="right">Taken</TableCell>
                                <TableCell align="right">Due</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ 'width': '4rem' }}>Annual Casual Leave</TableCell>
                                <TableCell align="right" style={{ 'width': '2rem' }}>{leaveInformation.totalCasualLeave}</TableCell>
                                <TableCell align="right" style={{ 'width': '2rem' }}>{leaveInformation.numberOfCasualLeavesTaken}</TableCell>
                                <TableCell align="right" style={{ 'width': '2rem' }}>{leaveInformation.remainingCasualLeaves}</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ 'width': '2rem' }}>Sick Leave</TableCell>
                                <TableCell align="right" style={{ 'width': '2rem' }}>{leaveInformation.totalSickLeave}</TableCell>
                                <TableCell align="right" style={{ 'width': '2rem' }}>{leaveInformation.numberOfSickLeavesTaken}</TableCell>
                                <TableCell align="right" style={{ 'width': '2rem' }}>{leaveInformation.remainingSickLeaves}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    }

    const actionButtons = (row) => {
        if (row.status != 'Pending') {
            return <div>
                <button> Delete</button>
            </div>
        } else {
            return <div className='button-container'>
                <ApproveButton title='Approve' value={row.id} action={handleAction} />
                <DeclineButton title='Decline' value={row.id} action={handleAction} />
            </div>
        }

    }

    const leaveApplicationsTable = () => {
        return <div className="card mb-6">
            <CardHeaderComponent
                title='Leave Applications' />
            <div className='card-content'>
                <TableContainer component={Paper} >
                    <Table
                        sx={{ minWidth: 650 }}
                        size="small"
                        aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Employee Name</TableCell>
                                <TableCell align="right">Leave Type</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right"># of Days</TableCell>
                                <TableCell align="right">Status</TableCell>
                                {userId == null &&
                                    <TableCell className='action-col'
                                        align="left">Action
                                    </TableCell>}

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
                                    <TableCell align="right" style={{ 'width': '2rem' }}>{row.leaveType}</TableCell>
                                    <TableCell align="right" style={{ 'width': '8rem' }}>{row.fromDate} - {row.toDate}</TableCell>
                                    <TableCell align="right" style={{ 'width': '2rem' }}>{dateUtils.getDifference(row.fromDate, row.toDate)}</TableCell>
                                    <TableCell align="right" style={{ 'width': '2rem' }}>{row.status}</TableCell>
                                    {userId == null
                                        && <TableCell align="left" style={{ 'width': '4rem' }}>
                                            {actionButtons(row)}
                                        </TableCell>}

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </div>
        </div>
    }

    return (
        <div>
            <ToastContainer hideProgressBar={true} />
            <section className="section main-section">
                {userId && personalLeaveInformationTable()}
                {applications.length === 0
                    ? <EmptyViewComponent message="No application available" />
                    : leaveApplicationsTable()}
            </section>
        </div>

    )
}

export default LeaveApplications