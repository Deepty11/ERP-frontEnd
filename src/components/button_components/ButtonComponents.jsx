import React from 'react'

const DeclineButton = ({ title }) => {
    return (
        <button
            type='button'
            className="focus:outline-none text-black bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-red-400">
            {title}
        </button>
    )
}

const ApproveButton = ({ title }) => {
    return <button
        type='button'
        className="focus:outline-none text-black bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-green-200 font-sans rounded-md text-md px-5 py-2 dark:focus:ring-green-400">
        {title}
    </button>
}

export {ApproveButton, DeclineButton}