import React from 'react'

const FormButtonComponent = () => {
    return (
        <div className="field grouped">
            <div className="control">
                <button
                    type="submit"
                    className="button green">
                    Submit
                </button>
            </div>
            <div className="control">
                <button
                    type="reset"
                    className="button red">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default FormButtonComponent