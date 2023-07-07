import { OptimaScheduleModule } from 'optima-schedule';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { LogoContainerComponent } from './shared/logo-container/logo-container.component';
import { MainComponentComponent } from './shared/main-component/main-component.component';
import { DashCardComponent } from './shared/dash-card/dash-card.component';
import { HomeGraphsComponent } from './shared/home-graphs/home-graphs.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DashboardContainerComponent } from './shared/dashboard-container/dashboard-container.component';
import { SearchComponent } from './patients/search/search.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RegisterComponent } from './patients/register/register.component';
import { SearchAppointmentComponent } from './appointments/search/search-appointment.component';
import { ScheduleComponent } from './appointments/schedule/schedule.component';
import { PatientReportsComponent } from './patient-reports/patient-reports.component';
import { RoomReportsComponent } from './room-reports/room-reports.component';
import { AppointmentReportsComponent } from './appointment-reports/appointment-reports.component';
import { ReferralReportsComponent } from './referral-reports/referral-reports.component';
import { BillReportsComponent } from './bill-reports/bill-reports.component';
import { BillsComponent } from './bills/bills.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReferalsComponent } from './referals/referals.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SignupComponent } from './signup/signup.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MainRoutingModule } from './shared/main-component/main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersComponent } from './users/users.component';
import { SearchUserComponent } from './users/search-user/search-user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { AppointmentItemComponent } from './shared/appointment-item/appointment-item.component';
import { SearchBillsComponent } from './bills/search-bills/search-bills.component';
import { ManageBillsComponent } from './bills/manage-bills/manage-bills.component';
import { SearchRoomsComponent } from './rooms/search-rooms/search-rooms.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearchReferalComponent } from './referals/search-referal/search-referal.component';
import { AddReferalComponent } from './referals/add-referal/add-referal.component';
import {MatSliderModule} from '@angular/material/slider';
import { ManageHomeTabComponent } from './bills/manage-bills/manage-home-tab/manage-home-tab.component';
import { ManageAppointmentsTabComponent } from './bills/manage-bills/manage-appointments-tab/manage-appointments-tab.component';
import { ManageReferalsTabComponent } from './bills/manage-bills/manage-referals-tab/manage-referals-tab.component';
import { ManageRoomsTabComponent } from './bills/manage-bills/manage-rooms-tab/manage-rooms-tab.component';
import { ManageAdmissionsTabComponent } from './bills/manage-bills/manage-admissions-tab/manage-admissions-tab.component';
import { LimitStringPipe } from './shared/limit-string.pipe';
import { PatientReportItemComponent } from './referals/patient-report-item/patient-report-item.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LogoContainerComponent,
    MainComponentComponent,
    DashCardComponent,
    HomeGraphsComponent,
    DashboardContainerComponent,
    SearchComponent,
    RegisterComponent,
    SearchAppointmentComponent,
    ScheduleComponent,
    PatientReportsComponent,
    RoomReportsComponent,
    AppointmentReportsComponent,
    ReferralReportsComponent,
    BillReportsComponent,
    BillsComponent,
    RoomsComponent,
    ReferalsComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    SearchUserComponent,
    CreateUserComponent,
    AppointmentItemComponent,
    SearchBillsComponent,
    ManageBillsComponent,
    SearchRoomsComponent,
    AddRoomComponent,
    SearchReferalComponent,
    AddReferalComponent,
    ManageHomeTabComponent,
    ManageAppointmentsTabComponent,
    ManageReferalsTabComponent,
    ManageRoomsTabComponent,
    ManageAdmissionsTabComponent,
    LimitStringPipe,
    PatientReportItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    MatChipsModule,
    MainRoutingModule,
    OptimaScheduleModule,
    MatSliderModule,
    MatTabsModule,
    MatListModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FullCalendarModule,
    NgApexchartsModule,
    MatDividerModule,
    OptimaScheduleModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    FormsModule,
    GoogleChartsModule,
    MatChipsModule,
    MatTabsModule,
    MatTooltipModule,
    MatMenuModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    FontAwesomeModule,
  ],
  exports: [
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
