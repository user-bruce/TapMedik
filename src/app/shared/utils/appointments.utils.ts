import { Appointment, AppointmentStatus } from "../models/appointment";

export function getRequestedAppointments(appointments: Appointment[], appointmentStatus: String): Appointment[]{
  console.log("Within the ustils now!");
  console.log(appointments)
  const returnList: Appointment[] = []
  appointments.forEach(appointment =>{
    if(appointment.status === appointmentStatus){
      returnList.push(appointment);
    }
  })

  console.log('Return List')
  console.log(returnList)
  return returnList;
}


