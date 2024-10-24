export const initialLeaveApplication = {
    leaveType: '',
    description: '',
    fromDate: '',
    toDate: '',
    status: 'Pending',
    userDto: null
}

export const initialLeaveApplicationFormErrors = {
    leaveType: '',
    fromDate: '',
    toDate: '',
    userDto: null
}

export const leaveTypes = [
    { label: "Sick", value: "SICK" },
    { label: "Casual", value: "CASUAL" },
]

export const initialLeaveData = [
    {type: 'Casual Leave', total: 14, taken: 8, remaining: 6 },
    {type: 'Sick', total: 3, taken: 1, remaining: 2 },
]

export const initialLeaveOverview = {
        userId: 0,
        totalCasualLeave: 0,
        totalSickLeave: 0,
        numberOfCasualLeavesTaken: 0,
        numberOfSickLeavesTaken: 0,
        remainingCasualLeaves: 0,
        remainingSickLeaves: 0
}