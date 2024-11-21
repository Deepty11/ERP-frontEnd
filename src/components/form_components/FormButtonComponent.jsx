import React from 'react'

const FormButtonComponent = ({
    handleReset,
    submitButtonTitle = 'Submit',
    cancelButtonTitle = 'Reset',
    isSubmittable = true }) => {
    return (
        <div className="field grouped">
            <div className="control">
                <button
                    type="submit"
                    disabled={!isSubmittable}
                    className={`button ${isSubmittable ? 'bg-green-500':'bg-gray-400'} text-white`}>
                    {submitButtonTitle}
                </button>
            </div>
            <div className="control">
                <button
                    type="reset"
                    className="button red"
                    onClick={handleReset}>
                    {cancelButtonTitle}
                </button>
            </div>
        </div>
    )
}

export default FormButtonComponent