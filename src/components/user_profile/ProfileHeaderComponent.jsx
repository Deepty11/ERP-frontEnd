import React, { useEffect, useState } from 'react'
import { FaCamera } from 'react-icons/fa'

const ProfileHeaderComponent = ({ userDetails, handleAction }) => {
    const [profilePicture, setProfilePicture] = useState("https://avatars.dicebear.com/v2/initials/john-doe.svg")

    useEffect(() => {
        if (userDetails?.fileEntityDto?.data != null) {
            setProfilePicture(`data:image/jpeg;base64,${userDetails?.fileEntityDto?.data}`)
        } else {
            setProfilePicture("https://avatars.dicebear.com/v2/initials/john-doe.svg")
        }

    }, [])
    return (
        <div className='profile-header'>
            <div className="image profile-image-container">
                <img className='rounded-full'
                    src={profilePicture}
                    alt='john doe'
                    style={{
                        height: '10rem',
                        width: '10rem',
                        border: '1px solid black'
                    }}
                />
                <button className='profile-image-camera'
                    onClick={handleAction}>
                    <FaCamera />
                </button>
            </div>
            <div className='vertical-content'>
                <label className='label'>{userDetails?.firstName + " " + userDetails?.lastName}</label>
                <label style={{ color: 'gray' }}>{userDetails?.jobProfileDto?.designationDto?.title}</label>
            </div>
        </div>
    )
}

export default ProfileHeaderComponent