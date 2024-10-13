import React, { useEffect, useState } from 'react'
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import UserService from '../services/UserService'
import SpinnerComponent from '../components/SpinnerComponent'

const UserList = (props) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        props.callback('Users')

        if (users.length != 0) {
            return
        }
        UserService.getUserList((users) => {
            setUsers(users)
            setLoading(false)
        }, (error) => {
            setError(error)
            setLoading(false)
        })

    }, [users])

    const tableContent = () => {
        return <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">FullName</TableCell>
                        <TableCell align="center">Role</TableCell>
                        <TableCell className='action-col' align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.id}</TableCell>
                            <TableCell align="center" style={{ 'width': '4rem' }}>{row.username}</TableCell>
                            <TableCell align="center" style={{ 'width': '2rem' }}>{row.firstName + row.lastName}</TableCell>
                            <TableCell align="center" style={{ 'width': '2rem' }}>{row.role}</TableCell>
                            <TableCell align="center" style={{ 'width': '8rem' }}>
                                <div className='button-container'>
                                    <button
                                        type='button'
                                        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400">
                                        View Details
                                    </button>

                                    <button
                                        type='button'
                                        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400">
                                        Edit Job Profile
                                    </button>

                                </div>
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
                <h1>No user found</h1>
            </div>
        )
    }

    return (
        <>
            {loading && <SpinnerComponent />}
            {users.length === 0 ? emptyView() : tableContent()}
        </>
    )
}

export default UserList