import React from "react";
import { useState, useRef } from "react";
import "./General.css"

const Contact =()=>{
  const [contInfo, setContInfo] = useState
  ({phone:"phone", email:"email", address: "address"})

  const [edit, setEdit] = useState(true)
  const [initial, setInital] = useState(true)

  const {phone, email, address} = contInfo
  
  const phoneRef = useRef()
  const emailRef = useRef()
  const addressRef = useRef()
  
  
  const editToggle =() =>{
    if(edit===false) setEdit(true)
    if(edit===true) setEdit(false)
  }
  const saveHandler =()=>{
    const newCont={
      phone:phoneRef.current.value,
      email:emailRef.current.value,
      address:addressRef.current.value
    }

    for (const [key, value] of Object.entries(newCont)){
      if (value==="") newCont[key]=contInfo[key]
    }
    setContInfo(newCont)
    setInital(false)
    
  }


  
  if(initial) {
    return (
      <div id="contact">
      <input ref={phoneRef} type="text" placeholder={phone}></input>
      <input ref={emailRef} type="text" placeholder={email}></input>
      
      <textarea ref={addressRef} placeholder={address}></textarea>
      <button onClick={()=>{editToggle(), saveHandler()}}>Save</button>
    </div>
    )
  }
  else if(edit) {
    return( 
    <div id="contact">
      <input ref={phoneRef} type="text" defaultValue={phone}></input>
      <input ref={emailRef} type="text" defaultValue={email}></input>
      
      <textarea ref={addressRef} defaultValue={address}></textarea>
      <button onClick={()=>{editToggle(), saveHandler()}}>Save</button>
    </div>
    )

  }
  else {
    return(
      <div id="contact">
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <button onClick={editToggle}>EDIT</button>
      </div>
    )
  }



}
 export default Contact