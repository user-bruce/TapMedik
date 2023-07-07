import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

 foods: any[]= [
    {
      value: 1,
      viewValue: "Patient Stats"
    },
    {
      value: 2,
      viewValue: "Medication Stats"
    },
    {
      value: 3,
      viewValue: "Disease Stats"
    }
  ]

  ngOnInit(): void {
  }

}
