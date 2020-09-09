import React from "react";

import InterviewerListItem from "components/InterviewerListItem"

import "components/InterviewerList.scss";

// import classNames from "classnames";


export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => 
    <InterviewerListItem 
        key = {interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        // selected={interviewer.id === props.interviewer}
        // setInterviewer={(event) => props.setInterviewer(interviewer.id)}  
        selected={interviewer.id === props.value}
        setInterviewer={() => props.setInterviewer(interviewer.id)}  
      />
  // const interviewers = []
  )
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
    
  );
    
}
