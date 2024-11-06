
const JobInfo = ({ jobProfileDto }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 ml-2 '>
            <div className='form-control'>
                <label className='label'>Employee Id</label>
                <label>{jobProfileDto?.employeeId ?? 'N/A'}</label>
            </div>

            <div className='form-control'>
                <label className='label'>Employee Type</label>
                <label>{jobProfileDto?.employmentType ?? 'N/A'}</label>
            </div>

            <div className='form-control'>
                <label className='label'>Level</label>
                <label>{jobProfileDto?.level ?? 'N/A'}</label>
            </div>
            <div className='form-control'>
                <label className='label'>Designation</label>
                <label>{jobProfileDto?.designationDto.title ?? 'N/A'}</label>
            </div>
            <div className='form-control'>
                <label className='label'>Joining Date</label>
                <label>{jobProfileDto?.joiningDate ?? 'N/A'}</label>
            </div>
            <div className='form-control'>
                <label className='label'>Basic Salary</label>
                <label><span>BDT </span>{jobProfileDto?.basicSalary ?? 'N/A'}</label>
            </div>

            <div className='form-control'>
                <label className='label'>Compensation</label>
                <label><span>BDT </span>{jobProfileDto?.compensation ?? 'N/A'}</label>
            </div>
        </div>
    )
}

export default JobInfo