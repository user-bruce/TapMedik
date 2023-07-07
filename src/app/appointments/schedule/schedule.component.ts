import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Appointment, AppointmentStatus } from 'src/app/shared/models/appointment';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { getRequestedAppointments } from 'src/app/shared/utils/appointments.utils';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {

  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;

  allAppointments!: Appointment[];
  upcomingAppointments!: Appointment[];
  cancelledAppointments!: Appointment[];
  doneAppointments!: Appointment[];
  overdueAppointments!: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.initDateTime();
    this.getAllAppointments();

    console.log(this.upcomingAppointments);
    console.log(this.cancelledAppointments);
    console.log(this.overdueAppointments);
    console.log(this.doneAppointments)
  }

    onDrop(event: CdkDragDrop<Appointment[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        console.log(event.container.data)
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }



  getAllAppointments(): void {
    this.allAppointments = this.appointmentService.getRandomAppointments();
    console.log(this.allAppointments)
    this.upcomingAppointments = getRequestedAppointments(this.allAppointments, AppointmentStatus.UPCOMING);
    this.doneAppointments = getRequestedAppointments(this.allAppointments, AppointmentStatus.DONE);
    this.cancelledAppointments = getRequestedAppointments(this.allAppointments, AppointmentStatus.CANCELLED);
    this.overdueAppointments = getRequestedAppointments(this.allAppointments, AppointmentStatus.OVERDUE);
  }

  initDateTime(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
