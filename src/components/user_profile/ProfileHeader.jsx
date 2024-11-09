import React from 'react'

const ProfileHeader = ({userDetails}) => {
    return (
        <div className="card mb-6">
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
            </div>
        </div>
    )
}

export default ProfileHeader