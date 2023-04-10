import React, { useState, useRef } from "react";

const ExperienceOverview = (props) => {
  const experience = props.exp;
  console.log(experience)



  const [edit, setEdit] = useState(false)

  const editToggle =() =>{
    if(edit===false) setEdit(true)
    if(edit===true) setEdit(false)
  }


  return (
    <>
      {experience.map((oneInfo) => {
        const { company, position, from, till, desc } = oneInfo;
        return (
          <>
          <p>
            {company} {position} {from}-{till} {desc}
          </p>
          <button onClick={props.editToggle}>EDIT</button>
          </>
        );
      })}
    </>
  );
};

export default ExperienceOverview;
