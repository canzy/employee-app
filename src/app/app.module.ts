import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { EmployeeGridComponent } from "./employee-grid/employee-grid.component"
import { NoopAnimationsModule } from "@angular/platform-browser/animations"
import { MatButtonModule, MatIconModule } from "@angular/material"

@NgModule({
  declarations: [AppComponent, EmployeeGridComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
