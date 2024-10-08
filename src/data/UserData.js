export const religions = [
    { label: "Islam", value: "ISLAM" },
    { label: "Hinduism", value: "HINDUISM" },
    { label: "Buddhism", value: "BUDDHISM" },
    { label: "Christianity", value: "CHRISTIANITY" }
]

export const genders = [
    {label: "Male", value: "MALE"},
    {label: "Female", value: "FEMALE"},
    {label: "Other", value: "OTHER"},
]

export const roles = [
    {label: "Admin", value: "ADMIN"},
    {label: "User", value: "USER"},
]

export const initialAddress = {
    houseNo: '',
    road: '',
    city: '',
    thana: '',
    postalCode: '',
    district: ''
}

export const initialUserData = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    birthDate: '',
    gender: '',
    role: '',
    //document: null, // later
    religion: '',
    contactInfoDto: {
        mobileNumber: '',
        email: '',
        presentAddress: initialAddress, //later
        permanentAddress: initialAddress //later

    },
    emergencyContactInfoDto: null, //later
    //leaveInfo: null //later
}