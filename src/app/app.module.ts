import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import {
  EmployeeDialog,
  EmployeeGridComponent,
} from "./employee-grid/employee-grid.component"
import { NoopAnimationsModule } from "@angular/platform-browser/animations"
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatDatepickerModule,
  MatNativeDateModule,
} from "@angular/material"
import { FormsModule } from "@angular/forms"
import { EmployeeService } from "./employee-service/employee.service"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [AppComponent, EmployeeGridComponent, EmployeeDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
    EmployeeService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeDialog],
})
export class AppModule {}
