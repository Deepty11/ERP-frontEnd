export class DesignationDto {
    constructor(title, description, salaryRange, employmentType, level) {
        this.title = title
        this.description = description
        this.salaryRange = salaryRange
        this.employmentType = employmentType
        this.level = level
    }
}

export class SalaryRange {
    constructor(min, max) {
        this.min = min
        this.max = max
    }
}