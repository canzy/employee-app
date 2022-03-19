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
  employeeData

  constructor(
    public dialog: MatDialog,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
      (result: any[]) => {
        console.log("API result", result)
        this.employees = result
      },
      (err) => {
        console.error("Error fetching employees")
        console.log(err) // TODO: Remove
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
      console.log("The dialog was closed", result)
      // this.employeeData = result
      if (result) {
        this.employees.push(result)
        this.employeeService.createEmployee(result).subscribe((result) => {
          console.log("result", result)
        })
      }

      console.log("this.employees", this.employees)
    })
  }

  editEmployeePopup(employeeDetails, index): void {
    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: "30vw",
      height: "100vh",
      position: { left: "0px" },
      data: employeeDetails,
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The EDIT dialog was closed", result)
      // this.employeeData = result
      if (result) {
        this.employees[index] = result
      }
      console.log("this.employees", this.employees)
    })
  }

  deleteEmployee(id, event) {
    event.stopPropagation()
    this.employeeService.deleteEmployee(id).subscribe((result) => {
      console.log("result", result)
    })
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

  onNoClick(): void {
    this.dialogRef.close()
  }
}
