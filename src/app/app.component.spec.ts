import { TestBed, async } from "@angular/core/testing"
import { MatDialog, MatDialogModule } from "@angular/material"
import { RouterTestingModule } from "@angular/router/testing"
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module"
import { EmployeeGridComponent } from "./employee-grid/employee-grid.component"

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule, MatDialogModule],
      declarations: [],
    }).compileComponents()
  }))

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'employee-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual("employee-app")
  })

  it("should render grid", () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector("app-employee-grid").textContent).toContain(
      "Employees"
    )
  })
})
