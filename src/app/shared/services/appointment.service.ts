import { Injectable } from '@angular/core';
import { Appointment, AppointmentStatus } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  //Dummy data for appointments
  firstNames: string[] = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Sofia", "Madison"];
  lastNames: string[] = ["Smith", "Johnson", "Brown", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Jackson"];
  statuses: string[] = ["UPCOMING", "DONE", "CANCELLED", "OVERDUE"];

  appointments!: Appointment[];

  constructor() {
    this.appointments = this.getRandomAppointments();
  }

  getRandomAppointments(): Appointment[] {
    const objects: Appointment[] = [];
    for (let i = 0; i < 15; i++) {
      const name: string = `${this.firstNames[Math.floor(Math.random() * this.firstNames.length)]} ${this.lastNames[Math.floor(Math.random() * this.lastNames.length)]}`;
      const status: string = this.statuses[Math.floor(Math.random() * this.statuses.length)];
      const day: number = Math.floor(Math.random() * 28) + 1;
      const month: number = Math.floor(Math.random() * 12) + 1;
      const year: number = Math.floor(Math.random() * 3) + 2022;
      const date: string = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
      const obj: Appointment = { name, status, date };
      objects.push(obj);
    }
    return objects;
  }
}
