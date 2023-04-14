import React, { useState, useRef } from "react";

const OneEducation = (props) => {
  const instRef = useRef();
  const fieldRef = useRef();
  const finishedRef = useRef();
  const descRef = useRef();

  const [edit, setEdit] = useState(false);
  const [newEdu, setNewEdu] = useState(true);

  //toggles between edit and overview mode
  const editToggle = () => {
    if (edit === false) setEdit(true);
    if (edit === true) setEdit(false);
  };

  const saveHandler = (id) => {
    const newEdu = {
      id: id,
      institution: instRef.current.value,
      field: fieldRef.current.value,
      finished: finishedRef.current.value,
      desc: descRef.current.value,
    };
    //if nothing was typed into inputs, use current values
    for (const [key, value] of Object.entries(newEdu)) {
      if (value === "") newEdu[key] = props.oneEdu[key];
    }

    let eduCopy = [...props.edu];

    const updatedEdu = eduCopy.map((oneEdu) =>
      oneEdu.id === newEdu.id ? { ...newEdu } : oneEdu
    );
    props.setEdu(updatedEdu);
    setNewEdu(false);
  };

  const deleteHandler = (delete_id) => {
    let eduCopy = [...props.edu];

    const filteredEdu = eduCopy.filter((oneEdu) => oneEdu.id !== delete_id);
    props.setEdu(filteredEdu);
  };

  const { id, institution, field, finished, desc } = props.oneEdu;

  //edit existing exp
  if (edit) {
    return (
      <div id="education-edit education">
        <input ref={instRef} type="text" defaultValue={institution}></input>
        <input ref={fieldRef} type="text" defaultValue={field}></input>
        <input ref={finishedRef} type="text" defaultValue={finished}></input>
        <textarea ref={descRef} defaultValue={desc}></textarea>
        <button
          onClick={() => {
            editToggle(), saveHandler(id);
          }}
        >
          SAVE
        </button>
      </div>
    );
  }
  //fill in new exp
  else if (newEdu) {
    return (
      <div id="education-edit education">
        <input ref={instRef} type="text" placeholder={institution}></input>
        <input ref={fieldRef} type="text" placeholder={field}></input>
        <input ref={finishedRef} type="text" placeholder={finished}></input>
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
  } else {
    return (
      <div>
        <li key={id}>
          {institution} {field} {finished} {desc}
        </li>

        <button onClick={editToggle}>EDIT</button>
        <button onClick={() => deleteHandler(id)}>Delete</button>
      </div>
    );
  }
};

export default OneEducation;
