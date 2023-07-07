import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-home-graphs',

  templateUrl: './home-graphs.component.html',
  styleUrls: ['./home-graphs.component.css']
})
export class HomeGraphsComponent implements OnInit {

  dataSource: any[] = [
    {
      name: "Kraig Dube",
      gender: "Male",
      weight: "76",
      disease: "HIV",
      date: "04/02/2023",
      status: "active"
    }, 

    {
      name: "Kraig Dube",
      gender: "Male",
      weight: "76",
      disease: "HIV",
      date: "04/02/2023",
      status: "active"
    },
    {
      name: "Paul Shawms",
      gender: "Male",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },];
  displayedColumns: string[] = ['name', 'gender', 'weight', 'disease', 'date', 'status']

  // DATA FOR PATIENT TRENDS
  patientStatsTitle = '';
  patientStatsGraphType = ChartType.Line;
  patientStatsData = [
    ["Jan", 7.0, -0.2, -0.9, 3.9, 8.0],
    ["Feb", 6.9, 0.8, 0.6, 4.2, 6.8],
    ["Mar", 9.5, 5.7, 3.5, 5.7, 7.5],
    ["Apr", 14.5, 11.3, 8.4, 8.5, 9.4],
    ["May", 18.2, 17.0, 13.5, 11.9, 12.4],
    ["Jun", 21.5, 22.0, 17.0, 15.2, 12.4],
    ["Jul", 25.2, 24.8, 18.6, 17.0, 10.4],
    ["Aug", 26.5, 24.1, 17.9, 16.6, 12.3],
    ["Sep", 23.3, 20.1, 14.3, 14.2, 10.3],
    ["Oct", 18.3, 14.1, 9.0, 10.3, 10.3],
    ["Nov", 13.9, 8.6, 3.9, 6.6, 13.4],
    ["Dec", 9.6, 2.5, 1.0, 4.8, 12.4]
  ];
  patientStatsColumnNames = ["Month", "Patient Registration", "Appointments", "Home Visits", "Referrals", "Critical Patients"];
  patientStatsOptions = {
    hAxis: {
      title: 'Month'
    },
    vAxis: {
      title: 'Temperature'
    },
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  width = 450;
  height = 290;


  // DATA FOR DIAGNOSTICS STATS AND THEIR VALUES
  diagnosticsTitle = 'Visited Patients Agewise';
  diagnosticsGraphType = ChartType.PieChart;
  diagnosticsData = [
    ['0 - 17',20],
    ['17 - 30', 40],
    ['30 - 50', 18.5],
    ['50 - 75', 11.5],
    ['75+', 10],
  ];
  diagnosticsColumnNames = ['Browser', 'Percentage'];
  diagnosticsOptions = {
    slices: {
      3: {offset: 0.1},
      0: {offset: 0.1},
      2: {offset: 0.1}
   },
  };

  //DATA FOR THE TABLE
  initData() {

  }

  ngOnInit(): void {
    this.initData();
  }

  constructor() {

  }

}
