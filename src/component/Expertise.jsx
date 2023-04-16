import React, { useState, useEffect, useRef } from "react";
//import "./Education.css";

const Expertise = () => {
  const [skills, setSkills] = useState(["skill 1", "skill 2", "skill 3"]);
  const [skillLenAux, setSkillLenAux] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const [edit, setEdit] = useState(false);
  const [newSkill, setNewSkill] = useState(false)

  const editToggle = () => {
    if (edit === false) setEdit(true);
    if (edit === true) setEdit(false);
  };
  

  const addNewSkill = () => {

    const skillInput = useRef()
    setShowSkills(false)
    setEdit(true)
    
  };

  const saveHandler = (e) => {
    e.preventDefault();
   
    let skillsArray=[]
    for (let i =0; i < e.target.length-1;i++){
      
      skillsArray.push(e.target[i].value)
    }
    setSkills(skillsArray)
    setShowSkills(true)



  }

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
        <button onClick={()=>{setEdit(true); setShowSkills(false)}}>EDIT</button>
      </>
    );
  }

  if (edit) {
    return (
      <>
        <h1>Expertise</h1>
        <form onSubmit={saveHandler}>
        {skills.map((oneSkill, index) => {
          return (
            <input key={index} type="text" defaultValue={oneSkill} />
          );
        })}
        {newSkill? (
          <input type="text" placeholder="example" />
        ): <br></br> }
        <button type = "submit">SAVE</button>
        </form>
        <br></br>
        <button onClick={ () => {if(skills.length ===0){addNewSkill()}; setNewSkill(true)}}>add new skill</button>
        

      </>
    );
  }

  return (
    <>
      <button onClick={() => {setEdit(true); }}>add new skill</button>
    </>
  );
};

export default Expertise;
