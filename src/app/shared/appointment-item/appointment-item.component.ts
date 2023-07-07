import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {

  //Appointment information passed from the container
  @Input()
  appointment!: Appointment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.appointment);
  }

}
