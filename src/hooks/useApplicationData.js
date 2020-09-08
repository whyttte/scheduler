import { useState, useEffect } from 'react'
import axios from "axios"

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  const setDay = day => setState({...state, day});

  const bookInterview = function(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx", interview)
    return axios

      .put(`http://localhost:8001/api/appointments/${id}`, {interview})
      .then(() => setState({...state, appointments}))
  };

  const cancelInterview = function(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios
      .delete(`api/appointments/${id}`)
      .then(() => setState({...state, appointments}));
  };

  useEffect(() => {

    const first = axios.get(`/api/days`);
    const second = axios.get(`/api/appointments`);
    const third = axios.get(`/api/interviewers`);

    Promise.all([first, second, third])
      .then((arrOfValues) => {
        console.log(".......................................................", arrOfValues)
        setState(init => ({...init, days: arrOfValues[0].data, appointments: arrOfValues[1].data, interviewers: arrOfValues[2].data}))
      })


  }, [])


  return {state, setDay, bookInterview, cancelInterview};
  
}