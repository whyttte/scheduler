import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";



export default function InterviewerListItem(props) {

  const interviewerListItemClass = classNames ("interviewers__item", 
  {"interviewers__item--selected": props.selected,
   "interviewers__item-image": props.image}
  )
  return (
    <li className={interviewerListItemClass}
      onClick={props.interviewer}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

// export default function DayListItem(props) {
//   const formatSpots = function() {
//     let textMessage = ""
//     if (props.spots > 1) {
//       textMessage = `${props.spots} spots remaining`
//     } else if (props.spots === 1) {
//       textMessage = "1 spot remaining"
//     } else {
//       textMessage = "no spots remaining"
//     }
//     return textMessage;
//   }

//   const dayListItemClass = classNames ("day-list__item", 
//   {"day-list__item--selected": props.selected,
//    "day-list__item--full": props.full}
//   )
//   return (
//     <li 
//       className={dayListItemClass}
//       onClick={() => props.setDay(props.name)}
//     >
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">{formatSpots()}</h3>
//     </li>
//   );
// }