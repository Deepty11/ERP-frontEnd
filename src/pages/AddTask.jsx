import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { MultiSelect } from 'primereact/multiselect'
import "primereact/resources/themes/saga-blue/theme.css"
import 'primereact/resources/primereact.min.css';
import DateComponent from '../components/form_components/DateComponent'
import TextArea from '../components/form_components/TextArea'
import TextField from '../components/form_components/TextField'
import DropdownComponent from '../components/form_components/DropdownComponent';
import FormButtonComponent from '../components/form_components/FormButtonComponent';
import taskService from '../services/TaskService';
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { useHerobar } from '../components/HerobarProvider.jsx'
import { statuses, priorities, initialTaskState } from '../data/TaskData.js'
import TextFieldWithAddons from '../components/form_components/TextFieldWithAddons.jsx';
import UserService from '../services/UserService.js';
import { initialUserData } from '../data/UserData.js';
import { toast, ToastContainer } from 'react-toastify';

const AddTask = () => {
    const { updateHerobar } = useHerobar()
    const [users, setUsers] = useState([])
    const [reportedBy, setReportedBy] = useState(initialUserData)
    const [assignees, setAssignees] = useState([])

    useEffect(() => {
        updateHerobar('Create New Task')

        getAllUsers()

        return () => updateHerobar("", "", null)
    }, [])

    const getAllUsers = async () => {
        const users = await UserService.getUserList()
        setUsers(users)
    }

    const [task, setTask] = useState(initialTaskState)

    const handleChange = (e) => {
        const { name, value } = e.target

        if(name == 'taskAllowance') {
            const doubleValue = parseFloat(value)
            if(!isNaN(doubleValue)) {
                setTask({...task, [name]: doubleValue})
            } else {
                setTask({...task, [name]: 0 })
            }
        } else {
            setTask({ ...task, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("Handle Submission")
        console.log("Task: ", task)

        try {
            let data = await taskService.createTask(task)
            toast.success("Created task successfully")
        } catch (error) {
            toast.error("Error in creating new task")
        }
    }

    return (
        <>
            <ToastContainer hideProgressBar={true} />
            <section className="section main-section">
                <div className="card mb-6">
                    <CardHeaderComponent
                        title="Create a New Task"
                        leftIcon={<FaPen />} />
                    <div className="card-content">
                        <form
                            method='post'
                            onSubmit={handleSubmit}>
                            <TextField
                                title='Title'
                                value={task.title}
                                name='title'
                                onChange={handleChange} />

                            <TextArea
                                title='Description'
                                name='description'
                                value={task.description}
                                onChange={handleChange} />

                            <hr />
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 gap-2 ml-1'>
                                <DateComponent
                                    title='Start Date'
                                    name='startDate'
                                    value={task.startDate}
                                    onChange={handleChange} />

                                <DateComponent
                                    title='Due Date'
                                    name='dueDate'
                                    value={task.dueDate}
                                    onChange={handleChange} />
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 gap-2 ml-1'>
                                <DropdownComponent
                                    title="Reported By"
                                    options={users}
                                    name="reportedBy"
                                    value={task.reportedBy}
                                    onChange={handleChange}
                                    optionLabel="fullName"
                                />

                                <div className="field">
                                    <label className="label">Assignees</label>
                                    <div className="control">
                                        <div className="field">
                                            <MultiSelect
                                                options={users}
                                                value={task.assignees}
                                                onChange={handleChange}
                                                optionLabel='fullName'
                                                display="chip"
                                                placeholder='Select assignees'
                                                className='p-dropdown'
                                                name='assignees'
                                                selected />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 gap-2 ml-1'>
                                <DropdownComponent
                                    title="Priority"
                                    options={priorities}
                                    value={task.priority}
                                    name="priority"
                                    onChange={handleChange}
                                    optionLabel="label"
                                />

                                <DropdownComponent
                                    title="Status"
                                    options={statuses}
                                    value={task.status}
                                    name="status"
                                    onChange={handleChange}
                                    optionLabel="label"
                                />
                            </div>
                            <TextFieldWithAddons
                                placeholder='Task Allowance'
                                title='Task Allowance'
                                name='taskAllowance'
                                value={task.taskAllowance ?? 0.0}
                                onChange={handleChange} />

                            <FormButtonComponent />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddTask