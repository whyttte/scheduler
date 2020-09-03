import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList"
import axios from "axios"



export default function Application(props) {
  const [dayDefault, setDay] = useState("Monday")
  const [days, setDays] = useState([])

  useEffect(() => {
    axios.get(`/api/days`)
    .then((response) => {
      console.log(response);
    });
  }, [])

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
            days={days}
            day={dayDefault}
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
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}


