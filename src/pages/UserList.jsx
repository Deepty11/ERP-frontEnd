import React, { useEffect, useState } from 'react'
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import userService from '../services/UserService'
import SpinnerComponent from '../components/common_components/SpinnerComponent'
import EmptyViewComponent from '../components/common_components/EmptyViewComponent'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import Searchbar from '../components/common_components/Searchbar'
import { useNavigate } from 'react-router'
import { useHerobar } from '../components/HerobarProvider'
import { ToastContainer, toast } from 'react-toastify'

const UserList = () => {
    const [users, setUsers] = useState([])
    //const [filteredUsers, setFilteredUsers] = useState(users)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([])
    const navigate = useNavigate()

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    const { updateHerobar } = useHerobar()

    useEffect(() => {
        updateHerobar('Users')

        if (users.length != 0) {
            return
        }

        getAllUsers()

        return () => updateHerobar("", "", null)
    }, [users])

    const getAllUsers = async () => {
        try {
            const userList = await userService.getUserList()
            setUsers(userList)
            setFilteredUsers(userList)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }

    const handleChangeInSearchbar = (e) => {
        console.log(e.target.value)
        setSearchQuery(e.target.value)

        setFilteredUsers(search(users))
    }

    const search = (data) => {
        const result = data.filter((user) =>
            user.username.toLowerCase().includes(searchQuery)
            || user.firstName.toLowerCase().includes(searchQuery)
            || user.lastName.toLowerCase().includes(searchQuery)
            || user.role.toLowerCase().includes(searchQuery)
        )

        return result
    }

    const handleDelete = async (user) => {
        const confirmed = window.confirm('Are you sure you want to delete the user?')

        if (confirmed) {
            const data = await userService.deleteUserById(user?.id)
            toast.success(data?.message)
            getAllUsers()
        }
    }

    const tableContent = () => {
        return <>
            <ToastContainer hideProgressBar={true} />
            <section className='section main-section'>
                <div className="card mb-6">
                    <CardHeaderComponent
                        title='OverView' />
                    <div className='card-content'>
                        <Searchbar
                            searchQuery={searchQuery}
                            handleChange={handleChangeInSearchbar} />
                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 650 }}
                                size="small"
                                aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Id</TableCell>
                                        <TableCell align="left">Username</TableCell>
                                        <TableCell align="left">FullName</TableCell>
                                        <TableCell align="left">Role</TableCell>
                                        <TableCell className='action-col'
                                            align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredUsers.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{row.id}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.firstName + row.lastName}</TableCell>
                                            <TableCell align="left">{row.role}</TableCell>
                                            <TableCell align="left" style={{ 'width': '8rem' }}>
                                                <div className='button-container'>
                                                    <button
                                                        type='button'
                                                        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-yellow-400"
                                                        onClick={(e) => {
                                                            navigate('/user-details?id=' + row.id)
                                                        }}>
                                                        View
                                                    </button>
                                                    {loggedInUser?.id != row.id && <button
                                                        type='button'
                                                        className="focus:outline-none text-black bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-red-400"
                                                        onClick={(e) => {
                                                            handleDelete(row)
                                                        }}>
                                                        Delete
                                                    </button>}


                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </section>
        </>

    }

    const emptyView = () => {
        return (
            <EmptyViewComponent message='No User found' />
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