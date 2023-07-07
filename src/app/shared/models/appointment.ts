export interface Appointment{
  name: String;
  date: String;
  status: String;
}

export enum AppointmentStatus{
  UPCOMING = 'UPCOMING',
  CANCELLED = 'CANCELLED',
  OVERDUE = 'OVERDUE',
  DONE = 'DONE'
}
