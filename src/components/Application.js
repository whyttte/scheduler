import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList"
import axios from "axios"
import "components/Appointment"
import Appointment from "components/Appointment";
import {getAppointmentsForDay, getInterview} from "../helpers/selectors"




export default function Application(props) {

  // const [dayDefault, setDay] = useState("Monday")
  // const [days, setDays] = useState([])



  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  // const state = { day: "Monday", days: [] };
  const setDay = day => ({...setState, day})
  const setAppointments = appointments => ({...setState, appointments})



  useEffect(() => {
    // axios.get()
    // .then((res) => setState(res.data));

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const first = axios.get(`/api/days`);
    const second = axios.get(`/api/appointments`);
    const third = axios.get(`/api/interviewers`);

    Promise.all([first, second, third])
      .then((arrOfValues) => {
        setState(init => ({...init, days: arrOfValues[0].data, appointments: arrOfValues[1].data, interviewers: arrOfValues[2].data}))
      })


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  }, [])
  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview} />
    )
  })
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


