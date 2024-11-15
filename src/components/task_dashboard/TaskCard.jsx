import React, { useEffect, useState } from 'react'
import { priorities } from '../../data/TaskData'

const TaskCard = ({ task, handler}) => {
    const [priorityColor, setPriorityColor] = useState(priorities[0].color)

    useEffect(() => {
        switch (task.priority) {
            case priorities[0].value:
                setPriorityColor(priorities[0].color)
                break

            case priorities[1].value:
                setPriorityColor(priorities[1].color)
                break

            case priorities[2].value:
                setPriorityColor(priorities[2].color)
                break
        }
    }, [])

    return (
        <div className='card task-card mb-3'
            style={{ borderBottom: `3px solid ${priorityColor}` }}
            onClick={handler}>
            <div className='card-content'>
                <label>{task?.title}</label>
            </div>
        </div>
    )
}

export default TaskCard