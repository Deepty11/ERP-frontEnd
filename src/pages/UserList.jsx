import React, { useEffect, useState } from 'react'
import { DemoUsers } from '../dtos/UserDto'
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import UserService from '../services/UserService'
import { Button, Spinner } from 'react-bootstrap'
import SpinnerComponent from '../components/SpinnerComponent'

const UserList = (props) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        props.callback('Users')

        UserService.getUserList((users) => {
            console.log(users)
            setUsers(users)
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
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">FullName</TableCell>
                        <TableCell align="center">Role</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.id}</TableCell>
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.fullName}</TableCell>
                            <TableCell align="center">{row.role}</TableCell>
                            <TableCell align="center">
                                <button
                                    type='button'
                                    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400">
                                    Edit
                                </button>
                                {/* <Button 
                                variant='warning' 
                                className='tableActionButton' onClick={() => {
                                    console.log(row.id)
                                }}>Edit</Button> */}
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