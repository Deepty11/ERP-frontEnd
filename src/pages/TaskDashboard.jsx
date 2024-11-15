import React, { useEffect, useState } from 'react'
import StatusHeader from '../components/task_dashboard/StatusHeader'
import TaskCard from '../components/task_dashboard/TaskCard'
import taskService from '../services/TaskService'
import { useHerobar } from '../components/HerobarProvider'
import { useNavigate } from 'react-router'
import { statuses } from '../data/TaskData'

const TaskDashboard = () => {
    const [tasks, setTasks] = useState([])
    const { updateHerobar } = useHerobar()
    const navigate = useNavigate()

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

    const handleClickOnTaskCard = (taskId) => {
        navigate('/edit-task?id=' + taskId)
    }

    //const [statuses, setStatuses] = useState(statuses)
    return (
        <section className='section task-dashboard'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                {statuses.map(status => (
                    <div key={status.id}>
                        <StatusHeader status={status} />
                        {tasks.filter(task => task.status === status.value)
                            .map(task => <TaskCard
                                task={task}
                                handler={(e) => {
                                    console.log(task.id)
                                    handleClickOnTaskCard(task.id)
                                }} />)}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TaskDashboard