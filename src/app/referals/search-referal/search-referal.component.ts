import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-referal',
  templateUrl: './search-referal.component.html',
  styleUrls: ['./search-referal.component.css']
})
export class SearchReferalComponent implements OnInit {

  dataSource: any[] = [
    {
      name: "Paul Shawms",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },

    {
      name: "Kraig Dube",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "HIV",
      date: "04/02/2023",
      status: "active"
    },{
      name: "Paul Shawms",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },
    {
      name: "Emily Moore",
      gender: "Female",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "56",
      disease: "TB",
      date: "25/01/2023",
      status: "inactive"
    },
    {
      name: "Kraig Dube",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "HIV",
      date: "04/02/2023",
      status: "active"
    },
    {
      name: "Paul Shawms",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },];

  displayedColumns: string[] = ['name', 'gender','dob','id','last_checkup', 'weight', 'disease', 'date', 'status', 'actions']


  constructor() { }

  ngOnInit(): void {
  }

}
