import React from "react";
import { useState, useRef } from "react";

const General =()=>{
  const [genInfo, setGenInfo] = useState
  ({firstName:"Name", lastName:"Surname", title: "role", infoText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ipsam, reiciendis provident earum recusandae quibusdam voluptatem accusantium!"})

  const [edit, setEdit] = useState(false)

  const {firstName, lastName, title, infoText} = genInfo
  
  const firstNmRef = useRef()
  const lastNmRef = useRef()
  const titleRef = useRef()
  const infoRef = useRef()

  const editToggle =() =>{
    if(edit===false) setEdit(true)
    if(edit===true) setEdit(false)
  }
  const confirmHandler =()=>{

    setGenInfo({
      firstName:firstNmRef.current.value,
      lastName:lastNmRef.current.value,
      title:titleRef.current.value,
      infoText:infoRef.current.value,
    })
      
    
  }
  if(edit) {
    return (
      <>
      <input ref={firstNmRef} type="text" placeholder={firstName}></input>
      <input ref={lastNmRef} type="text" placeholder={lastName}></input>
      <input ref={titleRef} type="text" placeholder={title}></input>
      <textarea ref={infoRef} placeholder={infoText}></textarea>
      <button onClick={()=>{editToggle(),confirmHandler()}}>Confirm</button>
    </>
    )
  }
  return(
    <>
      <h1>{firstName} {lastName}</h1>
      <h3>{title}</h3>
      <p>{infoText}</p>
      <button onClick={editToggle}>EDIT</button>
    </>
  )



}
 export default General