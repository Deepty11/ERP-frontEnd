export const statuses = [
    { label: 'To Do', value: 'TO_DO' },
    { label: 'In progress', value: 'IN_PROGRESS'},
    { label: 'Completed', value: 'DONE' },
]

export const priorities = [
    {label: 'High', value: 'HIGH' },
    {label: 'Low', value: 'LOW'},
    {label: 'Medium', value: 'MEDIUM'},
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