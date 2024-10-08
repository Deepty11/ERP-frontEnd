export default class UserDto {
    constructor(
        id,
        username, 
        firstName, 
        lastName, 
        password, 
        birthDate, 
        gender, 
        role, 
        religion,
    contactInfoDto) {
        this.id = id
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.birthDate = this.birthDate
        this.gender = gender
        this.religion = religion
        this.role = role
        this.contactInfoDto = contactInfoDto
    }

    fullName = () => {
        return this.firstName + this.lastName
    }
}

export const DemoUsers = [
    new UserDto("1","rimi1", "Rimi", "Reza", "1234", "06-12-1998", "Female", "User", "Islam", null ),
    new UserDto("2","rimi12", "Rimi1", "Reza", "1234", "06-12-1998", "Female", "User", "Islam", null ),
    new UserDto("3","rimi13", "Rimi12", "Reza", "1234", "06-12-1998", "Female", "User", "Islam", null ),
    new UserDto("4","rimi14", "Rimi13", "Reza", "1234", "06-12-1998", "Female", "User", "Islam", null )
]
