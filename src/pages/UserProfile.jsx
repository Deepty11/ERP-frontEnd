import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import HorizontalButtonGroup from '../components/button_components/HorizontalButtonGroup'
import GeneralInfo from '../components/user_profile/GeneralInfo'
import JobInfo from '../components/user_profile/JobInfo'
import Leave from '../components/user_profile/Leave'
import ContactInfo from '../components/user_profile/ContactInfo'
import DocumentInfo from '../components/user_profile/DocumentInfo'
import userService from '../services/UserService'

const UserProfile = (props) => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('id')
    const [infoView, setInfoView] = useState(null)
    const [userDetail, setUserDetail] = useState(null)

    useEffect(() => {
        props.callback('Profile')
        getUserDetails()
    },[])

    const getUserDetails = async () => {
        const userDetails = await userService.getUserDetailsById(userId)
        setUserDetail(userDetails)
        console.log("userdetails from userprofile: ")
        console.log(userDetails)
        setInfoView(<GeneralInfo userDetail={userDetails} />)
    }

    const profileButtons = [
        { label: 'General Info', id: 0 },
        { label: 'Contact Info', id: 1 },
        { label: 'Job Info', id: 2 },
        { label: 'Leave', id: 3 },
        { label: 'Documents', id: 4 },
    ]

    const infoButtonAction = (e) => {
        console.log(e.target.title)
        const buttonTitle = e.target.title
        switch (buttonTitle) {
            case 'General Info':
                setInfoView(<GeneralInfo userDetail = {userDetail} />)
                break
            case 'Contact Info':
                setInfoView(<ContactInfo userDetail = {userDetail}/>)
                break
            case 'Job Info':
                setInfoView(<JobInfo userDetail = {userDetail} />)
                break
            case 'Leave':
                setInfoView(<Leave userDetail = {userDetail}/>)
                break
            case 'Documents':
                setInfoView(<DocumentInfo userDetail = {userDetail}/>)
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
                            <label className='label'>Rehnuma Reza</label>
                            <label style={{ color: 'gray' }}>Software Engineer</label>
                        </div>
                    </div>
                    <HorizontalButtonGroup
                        items={profileButtons}
                        onClickHandler={infoButtonAction} />
                    {infoView}
                </div>
            </div>
        </section >
    )
}

export default UserProfile