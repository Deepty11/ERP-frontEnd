import { p } from 'framer-motion/client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import HorizontalButtonGroup from '../components/button_components/HorizontalButtonGroup'

const UserProfile = (props) => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('userId')

    const profileButtons = [
        { label: 'General Info', id: 0 },
        { label: 'Job Info', id: 1 },
        { label: 'Leave', id: 2 },
        { label: 'Documents', id: 3 },
    ]

    useEffect(() => {
        props.callback('Profile')

    }, [])
    return (
        <section className='section main-section'>
            <div className="card">
                <div className="card-content">
                    <div className='profile-header'>
                        <div className="image w-40 h-40">
                            <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full" />
                        </div>
                        <div className='vertical-content'>
                            <label className='label'>Rehnuma Reza</label>
                            <label style={{ color: 'gray' }}>Software Engineer</label>
                        </div>
                    </div>
                    <HorizontalButtonGroup items={profileButtons} />

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                            type="text" 
                            readonly={true} 
                            value="John Doe" 
                            className="input is-static" />
                        </div>
                    </div>
                    <hr />
                    <div className="field">
                        <label className="label">E-mail</label>
                        <div className="control">
                            <input 
                            type="text" 
                            readonly={true}  
                            value="user@example.com" 
                            className="input is-static" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default UserProfile