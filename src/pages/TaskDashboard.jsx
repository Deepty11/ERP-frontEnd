import React, { useEffect, useState } from 'react'
import StatusHeader from '../components/task_dashboard/StatusHeader'
import TaskCard from '../components/task_dashboard/TaskCard'
import taskService from '../services/TaskService'
import { useHerobar } from '../components/HerobarProvider'

const TaskDashboard = () => {
    const [tasks, setTasks] = useState([])
    const { updateHerobar } = useHerobar()

    useEffect(() => {
        updateHerobar("Task Board")
        if (tasks.length === 0) {
            retrieveTasks()
        }
    }, [])

    const retrieveTasks = async () => {
        try {
            const list = await taskService.getAllTasks()
            setTasks(list)
        } catch (error) {
            console.log(error)
        }
    }

    const statusAttributes = [
        { id: 0, title: 'To Do', count: 10, backgroundColor: '#FAEBD7', countBG: '#FFA500' },
        { id: 1, title: 'In Progress', count: 10, backgroundColor: '#cce3fa', countBG: '#6e6eff' },
        { id: 2, title: 'Completed', count: 10, backgroundColor: '#d9efd1', countBG: '#5b9243' }
    ]

    const [statusAttrs, setStatusAttrs] = useState(statusAttributes)
    return (
        <section className='section task-dashboard'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                {statusAttrs.map(attr => (
                    <div key={attr.id}>
                        <StatusHeader statusAttribute={attr} />
                        {tasks.filter(task => task.status === attr.title)
                            .map(task => <TaskCard task={task} />)}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TaskDashboard