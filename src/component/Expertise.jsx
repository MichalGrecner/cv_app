import React, { useState, useEffect } from "react";
//import "./Education.css";





const Expertise = () => {
  const [skills, setSkills] = useState(["skill 1", "skill 2", "skill 3"]);
  const [skillLenAux, setSkillLenAux] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  

  const addNewSkill = () => {
    console.log("skills.push(input)")
    ;
  };

  //toggles <h>Education<h> based on experience presence
  useEffect(() => {
    if (skills.length === 0 && !setSkillLenAux) {
      //setShowEdu(false);
      setSkillLenAux(true);
    }
    if (skills.length >= 1) setSkillLenAux(false);
  });

  if (showSkills) {
    return (
      <>
        <h1>Expertise</h1>
        {skills.map((oneSkill, index) => {
          return (
            <li key={index}>{oneSkill}</li>
          );
        })}
        <br></br>
        <button onClick={addNewSkill}>add new skill</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => {setShowSkills(true); if(skills.length ===0){addNewSkill()}}}>add new skill</button>
    </>
  );
};

export default Expertise;
