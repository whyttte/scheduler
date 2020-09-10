
export function getAppointmentsForDay(state, day) {
  
  const theDay = state.days.find( d => d.name === day)
  if(!theDay){
    return []
  }
  const result = []
  for(const appointmentId of theDay.appointments){
    result.push(state.appointments[appointmentId])
  }
  // console.log(result)
  return result
  
};


export function getInterviewersForDay(state, day) {
  const theDay = state.days.find( d => d.name === day)
  if(!theDay){
    return []
  }
  const result = []
  for(const interviewerId of theDay.interviewers){
    result.push(state.interviewers[interviewerId])
  }
  return result
  
};


export function getInterview(state, interview) {
  if(!interview){
    return null
  }
  // console.log(state.interviewers)
  const interviewer = state.interviewers[interview.interviewer]
  // console.log(interviewer)
  return {...interview, interviewer}
};



export function getDays(state) {
  // go thorugh all the days
  //for each day get all appointment ids
  //for each appointment id get appointments
  //for each day, count empty appointments
  let newDays = [];
  for (const day of state.days) {
    let count = 0;
    for (let appointmentId of day.appointments) {
      const appointment = state.appointments[appointmentId]
      let isAppointmentEmpty = appointment.interview === null
      if (isAppointmentEmpty) {
        count += 1;
      }
    }
    newDays.push({...day, spot: count})
  }
  return newDays;
}