import React, { useState } from 'react'
import FormButtonComponent from '../form_components/FormButtonComponent'
import { convertToBase64 } from '../../utils/FileUtils'

const UploadPictureForm = ({ onCancel, handleSubmit, handleChange }) => {
    const [displayFile, setDisplayFile] = useState(null)
    const [submittable, setSubmittable] = useState(false)

    const handleImageConversion = async (e) => {
        try {
            const base64Data = await convertToBase64(e.target.files[0])
            setDisplayFile(base64Data)
            setSubmittable(true)
        } catch (error) {
            console.log(error)
            setSubmittable(false)
        }
    }

    return (
        <form method='post'
            onSubmit={handleSubmit}>
            <div className='vertical-center'>
                {displayFile
                    && <img className='mb-2 w-52 h-52'
                        src={`data:image/jpeg;base64,${displayFile}`} />}

                {!displayFile && <FaUser className='mb-2 w-40 h-40' />}

                <input
                    type='file'
                    style={{ marginLeft: '10px', marginRight: '10px' }}
                    onChange={(e) => {
                        handleImageConversion(e)
                        handleChange(e)
                    }} />

                <FormButtonComponent
                    submitButtonTitle='Upload'
                    cancelButtonTitle='Cancel'
                    handleReset={onCancel}
                    isSubmittable={submittable} />
            </div>
        </form>
    )
}

export default UploadPictureForm