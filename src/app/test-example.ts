import { DataSource } from "@angular/cdk/collections";
import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
  emp: number;
  designation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Amit Kumar", emp: 50001, designation: "Developer" },
  {
    position: 2,
    name: "Rohan Kumar",
    emp: 50002,
    designation: "Sr. developer"
  },
  { position: 3, name: "Rishi Kumar", emp: 50003, designation: "Developer" },
  { position: 4, name: "Chandan Kumar", emp: 50004, designation: "Developer" },
  { position: 5, name: "Vikash Kumar", emp: 50005, designation: "Developer" }
];

@Component({
  selector: "test-example",
  styleUrls: ["test-example.css"],
  templateUrl: "test-example.html"
})
export class TestExample {
  displayedColumns: string[] = ["position", "name", "emp", "designation"];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
