import React, { useState, useRef } from "react";

const OneExperience = (props) => {
  const companyRef = useRef();
  const positionRef = useRef();
  const fromRef = useRef();
  const tillRef = useRef();
  const descRef = useRef();

  const [edit, setEdit] = useState(false);
  const [newExp, setNewExp] = useState(true)

  //toggles between edit and overview mode
  const editToggle = () => {
    if (edit === false) setEdit(true);
    if (edit === true) setEdit(false);
  };

  const saveHandler = (id) => {
    const newInfo = {
      id: id,
      company: companyRef.current.value,
      position: positionRef.current.value,
      from: fromRef.current.value,
      till: tillRef.current.value,
      desc: descRef.current.value,
    };
    //if nothing was typed into inputs, use current values
    for (const [key, value] of Object.entries(newInfo)) {
      if (value === "") newInfo[key] = props.oneExperience[key];
    }

    let experienceCopy = [...props.experience];

    const updatedExperience = experienceCopy.map(oneExp => oneExp.id===newInfo.id?{...newInfo}:oneExp)
    props.setExperience(updatedExperience);
    setNewExp(false)

  };

  const deleteHandler = (delete_id) => {
    let experienceCopy = [...props.experience];

    const filteredExperience = experienceCopy.filter(oneExp => oneExp.id!==delete_id)
    props.setExperience(filteredExperience);

  }

  const { id, company, position, from, till, desc } = props.oneExperience;


  
//edit existing exp
  if (edit) {
    return(
      <div id="experience-edit experience">
      <input ref={companyRef} type="text" defaultValue={company}></input>
      <input ref={positionRef} type="text" defaultValue={position}></input>
      <input ref={fromRef} type="text" defaultValue={from}></input>
      <input ref={tillRef} type="text" defaultValue={till}></input>
      <textarea ref={descRef} defaultValue={desc}></textarea>
      <button
        onClick={() => {
          editToggle(), saveHandler(id);
        }}
      >
        SAVE
      </button>
    </div>


    )
  }
  //fill in new exp
  else if (newExp) {
    return (
      <div id="experience-edit experience">
        <input ref={companyRef} type="text" placeholder={company}></input>
        <input ref={positionRef} type="text" placeholder={position}></input>
        <input ref={fromRef} type="text" placeholder={from}></input>
        <input ref={tillRef} type="text" placeholder={till}></input>
        <textarea ref={descRef} placeholder={desc}></textarea>
        <button
          onClick={() => {
             saveHandler(id);
          }}
        >
          SAVE
        </button>
      </div>
    );
  }
  
  else { return (
    <div>
      <li key={id}>
        {company} {position} {from}-{till} {desc}
      </li>

      <button onClick={editToggle}>EDIT</button>
      <button onClick={()=>deleteHandler(id)}>Delete</button>
    </div>
  )
  };
  
};

export default OneExperience;
