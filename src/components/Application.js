import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList"
import axios from "axios"
import "components/Appointment"
import Appointment from "components/Appointment";
import {getAppointmentsForDay} from "../helpers/selectors"

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },

//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Cohen",
//       interviewer: {
//         id: 2,
//         name: "Tori Malcolm",
//         avatar: "https://i.imgur.com/Nmx0Qxo.png",
//       }
//     }
//   },

//   {
//     id: 5,
//     time: "4pm",
//     interview: {
//       student: "Maria Boucher",
//       interviewer: {
//         id: 5,
//         name: "Sven Jones",
//         avatar: "https://i.imgur.com/twYrpay.jpg",
//       }
//     }
//   }

// ];


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

    Promise.all([first, second])
      .then((arrOfValues) => {
        // const [daysData, appointmentsData] = arrOfValues;
        // console.log(appointmentsData);
        // console.log(daysData);
        // setDay(daysData.data);
        // setAppointments(appointmentsData.data);
        setState(init => ({...init, days: arrOfValues[0].data, appointments: arrOfValues[1].data}))
      })


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  }, [])

  const schedule = getAppointmentsForDay(state, state.day).map(appointment => {
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


