export class JobProfileDto {
    constructor(
        joinningDate, 
        basicSalary, 
        currency, 
        conveyanceAllowance, 
        medicalReimbursement, 
        designationDto,
        houseRent) {
            this.joiningDate = joinningDate
            this.basicSalary = basicSalary
            this.currency = currency
            this.conveyanceAllowance = conveyanceAllowance
            this.houseRent = houseRent
            this.medicalReimbursement = medicalReimbursement
            this.designationDto = designationDto
    }
}