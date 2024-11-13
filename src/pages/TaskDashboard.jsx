import React, { useState } from 'react'
import StatusHeader from '../components/task_dashboard/StatusHeader'
import TaskCard from '../components/task_dashboard/TaskCard'

const TaskDashboard = () => {
    const statusAttributes = [
        { id: 0, title: 'To Do', count: 10, backgroundColor: '#FAEBD7', countBG: '#FFA500' },
        { id: 1, title: 'In Progress', count: 10, backgroundColor: '#cce3fa', countBG: '#6e6eff' },
        { id: 2, title: 'Completed', count: 10, backgroundColor: '#d9efd1', countBG: '#5b9243' }
    ]

    const [statusAttrs, setStatusAttrs] = useState(statusAttributes)
    return (
        <section className='section main-section'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {statusAttrs.map(attr => (
                    <div key={attr.id}>
                        <StatusHeader statusAttribute={attr} />
                        <TaskCard />

                        <TaskCard />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TaskDashboard