import React from 'react'
import CardHeaderComponent from '../card/CardHeaderComponent'
import FormButtonComponent from '../form_components/FormButtonComponent'
import { FaX } from 'react-icons/fa6'

const UploadProfilePictureModal = ({ onCancel, handleSubmit, handleChange }) => {

    return (
        <div className='modal-overlay'>
            <section className='section main-section'>
                <div className='card'>
                    <CardHeaderComponent
                        title='Upload Photo'
                        rightIcon={<FaX />}
                        onClickRightIcon={onCancel}
                    />
                    <div className='card-content'>
                        <div className='card-body'>
                            <form method='post'
                                onSubmit={handleSubmit}>
                                <div className='field'>
                                    <input type='file' onChange={handleChange} />
                                    <hr/>
                                    <FormButtonComponent
                                        submitButtonTitle='Upload'
                                        cancelButtonTitle='Cancel'
                                        handleReset={onCancel} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default UploadProfilePictureModal