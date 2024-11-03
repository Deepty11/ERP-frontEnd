import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import HorizontalButtonGroup from '../components/button_components/HorizontalButtonGroup'
import GeneralInfo from '../components/user_profile/GeneralInfo'
import JobInfo from '../components/user_profile/JobInfo'
import Leave from '../components/user_profile/Leave'
import ContactInfo from '../components/user_profile/ContactInfo'
import DocumentInfo from '../components/user_profile/DocumentInfo'
import userService from '../services/UserService'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import designationService from '../services/DesignationService'
import SpinnerComponent from '../components/common_components/SpinnerComponent'

const UserProfile = (props) => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('id')
    const [infoView, setInfoView] = useState(null)
    const [userDetails, setUserDetails] = useState(null)
    const [newUserDetails, setNewUserDetails] = useState(null)
    const [showFormButtons, setShowFormButtons] = useState(true)

    const [designations, setDesignations] = useState([])
    const [loading, setLoading] = useState(true)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const getUserDetails = async () => {
        const userDetails = await userService.getUserDetailsById(userId)
        setUserDetails(userDetails)
        setInfoView(
            <GeneralInfo
                userDetails={userDetails}
                handleChange={handleChange} />)
    }

    useEffect(() => {
        props.callback('Profile')
        getUserDetails()

        if (designations.length === 0) {
            designationService.getAllDesignations((designationList) => {
                setDesignations(designationList)
                console.log(designationList)
                setLoading(false)
            }, (error) => {
                console.log(error)
                setLoading(false)
            })
        }

    }, [designations])

    if (loading) {
        return <SpinnerComponent />
    }

    const profileButtons = [
        { label: 'General Info', id: 0 },
        { label: 'Contact Info', id: 1 },
        { label: 'Job Info', id: 2 },
        { label: 'Leave', id: 3 },
        { label: 'Documents', id: 4 },
    ]

    const infoButtonAction = (e) => {
        const buttonTitle = e.target.title

        switch (buttonTitle) {
            case 'General Info':
                setInfoView(
                    <GeneralInfo
                        userDetails={userDetails}
                        handleChange={handleChange} />)
                setShowFormButtons(true)
                break
            case 'Contact Info':
                setInfoView(<ContactInfo userDetail={userDetails} />)
                setShowFormButtons(true)
                break
            case 'Job Info':
                setInfoView(
                    <JobInfo
                        jobProfileDto={userDetails?.jobProfileDto}
                        designationList={designations} />)
                setShowFormButtons(false)
                break
            case 'Leave':
                setInfoView(<Leave userDetails={userDetails} />)
                setShowFormButtons(false)
                break
            case 'Documents':
                setInfoView(<DocumentInfo userDetails={userDetails} />)
                setShowFormButtons(true)
                break
        }

    }
    return (
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
                            <label style={{ color: 'gray' }}>{userDetails?.jobProfileDto.designationDto.title}</label>
                        </div>
                    </div>
                    <HorizontalButtonGroup
                        items={profileButtons}
                        onClickHandler={infoButtonAction} />
                    {infoView}
                    {showFormButtons &&
                        <FormButtonComponent handleReset={(e) => {
                            reset()
                        }} />}

                </div>
            </div>
        </section >
    )
}

export default UserProfile