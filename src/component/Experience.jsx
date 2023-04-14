import React, { useState, useEffect } from "react";
import "./Experience.css";
import { v4 as uuidv4 } from "uuid";


import OneExperience from "./OneExperience";

const Experience = () => {
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      company: "Company-Name",
      position: "position",
      from: "from",
      till: "till",
      desc: "job description",
    },
  ]);
  
  const [showExp, setshowExp] = useState(false);
  const [experienceLengthAux, setExperienceLengthAux] = useState(false);

  const addNewExperience = () => {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        company: "Company Name",
        position: "position",
        from: "from",
        till: "till",
        desc: "job description",
      },
    ]);
  };

  //toggles <h>experience<h> based on experience presence
  useEffect(() => {
    if (experience.length === 0 && !experienceLengthAux) {
      setshowExp(false);
      setExperienceLengthAux(true);
    }
    if (experience.length >= 1) setExperienceLengthAux(false);
  });

  if (showExp) {
    return (
      <>
        <h1>experience</h1>
        {experience.map((oneExp) => {
          return (
            <OneExperience
              key={oneExp.id}
              oneExperience={oneExp}
              setExperience={setExperience}
              experience={experience}
            />
          );
        })}
        <br></br>
        <button onClick={addNewExperience}>add new experience</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => {setshowExp(true); if(experience.length ===0){addNewExperience()}}}>add new experience</button>
    </>
  );
};

export default Experience;
