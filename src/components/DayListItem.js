import React from "react";

import "components/DayListItem.scss";

import classNames from "classnames";



export default function DayListItem(props) {
  const formatSpots = function() {
    let textMessage = ""
    if (props.spots > 1) {
      textMessage = `${props.spots} spots remaining`
    } else if (props.spots === 1) {
      textMessage = "1 spot remaining"
    } else {
      textMessage = "no spot remaining"
    }
    return textMessage;
  }

  const dayListItemClass = classNames ("day-list__item", 
  {"day-list__item--selected": props.selected,
   "day-list__item--full": props.full}
  )
  return (
    <li 
      className={dayListItemClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}