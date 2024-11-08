import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { initialUserData } from '../data/UserData'
import userService from '../services/UserService'
import JobProfileDetails from '../components/viewUserDetails/JobProfileDetails'
import ContactDetails from '../components/viewUserDetails/ContactDetails'
import BasicInformation from '../components/viewUserDetails/BasicInformation'
import SpinnerComponent from '../components/common_components/SpinnerComponent'
import EmergencyContactDetails from '../components/viewUserDetails/EmergencyContactDetails'

const ViewUserDetails = (props) => {
    const [searchParams] = useSearchParams()
    const userId = searchParams.get('id')
    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(initialUserData)

    useEffect(() => {
        props.callback('View User Details')

        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        try {
            const userDetails = await userService.getUserDetailsById(userId)
            setLoading(false)
            setUserDetails(userDetails)
            console.log(userDetails)
        } catch (error) {
            console.log(error)
        }
    }

    if(loading) {
        return <SpinnerComponent />
    }

    return (
        <section className='section main-section'>
            <BasicInformation
                userId={userId}
                userDetails={userDetails} />
            <ContactDetails userDetails={userDetails} />
            <EmergencyContactDetails userDetails={userDetails} />
            <JobProfileDetails userDetails={userDetails} />
        </section >
    )
}

export default ViewUserDetails