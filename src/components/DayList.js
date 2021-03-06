import React from "react";
import DayListItem from "components/DayListItem";
import "components/DayListItem.scss";


export default function DayList(props) {
  const dayListClass = props.days.map(day => 
    <DayListItem 
        key = {day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay}  
      />
  )
  return (
    <ul>
      {dayListClass}
    </ul>
  );
    
}