import React from 'react'

const FormButtonComponent = ({ 
    handleReset, 
    submitButtonTitle = 'Submit', 
    cancelButtonTitle = 'Reset' }) => {
    return (
        <div className="field grouped">
            <div className="control">
                <button
                    type="submit"
                    className="button green">
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