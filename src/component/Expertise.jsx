import React, { useState } from "react";


const Expertise = () => {
  const [skills, setSkills] = useState([]);

  const [showSkills, setShowSkills] = useState(false);
  const [edit, setEdit] = useState(false);

  const saveHandler = (e) => {
    e.preventDefault();
    let skillsArray = [];
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value !== "") skillsArray.push(e.target[i].value);
    }
    setSkills(skillsArray);
    setShowSkills(true);
  };

  const deleteHandler = (index) => {
    let skillsArray = [...skills];
    skillsArray.splice(index, 1);
    setSkills(skillsArray);
    setShowSkills(true);
  };

  if (showSkills) {
    return (
      <>
        {skills.length > 0 ? <h1>Expertise</h1> : <></>}
        {skills.map((oneSkill, index) => {
          return <li key={index}>{oneSkill}</li>;
        })}
        <br></br>
        <button
          onClick={() => {
            setEdit(true);
            setShowSkills(false);
          }}
        >
          {skills.length > 0 ? "add / edit skills" : "add new skill"}
        </button>
      </>
    );
  }

  if (edit) {
    return (
      <>
        <h1>Expertise</h1>
        <form onSubmit={saveHandler}>
          {skills?.map((oneSkill, index) => {
            return (
              <div key={index}>
                <input  type="text" defaultValue={oneSkill} />
                <button  onClick={() => deleteHandler(index)}>X</button>
              </div>
            );
          })}
          <input type="text" placeholder="add skill" />
          <br></br>
          <button type="submit">SAVE</button>
        </form>
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          setEdit(true);
        }}
      >
        add skills
      </button>
    </>
  );
};

export default Expertise;
