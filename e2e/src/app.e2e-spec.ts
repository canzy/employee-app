import { AppPage } from "./app.po"
import { browser, logging } from "protractor"
import { TestBed, async } from "@angular/core/testing"
import { ApplicationModule } from "@angular/core"

describe("workspace-project App", () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
    TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents()
  })

  it("should display welcome message", () => {
    expect(page.getTitleText()).toEqual("employee-app app is running!")
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    )
  })
})
