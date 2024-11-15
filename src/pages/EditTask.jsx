import React, { useEffect, useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'
import "primereact/resources/themes/saga-blue/theme.css"
import 'primereact/resources/primereact.min.css';
import DateComponent from '../components/form_components/DateComponent.jsx'
import TextArea from '../components/form_components/TextArea.jsx'
import TextField from '../components/form_components/TextField.jsx'
import DropdownComponent from '../components/form_components/DropdownComponent.jsx';
import FormButtonComponent from '../components/form_components/FormButtonComponent.jsx';
import taskService from '../services/TaskService.js';
import { useHerobar } from '../components/HerobarProvider.jsx'
import { statuses, priorities, initialTaskState } from '../data/TaskData.js'
import TextFieldWithAddons from '../components/form_components/TextFieldWithAddons.jsx';
import UserService from '../services/UserService.js';
import { toast, ToastContainer } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const EditTask = () => {
    const [searchParams] = useSearchParams()
    const taskId = searchParams.get('id')
    
    const { updateHerobar } = useHerobar()
    const [users, setUsers] = useState([])
    const [task, setTask] = useState(initialTaskState)
    const [newTask, setNewTask] = useState(initialTaskState)

    useEffect(() => {
        getTaskById(taskId)
        getAllUsers()

        return () => updateHerobar("", "", null)
    }, [])

    const getTaskById = async () => {
        const taskDetails = await taskService.getTaskById(taskId)
        setTask(taskDetails)
        setNewTask(taskDetails)
        updateHerobar(taskDetails?.title)
    }

    const getAllUsers = async () => {
        const users = await UserService.getUserList()
        setUsers(users)
    }


    const handleChange = (e) => {
        const { name, value } = e.target

        if(name == 'taskAllowance') {
            const doubleValue = parseFloat(value)
            setNewTask({...newTask, [name]: !isNaN(doubleValue) ? doubleValue : 0})
        } else {
            setNewTask({ ...newTask, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("Handle Submission")
        console.log("Task: ", newTask)

        try {
            let data = await taskService.updateTask(taskId, newTask)
            
            toast.success(data?.message)
        } catch (error) {
            toast.error(error?.message)
        }
    }

    const handleReset = (e) => {
        setNewTask(task)
    }

    return (
        <>
            <ToastContainer hideProgressBar={true} />
            <section className="section main-section">
                <div className="card mb-6">
                    <div className="card-content">
                        <form
                            method='post'
                            onSubmit={handleSubmit}>
                            <TextField
                                title='Title'
                                value={newTask.title}
                                name='title'
                                onChange={handleChange} />

                            <TextArea
                                title='Description'
                                name='description'
                                value={newTask.description}
                                onChange={handleChange} />

                            <hr />
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 gap-2 ml-1'>
                                <DateComponent
                                    title='Start Date'
                                    name='startDate'
                                    value={newTask.startDate}
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
                                    value={newTask.reportedBy}
                                    onChange={handleChange}
                                    optionLabel="fullName"
                                />

                                <div className="field">
                                    <label className="label">Assignees</label>
                                    <div className="control">
                                        <div className="field">
                                            <MultiSelect
                                                options={users}
                                                value={newTask.assignees}
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
                                    value={newTask.priority}
                                    name="priority"
                                    onChange={handleChange}
                                    optionLabel="label"
                                />

                                <DropdownComponent
                                    title="Status"
                                    options={statuses}
                                    value={newTask.status}
                                    name="status"
                                    onChange={handleChange}
                                    optionLabel="label"
                                />
                            </div>
                            <TextFieldWithAddons
                                placeholder='Task Allowance'
                                title='Task Allowance'
                                name='taskAllowance'
                                value={newTask.taskAllowance ?? 0.0}
                                onChange={handleChange} />

                            <FormButtonComponent handleReset={handleReset} />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditTask