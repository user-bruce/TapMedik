import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-appointments-tab',
  templateUrl: './manage-appointments-tab.component.html',
  styleUrls: ['./manage-appointments-tab.component.css']
})
export class ManageAppointmentsTabComponent implements OnInit {

  constructor() { }

  appointmentCharges = [
    {
      dateCreated: "2023-07-01",
      description: "Lorem ipsum dolor sit amet",
      status: "Active",
      charge: 100,
      utilityFees: 20
    },
    {
      dateCreated: "2023-06-28",
      description: "Consectetur adipiscing elit",
      status: "Inactive",
      charge: 80,
      utilityFees: 15
    },
    {
      dateCreated: "2023-06-25",
      description: "Sed do eiusmod tempor incididunt",
      status: "Active",
      charge: 120,
      utilityFees: 25
    },
    {
      dateCreated: "2023-06-20",
      description: "Ut enim ad minim veniam",
      status: "Inactive",
      charge: 90,
      utilityFees: 18
    },
    {
      dateCreated: "2023-06-15",
      description: "Duis aute irure dolor in reprehenderit",
      status: "Active",
      charge: 110,
      utilityFees: 22
    },
    {
      dateCreated: "2023-06-12",
      description: "Excepteur sint occaecat cupidatat non proident",
      status: "Inactive",
      charge: 95,
      utilityFees: 17
    },
    {
      dateCreated: "2023-06-10",
      description: "Sunt in culpa qui officia deserunt mollit anim",
      status: "Active",
      charge: 130,
      utilityFees: 28
    },
    {
      dateCreated: "2023-06-05",
      description: "Lorem ipsum dolor sit amet",
      status: "Inactive",
      charge: 85,
      utilityFees: 16
    },
    {
      dateCreated: "2023-06-02",
      description: "Consectetur adipiscing elit",
      status: "Active",
      charge: 105,
      utilityFees: 21
    },
    {
      dateCreated: "2023-05-30",
      description: "Sed do eiusmod tempor incididunt",
      status: "Inactive",
      charge: 95,
      utilityFees: 18
    }
  ]

  displayedColumns: string[] = ['dateCreated','description','status','charge','utilityFees', 'actions']

  ngOnInit(): void {
  }

}
