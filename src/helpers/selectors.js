
export function getAppointmentsForDay(state, day) {
  let appointmentsArray = [];
  for (let eachStateDay of state.days) {
    if (eachStateDay.name === day) {
      for (let eachStateAppointment of state.appointments) {
        if (eachStateAppointment.id === state.appointment.id) {
            appointmentsArray.push(eachStateAppointment.id) 
        }
      }
    }
  }
  return appointmentsArray;
};