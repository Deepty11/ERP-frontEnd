export default class ContactInfoDto {
    constructor(
        mobileNumber, 
        email, 
        presentAddress, 
        permanentAddress) {
            this.mobileNumber = mobileNumber
            this.email = email
            this.presentAddress = presentAddress
            this.permanentAddress = permanentAddress
    }
}