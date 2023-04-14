import React, { useState, useEffect } from "react";
import "./Education.css";
import { v4 as uuidv4 } from "uuid";


import OneEducation from "./oneEducation";

const Education = () => {
  const [edu, setEdu] = useState([
    {
      id: uuidv4(),
      institution: "institution name",
      field: "field of study",
      finished: "finished",
      desc: "description",
    },
  ]);
  
  const [showEdu, setShowEdu] = useState(false);
  const [eduLengthAux, setEduLengthAux] = useState(false);

  const addNewEdu = () => {
    setEdu([
      ...edu,
      {
        id: uuidv4(),
      institution: "institution name",
      field: "field of study",
      finished: "finished",
      desc: "description",
      },
    ]);
  };

  //toggles <h>Education<h> based on experience presence
  useEffect(() => {
    if (edu.length === 0 && !eduLengthAux) {
      setShowEdu(false);
      setEduLengthAux(true);
    }
    if (edu.length >= 1) setEduLengthAux(false);
  });

  if (showEdu) {
    return (
      <>
        <h1>Education</h1>
        {edu.map((oneEdu) => {
          return (
            <OneEducation
              key={oneEdu.id}
              oneEdu={oneEdu}
              setEdu={setEdu}
              edu={edu}
            />
          );
        })}
        <br></br>
        <button onClick={addNewEdu}>add new education</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => {setShowEdu(true); if(edu.length ===0){addNewEdu()}}}>add new education</button>
    </>
  );
};

export default Education;
