import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { of } from "rxjs/internal/observable/of"

@Injectable()
export class EmployeeService {
  url = "http://localhost:3000"
  constructor(public http: HttpClient) {}

  getAllEmployees() {
    let employees = Object.keys(localStorage)
      .map((key) => {
        console.log("key", key)
        console.log("localStorage.getItem(key)", localStorage.getItem(key))
        return JSON.parse(localStorage.getItem(key))
      })
      .filter((item) => item)
    return of(employees)
  }

  createEmployee(employee) {
    if (!employee.ID) {
      alert("An ID must be specified")
      return
    }
    localStorage.setItem(employee.ID, JSON.stringify(employee))
    return of(employee)
  }

  deleteEmployee(id) {
    localStorage.removeItem(id)
    return of({})
  }

  updateEmployee(id, employee) {
    localStorage.setItem(id, JSON.stringify(employee))
    return of(employee)
  }

  getEmployee(id) {
    return of(JSON.parse(localStorage.getItem(id)))
  }
}
