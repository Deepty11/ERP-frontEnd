export default class AddressDto {
    constructor(
        houseNo, 
        road, 
        thana, 
        city, 
        district, 
        postalCode) {
            this.houseNo = houseNo
            this.road = road
            this.thana = thana
            this.district = district
            this.postalCode = postalCode
            this.city = city
    }
}