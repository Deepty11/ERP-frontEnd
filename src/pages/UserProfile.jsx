import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import HorizontalButtonGroup from '../components/button_components/HorizontalButtonGroup'
import GeneralInfo from '../components/user_profile/GeneralInfo'
import JobInfo from '../components/user_profile/JobInfo'
import Leave from '../components/user_profile/Leave'
import ContactInfo from '../components/user_profile/ContactInfo'
import DocumentInfo from '../components/user_profile/DocumentInfo'

const UserProfile = (props) => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('userId')
    const [infoView, setInfoView] = useState(<GeneralInfo />)
    const [user, setUser] = useState(null)

    const profileButtons = [
        { label: 'General Info', id: 0 },
        { label: 'Contact Info', id: 1 },
        { label: 'Job Info', id: 2 },
        { label: 'Leave', id: 3 },
        { label: 'Documents', id: 4 },
    ]

    useEffect(() => {
        props.callback('Profile')

    }, [])

    const infoButtonAction = (e) => {
        console.log(e.target.title)
        const buttonTitle = e.target.title
        switch (buttonTitle) {
            case 'General Info':
                setInfoView(<GeneralInfo />)
                break
            case 'Contact Info':
                setInfoView(<ContactInfo />)
                break
            case 'Job Info':
                setInfoView(<JobInfo />)
                break
            case 'Leave':
                setInfoView(<Leave />)
                break
            case 'Documents':
                setInfoView(<DocumentInfo />)
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