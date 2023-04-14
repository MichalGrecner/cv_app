import React from "react";
import { useState, useRef } from "react";
import "./General.css";

const General = () => {
  const [genInfo, setGenInfo] = useState({
    firstName: "Name",
    lastName: "Surname",
    title: "role",
    infoText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ipsam, reiciendis provident earum recusandae quibusdam voluptatem accusantium!",
  });

  const [edit, setEdit] = useState(true);
  const [initial, setInital] = useState(true);

  const { firstName, lastName, title, infoText } = genInfo;

  const firstNmRef = useRef();
  const lastNmRef = useRef();
  const titleRef = useRef();
  const infoRef = useRef();

  const editToggle = () => {
    if (edit === false) setEdit(true);
    if (edit === true) setEdit(false);
  };
  const saveHandler = () => {
    const newInfo = {
      firstName: firstNmRef.current.value,
      lastName: lastNmRef.current.value,
      title: titleRef.current.value,
      infoText: infoRef.current.value,
    };

    for (const [key, value] of Object.entries(newInfo)) {
      if (value === "") newInfo[key] = genInfo[key];
    }
    setGenInfo(newInfo);
    setInital(false);
  };

  if (initial) {
    return (
      <div id="general">
        <input ref={firstNmRef} type="text" placeholder={firstName}></input>
        <input ref={lastNmRef} type="text" placeholder={lastName}></input>
        <input ref={titleRef} type="text" placeholder={title}></input>
        <textarea ref={infoRef} placeholder={infoText}></textarea>
        <button
          onClick={() => {
            editToggle(), saveHandler();
          }}
        >
          Save
        </button>
      </div>
    );
  } else if (edit) {
    return (
      <div id="general">
        <input ref={firstNmRef} type="text" defaultValue={firstName}></input>
        <input ref={lastNmRef} type="text" defaultValue={lastName}></input>
        <input ref={titleRef} type="text" defaultValue={title}></input>
        <textarea ref={infoRef} defaultValue={infoText}></textarea>
        <button
          onClick={() => {
            editToggle(), saveHandler();
          }}
        >
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div id="general">
        <h1>
          {firstName} {lastName}
        </h1>
        <h3>{title}</h3>
        <p>{infoText}</p>
        <button onClick={editToggle}>EDIT</button>
      </div>
    );
  }
};
export default General;
