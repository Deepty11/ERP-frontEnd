import { color } from "framer-motion"

export const statuses = [
    { label: 'To Do', value: 'TO_DO' },
    { label: 'In progress', value: 'IN_PROGRESS'},
    { label: 'Completed', value: 'DONE' },
]

export const priorities = [
    {label: 'High', value: 'HIGH', color: '#C70039' },
    {label: 'Medium', value: 'MEDIUM', color: '#FFC300'},
    {label: 'Low', value: 'LOW', color: '#1e8449'},
]

export const initialTaskState = {
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