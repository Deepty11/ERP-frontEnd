import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import JobProfileComponent from '../components/feature_components/JobProfileComponent'
import ContactInfo from '../components/user_profile/ContactInfo'
import EmergencyContactInfo from '../components/user_profile/EmergencyContactInfo'
import GeneralInfo from '../components/user_profile/GeneralInfo'
import { initialJobProfileData } from '../data/JobProfileData'
import { initialContactInfoData, initialEmergencyContactInfoData, initialUserData } from '../data/UserData'
import userService from '../services/UserService'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { MdContactEmergency } from 'react-icons/md'
import UserService from '../services/UserService'
import { useHerobar } from '../components/HerobarProvider.jsx'
import UploadProfilePictureModal from '../components/user_profile/UploadProfilePictureModal.jsx'
import { convertToBase64 } from '../utils/FileUtils.js'
import ProfileHeaderComponent from '../components/user_profile/ProfileHeaderComponent.jsx'
import SpinnerComponent from '../components/common_components/SpinnerComponent.jsx'

const EditUserDetails = () => {
    const [userDetails, setUserDetails] = useState(initialUserData)
    const [newUserDetails, setNewUserDetails] = useState(initialUserData)
    const [newContactDetails, setNewContactDetails] = useState(initialContactInfoData)
    const [newEmergencyContactInfoDto, setNewEmergencyContactInfoDto] = useState(initialEmergencyContactInfoData)
    const [newJobProfileDto, setNewJobProfileDto] = useState(initialJobProfileData)
    const [loading, setLoading] = useState(true)
    const [file, setFile] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const [searchParams] = useSearchParams()
    const userId = searchParams.get('id')

    const { updateHerobar } = useHerobar()

    const updateNewUserDetails = () => {
        const userDetails = newUserDetails
        userDetails.contactInfoDto = newContactDetails
        userDetails.jobProfileDto = newJobProfileDto
        userDetails.emergencyContactInfoDto = newEmergencyContactInfoDto
        setNewUserDetails(userDetails)
    }

    const saveUserDetails = async () => {
        try {
            const data = await UserService.updateUserDetailsById(userId, newUserDetails)
            toast.success(data?.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateNewUserDetails()
        saveUserDetails()
    }

    const handleReset = (e) => {
        setNewUserDetails(userDetails)
        setNewContactDetails(userDetails?.contactInfoDto)
        setNewEmergencyContactInfoDto(userDetails?.emergencyContactInfoDto)
        setNewJobProfileDto(userDetails?.jobProfileDto)
    }

    const handleGeneralInfoChange = (e) => {
        const { name, value } = e.target
        setNewUserDetails({ ...newUserDetails, [name]: value })
    }

    const handleContactInfoChange = (e) => {
        const { name, value } = e.target
        setNewContactDetails({ ...newContactDetails, [name]: value })
    }

    const handleJobProfileChange = (e) => {
        const { name, value } = e.target

        if (name == 'basicSalary' || name == 'compensation') {
            const doubleValue = parseFloat(value)
            if (!isNaN(doubleValue)) {
                setNewJobProfileDto({ ...newJobProfileDto, [name]: doubleValue })
            } else {
                setNewJobProfileDto({ ...newJobProfileDto, [name]: "" })
            }
        } else {
            setNewJobProfileDto({ ...newJobProfileDto, [name]: value })
        }
    }

    const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target
        setNewEmergencyContactInfoDto({ ...newEmergencyContactInfoDto, [name]: value })
    }

    useEffect(() => {
        updateHerobar('Edit User Details')
        getUserDetails()

        return () => updateHerobar("", "", null)
    }, [])

    const getUserDetails = async () => {
        try {
            const userDetails = await userService.getUserDetailsById(userId)
            setLoading(false)
            setUserDetails(userDetails)
            setNewUserDetails(userDetails)
            setNewContactDetails(userDetails?.contactInfoDto)
            setNewEmergencyContactInfoDto(userDetails?.emergencyContactInfoDto)
            setNewJobProfileDto(userDetails?.jobProfileDto)
            console.log(userDetails)
        } catch (error) {
            console.log(error)
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleUploadProfilePicture = async (e) => {
        e.preventDefault()
        try {
            const base64Data = await convertToBase64(file)
            const dto = {
                fileName: file.name,
                data: base64Data
            }

            const response = await UserService.uploadProfilePicture(userId, dto)
            setShowModal(false)
            setLoading(true)
            getUserDetails()
        } catch (error) {
            console.log("Error occured: " + error)
            alert("Error in uploading file")
        }
    }

    if (loading) {
        return <SpinnerComponent />
    }

    return (
        <div>
            <ToastContainer hideProgressBar={true} />
            <section className='section main-section'>
                <div className="card mb-6">
                    <div className="card-content">
                        <ProfileHeaderComponent
                            userDetails={newUserDetails}
                            handleAction={(e) => setShowModal(true)} />
                    </div>
                </div>

                <div>
                    {showModal
                        && <UploadProfilePictureModal
                            onCancel={(e) => setShowModal(false)}
                            handleChange={handleFileChange}
                            handleSubmit={handleUploadProfilePicture} />}
                    <form
                        onSubmit={handleSubmit}
                        method='post'>
                        <div className='card mb-6'>
                            <CardHeaderComponent title='Basic Information' />
                            <div className='card-content'>
                                <GeneralInfo
                                    userDetails={newUserDetails}
                                    handleChange={handleGeneralInfoChange} />
                            </div>
                        </div>

                        <JobProfileComponent
                            jobProfileDto={newJobProfileDto}
                            handleChange={handleJobProfileChange} />

                        <div className='card mb-6'>
                            <CardHeaderComponent title='Contact Information' />
                            <div className='card-content'>
                                <ContactInfo
                                    contactInfoDto={newContactDetails}
                                    handleChange={handleContactInfoChange} />
                            </div>
                        </div>

                        <div className='card mb-6'>
                            <CardHeaderComponent
                                title='Emergency Contact'
                                leftIcon={<MdContactEmergency />} />
                            <div className='card-content'>
                                <EmergencyContactInfo
                                    emergencyContactInfoDto={newEmergencyContactInfoDto}
                                    handleChange={handleEmergencyContactChange} />
                            </div>
                        </div>

                        <FormButtonComponent
                            handleReset={handleReset} />
                    </form>
                </div>
            </section >
        </div >
    )
}

export default EditUserDetails