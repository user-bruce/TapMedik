import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './shared/dashboard-container/dashboard-container.component';
import { SearchComponent } from './patients/search/search.component';
import { RegisterComponent } from './patients/register/register.component';
import { SearchAppointmentComponent } from './appointments/search/search-appointment.component'
import { ScheduleComponent } from './appointments/schedule/schedule.component';
import { PatientReportsComponent } from './patient-reports/patient-reports.component';
import { AppointmentReportsComponent } from './appointment-reports/appointment-reports.component';
import { RoomReportsComponent } from './room-reports/room-reports.component';
import { BillReportsComponent } from './bill-reports/bill-reports.component';
import { ReferralReportsComponent } from './referral-reports/referral-reports.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { MainRoutingModule } from './shared/main-component/main-routing.module';
import { path } from 'd3';
import { SearchUserComponent } from './users/search-user/search-user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { SearchBillsComponent } from './bills/search-bills/search-bills.component';
import { ManageBillsComponent } from './bills/manage-bills/manage-bills.component';
import { SearchRoomsComponent } from './rooms/search-rooms/search-rooms.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { AddReferalComponent } from './referals/add-referal/add-referal.component';
import { SearchReferalComponent } from './referals/search-referal/search-referal.component';


const dashboardRoot: string = 'dashboard'
const signupRoot: string = 'signup'
const patientsRoot: string = 'patients';
const billsRoot: string = 'bills'
const appointmentsRoot: string = 'appointments';
const patientReportsRoot: string = 'patient-reports';
const appointmentReportsRoot: string = 'appointment-reports';
const roomReportsRoot: string = 'room-reports';
const billReportsRoot: string = 'bill-reports';
const referralReportsRoot: string = 'referral-reports';
const usersRoot: string = 'users';
const roomsRoot: string = 'rooms';
const referalsRoot: string = 'referals';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: `${dashboardRoot}`,
    component: SidenavComponent,
    children: [
      {
        path: '',
        component: DashboardContainerComponent
      },

      {
        path: `${patientsRoot}/search`,
        component: SearchComponent,
      },
      {
        path: `${patientsRoot}/register`,
        component: RegisterComponent,
      },

      {
        path: `${appointmentsRoot}/search`,
        component: SearchAppointmentComponent
      },
      {
        path: `${appointmentsRoot}/schedule`,
        component: ScheduleComponent
      },

      {
        path: `${patientReportsRoot}`,
        component: PatientReportsComponent
      },
      {
        path: `${appointmentReportsRoot}`,
        component: AppointmentReportsComponent
      },
      {
        path: `${roomReportsRoot}`,
        component: RoomReportsComponent
      },
      {
        path: `${billReportsRoot}`,
        component: BillReportsComponent
      },
      {
        path: `${usersRoot}/search`,
        component: SearchUserComponent
      },
      {
        path: `${usersRoot}/create`,
        component:  CreateUserComponent
      },
      {
        path: `${billsRoot}/search`,
        component:  SearchBillsComponent
      },
      {
        path: `${billsRoot}/manage`,
        component:  ManageBillsComponent
      },
      {
        path: `${roomsRoot}/search`,
        component:  SearchRoomsComponent
      },
      {
        path: `${roomsRoot}/add`,
        component:  AddRoomComponent
      },
      {
        path: `${referalsRoot}/add`,
        component:  AddReferalComponent
      },
      {
        path: `${referalsRoot}/search`,
        component:  SearchReferalComponent
      },

    ]
  },
  {
    path: `${signupRoot}`,
    component: SignupComponent,
  },

  {
    path: `${billsRoot}/search`,
    component: SearchComponent,
  },
  {
    path: `${patientReportsRoot}`,
    component: PatientReportsComponent
  },
  {
    path: `${appointmentReportsRoot}`,
    component: AppointmentReportsComponent
  },
  {
    path: `${roomReportsRoot}`,
    component: RoomReportsComponent
  },
  {
    path: `${billReportsRoot}`,
    component: BillReportsComponent
  },
  {
    path: `${referralReportsRoot}`,
    component: ReferralReportsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
