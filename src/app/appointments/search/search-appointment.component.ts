import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search-appointment.component.html',
  styleUrls: ['./search-appointment.component.css']
})
export class SearchAppointmentComponent implements OnInit {

  constructor() { }

  dataSource: any[] = [
    {
      appointmentDate: "23/04/2023",
      description: "This was an appointment with my new client",
      status: "DONE",
      patient: "Garry Moore"
    },
    {
      appointmentDate: "23/03/2021",
      description: "Met with the client to assess swelling stomach",
      status: "DONE",
      patient: "Garry Moore"
    },
    {
      appointmentDate: "23/07/2023",
      description: "To assess exetend of absces with cancer patient",
      status: "PENDING",
      patient: "Garry Moore"
    },
    ];

  displayedColumns: string[] = ["appointmentDate","patient","description","status", "actions"]

  ngOnInit(): void {
  }

}
