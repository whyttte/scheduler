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

  const getDays =function(state, step) {
    
    const newDays = state.days.map((day) => {
      if (day.name === state.day) {
        return {...day, spots: day.spots + step}
      }
      return day
    });
    return newDays
  }

  const bookInterview = function(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // If the current interview for the state is null, then it must be a create otherwise it's an edit
    const step = state.appointments[id].interview === null ? -1 : 0;
    const days = getDays(state, step)
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, {interview})
      .then(() => setState({...state, appointments, days}))
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
    const days = getDays(state, 1)    
    return axios
      .delete(`api/appointments/${id}`)
      .then(() => setState({...state, appointments, days}));
  }; 

  
  useEffect(() => {
    const first = axios.get(`/api/days`);
    const second = axios.get(`/api/appointments`);
    const third = axios.get(`/api/interviewers`);

    Promise.all([first, second, third])
      .then((arrOfValues) => {
      setState(init => ({...init, days: arrOfValues[0].data, appointments: arrOfValues[1].data, interviewers: arrOfValues[2].data}))
      })


  }, [])


  return {state, setDay, bookInterview, cancelInterview};
  
}