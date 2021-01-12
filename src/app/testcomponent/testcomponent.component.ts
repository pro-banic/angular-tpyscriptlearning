import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testcomponent",
  templateUrl: "./testcomponent.component.html",
  styleUrls: ["./testcomponent.component.css"]
})
export class TestcomponentComponent implements OnInit {
  student: string = "Basti";

  colorvariable: string = "black";
  paddingvariable: string = "0px";

  constructor() {}
  ngOnInit() {
    //helloworld() Todo warum geht das nicht initial?
  }

  helloworld() {
    this.paddingvariable = "20px";
    console.log("Hello "+this.paddingvariable);
  }
}
