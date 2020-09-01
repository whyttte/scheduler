import React from "react";

import InterviewerListItem from "components/InterviewerListItem"

import "components/InterviewerListItem.scss";

// import classNames from "classnames";



export default function InterviewerList(props) {
  const interviewerListClass = props.interviewers.map(interviewer => 
    <InterviewerListItem 
        key = {interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        selected={interviewer.name === props.interviewer}
        setinterviewer={props.setinterviewer}  
      />
  )
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className={interviewerListClass}></ul>
    </section>
    
  );
    
}