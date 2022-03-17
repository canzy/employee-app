export interface EmployeeData {
  firstName: string
  lastName: string
  contactNo: string
  email: string
  birthDate: Date
  address: {
    streetAddress: string
    city: string
    postalCode: string
    country: string
  }
  skills: {
    skill: string
    years: number
    seniority: string
  }[]
}
