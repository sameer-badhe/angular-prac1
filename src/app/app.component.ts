import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  date = new Date();
  jsonVal = {
    obj: {
      obj1: { name: "Sam" },
      obj2: { name: "Ram" }
    }
  };
}
