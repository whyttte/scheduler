import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM } from "@testing-library/react";

import Application from "components/Application";


afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];

   it("defaults to Monday and changes the schedule when a new day is selected", () => {
     const { getByText } = render(<Application />);

     return waitForElement(() => getByText("Monday")).then(() => {
       fireEvent.click(getByText("Tuesday"));
       expect(getByText("Leopold Silvers")).toBeInTheDocument();
     });
  
    });

   it("loads data, books an interview and reduces the spots remaining for Monday by 1", () => {
     const { container } = render(<Application />);
     console.log(prettyDOM(container));
   });

   it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container } = render(<Application />);
  
    await waitForElement(() => getByText(container, "Archie Cohen"));
  
    console.log(prettyDOM(container));
  });

});