import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-report-item',
  templateUrl: './patient-report-item.component.html',
  styleUrls: ['./patient-report-item.component.css']
})
export class PatientReportItemComponent implements OnInit {

  icon = 'attach_file';
  isClicked=false;

  constructor() { }

  ngOnInit(): void {
  }

  changeIcon() {
    if (this.icon === 'attach_file') {
      this.icon = 'clear';
    } else {
      this.icon = 'attach_file';
    }
    this.isClicked= !this.isClicked;
  }

}
