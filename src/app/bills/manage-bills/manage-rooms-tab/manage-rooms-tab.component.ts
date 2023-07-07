import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-rooms-tab',
  templateUrl: './manage-rooms-tab.component.html',
  styleUrls: ['./manage-rooms-tab.component.css']
})
export class ManageRoomsTabComponent implements OnInit {

  constructor() { }

  roomCharges: any = [
    {
      dateCreated: new Date("2022-01-01"),
      roomType: "Single",
      status: "Occupied",
      charge: 100,
      utilityCharge: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      dateCreated: new Date("2022-02-15"),
      roomType: "Double",
      status: "Vacant",
      charge: 120,
      utilityCharge: 30,
      description: "Nulla facilisi. Aenean in ligula eu libero egestas vulputate.",
    },
    {
      dateCreated: new Date("2022-03-10"),
      roomType: "Suite",
      status: "Occupied",
      charge: 200,
      utilityCharge: 40,
      description: "Sed eget lacus id nisl malesuada rhoncus in vel turpis.",
    },
  ]

  roomTypes: string[] = ['NORMAL ADMISSION ROOM','LABORATORY','ICU']

  displayedColumns: string[] = ['dateCreated', 'roomType', 'charge', 'utilityCharge','description','status', 'actions']

  ngOnInit(): void {
  }

}
