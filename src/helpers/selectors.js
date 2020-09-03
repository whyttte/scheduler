
export function getAppointmentsForDay(state, day) {
  console.log("......................................................................", state.days)

  const theDay = state.days.find( d => d.name === day)
  // [4,5,6]
  if(!theDay){
    return []
  }
  const result = []
  for(const appointmentId of theDay.appointments){
    result.push(state.appointments[appointmentId])
  }
  console.log(result)
  return result
  // for (let eachStateDay of state.days) {
  //   if (eachStateDay.name === day) {
  //     for (let id in state.appointments) {
  //       if (id === state.appointment.id) {
  //           appointmentsArray.push(eachStateAppointment.id)
  //       }
  //     }
  //   }
  // }
  // return appointmentsArray;
};