
export function getAppointmentsForDay(state, day) {
  // console.log("......................................................................", state.days)

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



