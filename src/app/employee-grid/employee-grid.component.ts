import { Component, Inject, OnInit } from "@angular/core"
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog"
import { EmployeeData } from "./employee.model"
import * as _ from "lodash"

@Component({
  selector: "app-employee-grid",
  templateUrl: "./employee-grid.component.html",
  styleUrls: ["./employee-grid.component.css"],
})
export class EmployeeGridComponent implements OnInit {
  employees = []
  employeeData
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  newEmployeePopup(): void {
    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: "250px",
      data: this.initEmployee(),
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result)
      this.employeeData = result
    })
  }

  initEmployee(): EmployeeData {
    return {
      firstName: ",",
      lastName: ",",
      contactNo: ",",
      email: ",",
      birthDate: undefined,
      address: {
        streetAddress: ",",
        city: ",",
        postalCode: ",",
        country: ",",
      },
      skills: {
        skill: ",",
        years: undefined,
        seniority: ",",
      },
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
