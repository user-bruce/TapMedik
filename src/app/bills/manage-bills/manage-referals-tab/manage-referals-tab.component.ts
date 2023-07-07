import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-referals-tab',
  templateUrl: './manage-referals-tab.component.html',
  styleUrls: ['./manage-referals-tab.component.css']
})
export class ManageReferalsTabComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [
    'dateCreated','status','charge','utilityCharge','description'
  ]

  referalCharges: any = [
    {
      dateCreated: new Date("2022-01-01"),
      status: "Active",
      charge: 100,
      utilityCharge: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      dateCreated: new Date("2022-02-15"),
      status: "Inactive",
      charge: 120,
      utilityCharge: 30,
      description: "Nulla facilisi. Aenean in ligula eu libero egestas vulputate.",
    },
    {
      dateCreated: new Date("2022-03-10"),
      status: "Active",
      charge: 200,
      utilityCharge: 40,
      description: "Sed eget lacus id nisl malesuada rhoncus in vel turpis.",
    },
  ]

  ngOnInit(): void {
  }

}
