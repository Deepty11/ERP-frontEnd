import { initialJobProfileData } from "./JobProfileData"


export const religions = [
    { label: "Islam", value: "ISLAM" },
    { label: "Hinduism", value: "HINDUISM" },
    { label: "Buddhism", value: "BUDDHISM" },
    { label: "Christianity", value: "CHRISTIANITY" }
]

export const genders = [
    { label: "Male", value: "MALE" },
    { label: "Female", value: "FEMALE" },
    { label: "Other", value: "OTHER" },
]

export const roles = [
    { label: "Admin", value: "ADMIN" },
    { label: "User", value: "USER" },
]


export const relations = [
    { label: "Parents", value: "PARENTS" },
    { label: "Spouse", value: "SPOUSE" },
    { label: "Children", value: "CHILDREN" },
    { label: "Other", value: "OTHER" }
]

export const initialContactInfoData = {
    mobileNumber: '',
    email: '',
    address: ''
}

export const initialEmergencyContactInfoData = {
    name: '',
    mobileNumber: '',
    relation: ''
}

export const initialUserData = {
    username: '',
    firstName: '',
    lastName: '',
    fullName:'',
    password: '',
    birthDate: '',
    gender: '',
    role: '',
    //document: null, // later
    religion: '',
    contactInfoDto: initialContactInfoData,
    jobProfileDto: initialJobProfileData,
    emergencyContactInfoDto: null, //later
    //leaveInfo: null //later
}

export const initialFormErrors = {
    employeeId: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    gender: '',
    role: '',
    designationTitle: '',
}