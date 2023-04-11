import React, {useState, useRef, useEffect} from "react";
import "./Experience.css"
import { v4 as uuidv4 } from 'uuid';


import ExperienceOverview from "./ExperienceOverview";
import ExperienceEdit from "./ExperienceEdit";
import OneExperience from "./OneExperience";

const Experience = () =>{
  const [experience, setExperience] = useState([
    {id:uuidv4(), company:"Company-Name", position:"position", from:"from", till:"till", desc:"job description"}
  ])
  const [showExp, setshowExp] = useState(false)
  const [newExp, setNewExp] = useState(true)
  

  const addNewExperience = () =>{
    setExperience([...experience, {id:uuidv4(), company:"Company Name", position:"position", from:"from", till:"till", desc:"job description"}])
    

  }
  
  useEffect(() => {setNewExp(false)})
  console.log(newExp)
  
  console.log(experience);
  if(showExp) {
    return(
      <>
      <h1>experience</h1>
      {experience.map((oneExp => {
        return (
          <OneExperience key={oneExp.id} oneExperience={oneExp} setExperience={setExperience} experience={experience} newExp={newExp} />
        )
        
      }))}
      <br></br>
      <button onClick={addNewExperience}>add new experience</button>
      </>
    )
  }
  return (
      <>
      <h1>experience</h1>
      <button onClick={()=>{setshowExp(true), setNewExp(true)}}>add new experience</button>
      </>

  )

}


export default Experience