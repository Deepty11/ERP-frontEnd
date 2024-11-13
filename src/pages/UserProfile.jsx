import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import HorizontalButtonGroup from '../components/button_components/HorizontalButtonGroup'
import GeneralInfo from '../components/user_profile/GeneralInfo'
import JobInfo from '../components/user_profile/JobInfo'
import Leave from '../components/user_profile/Leave'
import ContactInfo from '../components/user_profile/ContactInfo'
import DocumentInfo from '../components/user_profile/DocumentInfo'
import userService from '../services/UserService'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import SpinnerComponent from '../components/common_components/SpinnerComponent'
import { initialContactInfoData, initialEmergencyContactInfoData, initialUserData } from '../data/UserData'
import { ToastContainer, toast } from 'react-toastify'
import EmergencyContactInfo from '../components/user_profile/EmergencyContactInfo'
import { useHerobar } from '../components/HerobarProvider'

const UserProfile = () => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('id')
    const navigate = useNavigate()
    const [selectedView, setSelectedView] = useState("General Info")
    const [userDetails, setUserDetails] = useState(initialUserData) // keeping it for reset
    const [newUserDetails, setNewUserDetails] = useState(null) // for the updates

    const [newContactInfoDto, setNewContactInfoDto] = useState(initialContactInfoData)
    const [newEmergencyContactInfoDto, setNewEmergencyContactInfoDto] = useState(initialEmergencyContactInfoData)

    const [loading, setLoading] = useState(true)
    const {updateHerobar} = useHerobar()

    const handleContactInfoChange = (e) => {
        const { name, value } = e.target
        setNewContactInfoDto({ ...newContactInfoDto, [name]: value })
    }

    const handleEmergencyContactInfoChange = (e) => {
        const { name, value } = e.target
        setNewEmergencyContactInfoDto({ ...newEmergencyContactInfoDto, [name]: value })
    }

    const getUserDetails = async () => {
        try {
            const userDetails = await userService.getUserDetailsById(userId)
            setLoading(false)
            setUserDetails(userDetails)
            setNewUserDetails(userDetails)
            setNewContactInfoDto(userDetails?.contactInfoDto)
            setNewEmergencyContactInfoDto(userDetails?.emergencyContactInfoDto)
            console.log(userDetails)
        } catch (error) {
            console.log(error)
        }
    }

    const handleGeneralInfoChange = (e) => {
        const { name, value } = e.target
        setNewUserDetails({ ...newUserDetails, [name]: value })
    }

    useEffect(() => {
        getUserDetails()

        return () =>  updateHerobar("","",null)
    }, [])

    if (loading) {
        return <SpinnerComponent />
    }

    const profileButtons = [
        { label: 'General Info', id: 0 },
        { label: 'Contact Info', id: 1 },
        { label: 'Emergency Contact Info', id: 2 },
        { label: 'Job Info', id: 3 },
        { label: 'Leave', id: 4 },
        { label: 'Documents', id: 5 },
    ]

    const infoView = () => {
        switch (selectedView) {
            case 'General Info':
                return <GeneralInfo
                    userDetails={newUserDetails}
                    handleChange={handleGeneralInfoChange}
                />

            case 'Contact Info':
                return <ContactInfo
                    contactInfoDto={newContactInfoDto}
                    handleChange={handleContactInfoChange} />

            case 'Emergency Contact Info':
                return <EmergencyContactInfo
                    emergencyContactInfoDto={newEmergencyContactInfoDto}
                    handleChange={handleEmergencyContactInfoChange} />

            case 'Job Info':
                return <JobInfo
                    jobProfileDto={newUserDetails?.jobProfileDto} />

            case 'Leave':
                return <Leave userDetails={newUserDetails} />

            case 'Documents':
                return <DocumentInfo userDetails={newUserDetails} />
        }
    }

    const showFormButtons = () => {
        if (selectedView == 'General Info' ||
            selectedView == 'Contact Info' ||
            selectedView == 'Emergency Contact Info' ||
            selectedView == 'Document') {
            return true
        } else {
            return false
        }
    }

    const infoButtonAction = (e) => {
        const buttonTitle = e.target.title
        setSelectedView(buttonTitle)
    }

    const setContactDetailsToUserDetails = () => {
        const update = newUserDetails
        update.contactInfoDto = newContactInfoDto
        update.emergencyContactInfoDto = newEmergencyContactInfoDto
        setNewUserDetails(update)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        setContactDetailsToUserDetails()
        console.log("Update: ")
        console.log(newUserDetails)
        await updateUserDetails()

    }

    const updateUserDetails = async () => {
        try {
            const data = await userService.updateUserDetailsById(userId, newUserDetails)
            toast.success(data?.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleReset = (e) => {
        setNewUserDetails(userDetails)
        setNewContactInfoDto(userDetails.contactInfoDto)
    }

    return (
        <div>
            <ToastContainer hideProgressBar={true} />
            <section className='section main-section'>
                <div className="card">
                    <div className="card-content">
                        <div className='profile-header'>
                            <div className="image w-40 h-40">
                                <img
                                    src="https://avatars.dicebear.com/v2/initials/john-doe.svg"
                                    alt="John Doe"
                                    className="rounded-full" />
                            </div>
                            <div className='vertical-content'>
                                <label className='label'>{userDetails?.firstName + " " + userDetails?.lastName}</label>
                                <label style={{ color: 'gray' }}>{userDetails?.jobProfileDto?.designationDto?.title}</label>
                            </div>
                        </div>
                        <HorizontalButtonGroup
                            items={profileButtons}
                            onClickHandler={infoButtonAction} />
                        <form
                            onSubmit={handleUpdate}
                            method='post'>
                            <div key={selectedView}>{infoView()}</div>
                            {showFormButtons() &&
                                <FormButtonComponent
                                    handleReset={handleReset} />}
                        </form>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default UserProfile