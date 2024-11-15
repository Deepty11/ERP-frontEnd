

export const statuses = [
    { id: 0, label: 'To Do', value: 'TO_DO', count: 10, backgroundColor: '#FAEBD7', countBG: '#FFA500' },
    { id: 1, label: 'In progress', value: 'IN_PROGRESS', count: 10, backgroundColor: '#cce3fa', countBG: '#6e6eff'},
    { id: 2, label: 'Done', value: 'DONE', count: 10, backgroundColor: '#d9efd1', countBG: '#5b9243' },
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
    reportedBy: null,
    assignees: [],
    status: '',
    priority: '',
    taskAllowance: 0.0
}