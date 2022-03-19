import { Component, Inject, OnInit } from "@angular/core"
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog"
import { EmployeeData } from "./employee.model"
import * as _ from "lodash"
import { EmployeeService } from "../employee-service/employee.service"

@Component({
  selector: "app-employee-grid",
  templateUrl: "./employee-grid.component.html",
  styleUrls: ["./employee-grid.component.css"],
})
export class EmployeeGridComponent implements OnInit {
  employees = []
  originalData

  constructor(
    public dialog: MatDialog,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
      (result: any[]) => {
        this.employees = result
      },
      (err) => {
        console.error("Error fetching employees")
      }
    )
  }

  newEmployeePopup(): void {
    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: "30vw",
      height: "100vh",
      position: { left: "0px" },
      data: this.initEmployee(),
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employees.push(result)
        this.employeeService.createEmployee(result).subscribe(
          (result) => {
            console.log("result", result)
          },
          (err) => {
            console.error("Error creating employee")
          }
        )
      }

      console.log("this.employees", this.employees)
    })
  }

  editEmployeePopup(employeeDetails, index): void {
    // Save details to revert to if needed
    this.originalData = _.cloneDeep(employeeDetails)

    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: "30vw",
      height: "100vh",
      position: { left: "0px" },
      data: employeeDetails,
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employees[index] = result
      } else {
        this.employees[index] = this.originalData
      }
    })
  }

  deleteEmployee(deleteId, event) {
    event.stopPropagation()
    this.employeeService.deleteEmployee(deleteId).subscribe(
      (result) => {
        this.employees = this.employees.filter(({ ID }) => ID === deleteId)
      },
      (err) => {
        console.error("Error deleting employee")
      }
    )
  }

  createId() {
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var res = ""
    for (var i = 0; i < 2; i++) {
      var rnd = Math.floor(Math.random() * list.length)
      res = res + list.charAt(rnd)
    }
    res += Math.floor(1000 + Math.random() * 9000)
    return res
  }

  initEmployee(): EmployeeData {
    return {
      ID: this.createId(),
      firstName: "",
      lastName: "",
      contactNo: "",
      email: "",
      birthDate: undefined,
      address: {
        streetAddress: "",
        city: "",
        postalCode: "",
        country: "",
      },
      skills: [
        {
          skill: "",
          years: undefined,
          seniority: "",
        },
      ],
    }
  }
}

@Component({
  selector: "employee-dialog",
  templateUrl: "employee-dialog.html",
})
export class EmployeeDialog {
  constructor(
    public dialogRef: MatDialogRef<EmployeeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeData
  ) {}

  addNewSkill(employeeSkills) {
    employeeSkills.push({
      skill: "",
      years: undefined,
      seniority: "",
    })
  }
}
