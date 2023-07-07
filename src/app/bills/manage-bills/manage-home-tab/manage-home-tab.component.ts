import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-home-tab',
  templateUrl: './manage-home-tab.component.html',
  styleUrls: ['./manage-home-tab.component.css']
})
export class ManageHomeTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [
    'dateCreated','chargedItem','description','status', 'charge','utilityCharge', 'actions'
  ]

  allCharges: any[] = [
    {
      dateCreated: '2023-07-01',
      chargedItem: 'Inpatient',
      description: 'Hospital Stay',
      status: 'Paid',
      charge: '$5000',
      utilityCharge: '$200'
    },
    {
      dateCreated: '2023-06-15',
      chargedItem: 'Outpatient',
      description: 'Doctor Consultation',
      status: 'Pending',
      charge: '$150',
      utilityCharge: '$20'
    },
    {
      dateCreated: '2023-06-15',
      chargedItem: 'Outpatient',
      description: 'Doctor Consultation',
      status: 'Pending',
      charge: '$150',
      utilityCharge: '$20'
    },
    {
      dateCreated: '2023-06-15',
      chargedItem: 'Outpatient',
      description: 'Doctor Consultation',
      status: 'Pending',
      charge: '$150',
      utilityCharge: '$20'
    },
  ];

}
