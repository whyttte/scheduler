import React from "react";
// import classNames from "classnames";



export default function Empty(props) {
  // const headerClass = classNames("appointment",
  //  {"appointment__time": props.time})
  
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
}