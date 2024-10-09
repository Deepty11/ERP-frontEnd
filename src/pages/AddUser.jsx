import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import TextField from '../components/form_components/TextField'
import DateComponent from '../components/form_components/DateComponent'
import DropdownComponent from '../components/form_components/DropdownComponent'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import { genders, religions, roles, initialAddress, initialUserData, initialFormErrors } from '../data/UserData'
import ContactTextField from '../components/form_components/ContactTextField'
import userService from '../services/UserService'
import AddressComponent from '../components/AddressComponent'
import { FaHouse } from 'react-icons/fa6'
import CardHeaderComponent from '../components/card/CardHeaderComponent'
import { ToastContainer, toast } from 'react-toastify'

const AddUser = (props) => {
    useEffect(() => {
        props.callback('Add User')
    }, [])

    const [user, setUser] = useState(initialUserData)
    const [contactInfoDto, setContactInfoDto] = useState(initialUserData.contactInfoDto)
    const [presentAddress, setPresentAddress] = useState(initialAddress)
    const [permanentAddress, setPermanentAddress] = useState(initialAddress)
    const [sameAsPresentAddress, setSameAsPresentAddress] = useState(false)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleContactInfo = (e) => {
        const { name, value } = e.target
        setContactInfoDto({ ...contactInfoDto, [name]: value })
    }

    const handlePresentAddressChange = (e) => {
        const { name, value } = e.target
        setPresentAddress({ ...presentAddress, [name]: value })
    }

    const handlePermanentAddressChange = (e) => {
        const { name, value } = e.target
        setPermanentAddress({ ...permanentAddress, [name]: value })
    }

    const setContactInfo = () => {
        const contactInfo = contactInfoDto
        contactInfo.presentAddress = presentAddress
        contactInfo.permanentAddress = permanentAddress

        setContactInfoDto(contactInfo)
    }

    const setContactInfoToUserData = () => {
        const userData = user
        userData.contactInfoDto = contactInfoDto
        setUser(userData)
    }

    const handleSameAsAbove = (e) => {
        const checked = e.target.checked

        setSameAsPresentAddress(checked)

        permanentAddress.city = checked ? presentAddress.city : ''
        permanentAddress.district = checked ? presentAddress.district : ''
        permanentAddress.houseNo = checked ? presentAddress.houseNo : ''
        permanentAddress.road = checked ? presentAddress.road : ''
        permanentAddress.thana = checked ? presentAddress.thana : ''
        permanentAddress.postalCode = checked ? presentAddress.postalCode : ''

    }

    const validateForm = (data) => {
        const errors = {}

        if (!data.firstName.trim()) {
            errors.firstName = "First name is required"
        }

        if (!data.lastName.trim()) {
            errors.lastName = "Last name is required"
        }

        if (!data.username.trim()) {
            errors.username = "Username is required"
        }

        if (!data.password.trim()) {
            errors.password = "Password is required"
        }

        if (!data.gender.trim()) {
            errors.gender = "Gender is required"
        }

        if (!data.role.trim()) {
            errors.role = "Role is required"
        }

        return errors
    }

    const submitForm = (e) => {
        e.preventDefault()
        setContactInfo()
        setContactInfoToUserData()
        const errors = validateForm(user)
        console.log(errors)
        setFormErrors(errors)

        if (Object.keys(errors).length === 0) {
            userService.createUser(user, () => {
                toast.success("Added user successfully!")
            }, (error) => {
                console.log(error)
            })
            console.log("submitted data: ", user)
        }
    }

    return (
        <div>
            <ToastContainer hideProgressBar={true} />
            <section className="section main-section">
                <form
                    method='post'
                    onSubmit={submitForm}>
                    <div className="card mb-6">
                        <CardHeaderComponent
                            title='Basic Information'
                            icon={<FaPen />} />

                        <div className="card-content">
                            <TextField
                                title='First Name'
                                value={user.firstName}
                                name='firstName'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.firstName
                                && <p className='error-message'>{formErrors.firstName}</p>}
                            
                            <TextField
                                title='Last Name'
                                value={user.lastName}
                                name='lastName'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.lastName
                                && <p className='error-message'>{formErrors.lastName}</p>}
                            
                            <TextField
                                title='Username'
                                value={user.username}
                                name='username'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.username
                                && <p className='error-message'>{formErrors.username}</p>}

                            <TextField
                                type='password'
                                title='Password'
                                value={user.password}
                                name='password'
                                onChange={handleChange}
                                isRequired={true} />
                            {formErrors.password
                                && <p className='error-message'>{formErrors.password}</p>}

                            <DropdownComponent
                                title="Role"
                                options={roles}
                                name="role"
                                value={user.role}
                                onChange={handleChange}
                                optionLabel="label"
                                isRequired={true}
                            />
                            {formErrors.role
                                && <p className='error-message'>{formErrors.role}</p>}

                            <DateComponent
                                title='Date of Birth'
                                name='birthDate'
                                value={user.birthDate}
                                onChange={handleChange} />

                            <DropdownComponent
                                title="Gender"
                                options={genders}
                                name="gender"
                                value={user.gender}
                                onChange={handleChange}
                                optionLabel="label"
                                isRequired = {true}
                            />
                            {formErrors.gender
                                && <p className='error-message'>{formErrors.gender}</p>}

                            <DropdownComponent
                                title="Religion"
                                options={religions}
                                name="religion"
                                value={user.religion}
                                onChange={handleChange}
                                optionLabel="label"
                            />
                        </div>
                    </div>

                    <div className="card mb-6">
                        <CardHeaderComponent
                            title='Contact Information'
                            icon={<FaPen />} />

                        <div className="card-content">
                            <ContactTextField
                                title='Mobile'
                                value={contactInfoDto.mobileNumber}
                                name='mobileNumber'
                                onChange={handleContactInfo} />

                            <ContactTextField
                                type='email'
                                title='Email'
                                value={contactInfoDto.email}
                                name='email'
                                onChange={handleContactInfo} />
                            <hr />
                        </div>
                    </div>

                    <div className="card mb-6">
                        <CardHeaderComponent
                            title='Present Address'
                            icon={<FaHouse />} />

                        <div className="card-content">
                            <AddressComponent
                                address={presentAddress}
                                handler={handlePresentAddressChange} />
                        </div>
                    </div>

                    <div className="card mb-6">
                        <CardHeaderComponent
                            title='Permanent Address'
                            icon={<FaHouse />} />

                        <div className="card-content">
                            <div className='checkbox-label'>
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    checked={sameAsPresentAddress}
                                    onChange={handleSameAsAbove} />
                                <label>Same as Present Address</label>
                            </div>
                            <AddressComponent
                                address={permanentAddress}
                                handler={handlePermanentAddressChange} />
                        </div>
                    </div>
                    <FormButtonComponent />
                </form >
            </section >
        </div>
    )
}

export default AddUser