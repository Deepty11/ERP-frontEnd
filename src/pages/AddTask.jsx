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

const AddTask = (props) => {
    useEffect(() => {
        props.callback('Add Task')
    }, [])

    const initialTaskState = {
        title: '',
        description: '',
        startDate: '',
        dueDate: '',
        reportedBy: '',
        assignees: [],
        status: '',
        priority: '',
        taskAllowance: 0.0
    }

    const assignees = [
        { name: 'Rehnuma Reza', id: 1 },
        { name: 'Rimi Reza', id: 2 },
        { name: 'Alex', id: 3 },
        { name: 'pop', id: 4 }
    ]

    // const assignees = [
    //       'Rehnuma Reza',
    //       'Rimi Reza',
    //       'Alex',
    //       'pop'
    // ]

    const reporters = [
        { name: 'Rehnuma Reza', id: 1 },
        { name: 'Rimi Reza', id: 2 },
        { name: 'Alex', id: 3 },
        { name: 'pop', id: 4 }
    ]

    // const reporters = [
    //      'Rehnuma Reza',
    //      'Rimi Reza',
    //      'Alex',
    //      'pop'
    // ]

    const statuses = [
        { name: 'To Do', id: 1 },
        { name: 'In progress', id: 2 },
        { name: 'Completed', id: 3 },
    ]

    const priorities = [
        { name: 'High', id: 1 },
        { name: 'Low', id: 2 },
        { name: 'Medium', id: 3 },
    ]

    const [task, setTask] = useState(initialTaskState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("Handle Submission")
        console.log("Task: ", task)

        let response = await taskService.createTask(task)
        console.log(response)
    }

    return (
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

                        <DropdownComponent
                            title="Reported By"
                            options={reporters}
                            name="reportedBy"
                            value={task.reportedBy}
                            onChange={handleChange}
                            optionLabel="name"
                        />

                        <div className="field">
                            <label className="label">Assignees</label>
                            <div className="control">
                                <div className="field">
                                    <MultiSelect
                                        options={assignees}
                                        value={task.assignees}
                                        onChange={handleChange}
                                        optionLabel='name'
                                        display="chip"
                                        placeholder='Select assignees'
                                        className='w-full md:w-20rem p-dropdown'
                                        name='assignees'
                                        selected />
                                </div>
                            </div>
                        </div>

                        <DropdownComponent
                            title="Priority"
                            options={priorities}
                            value={task.priority}
                            name="priority"
                            onChange={handleChange}
                            optionLabel="name"
                        />

                        <DropdownComponent
                            title="Status"
                            options={statuses}
                            value={task.status}
                            name="status"
                            onChange={handleChange}
                            optionLabel="name"
                        />

                        <div className="field">
                            <label className="label">Task Allowance</label>
                            <div className='field'>
                                <div className="field addons">
                                    <div className="control">
                                        <input className="input"
                                            value="BDT"
                                            size="3"
                                            readOnly='true' />
                                    </div>
                                    <div className="control expanded">
                                        <input className="input"
                                            type="text"
                                            placeholder="Task Allowance"
                                            name='taskAllowance'
                                            value={task.taskAllowance}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormButtonComponent />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddTask