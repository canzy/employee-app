import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { EmployeeGridComponent } from "./employee-grid.component"

describe("EmployeeGridComponent", () => {
  let component: EmployeeGridComponent
  let fixture: ComponentFixture<EmployeeGridComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeGridComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGridComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("Default Employee Details Should be Empty", () => {
    let employee = component.initEmployee()
    console.log("employee.firstName", employee.firstName)
    expect(employee.firstName).toBe("")
    expect(employee.lastName).toBe("")
    expect(employee.contactNo).toBe(undefined)
  })

  it("ID creation should be 6 characters long, 2 letters and 4 numbers", () => {
    let id = component.createId()
    expect(id.length).toBe(6)
    expect(typeof id).toBe("string")

    // Turn the last 4 characters into an int to test if they are numerical
    expect(parseInt(id.substring(2, 5))).not.toBeNaN()
  })

  it("employee creation passes", async () => {
    let employee = await component.employeeService
      .createEmployee({
        ID: component.createId(),
        firstName: "Shona",
        lastName: "Meyer",
        contactNo: "0314673252",
        email: "shona@gmail.com",
        birthDate: new Date(),
        address: {
          streetAddress: "",
          city: "",
          postalCode: "",
          country: "",
        },
        skills: [
          {
            skill: "Journalist",
            years: 20,
            seniority: "Senior",
          },
        ],
      })
      .toPromise()

    expect(employee.firstName).toBe("Shona")
    expect(employee.lastName).toBe("Meyer")
  })

  it("Fetching employees must return an array of more than 0", async () => {
    let employees = await component.employeeService
      .getAllEmployees()
      .toPromise()

    expect(employees.length).toBeGreaterThan(0)
  })
})
