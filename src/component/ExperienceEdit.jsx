import React, { useRef, useState } from "react";
import OneExperience from "./OneExperience";

const ExperienceEdit = (props) =>{
  const experience = props.exp;
  
  const companyRef = useRef()
  const positionRef = useRef()
  const fromRef = useRef()
  const tillRef = useRef()
  const descRef = useRef()

  const saveHandler = () => {
    
    const newInfo={
      company:companyRef.current.value,
      position:positionRef.current.value,
      from:fromRef.current.value,
      till:tillRef.current.value,
      desc:descRef.current.value,
    }
    console.log(newInfo.company)
    for (const [key, value] of Object.entries(newInfo)){
      if (value==="") newInfo[key]=newInfo[key]
    }
    //old info + newinfo -> zmenit
    props.setExperience(...experience, {newInfo})
  }

  //const {company, position, from, till, desc} = props.experience
  


return (
  <>
  {experience.map(oneExp=>{
    
    return(
      <OneExperience experience={oneExp}/>
    )
  })}

  <button onClick={()=>{props.editToggle(), 
    saveHandler()}}>save</button>
  <button>add new experience</button>
</>
)

}

export default ExperienceEdit