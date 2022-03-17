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
} from "@angular/material"
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [AppComponent, EmployeeGridComponent, EmployeeDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeDialog],
})
export class AppModule {}
