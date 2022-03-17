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
} from "@angular/material"
import { FormsModule } from "@angular/forms"

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
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeDialog],
})
export class AppModule {}
