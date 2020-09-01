import React from "react";
// import classNames from "classnames";



export default function Header(props) {
  // const headerClass = classNames("appointment",
  //  {"appointment__time": props.time})
  
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
      {/* {headerClass} */}
    </header>
  );
}