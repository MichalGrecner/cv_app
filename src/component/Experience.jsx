import React, {useState, useRef} from "react";
import "./Experience.css"

import ExperienceOverview from "./ExperienceOverview";
import ExperienceEdit from "./ExperienceEdit";
import OneExperience from "./OneExperience";

const Experience = () =>{
  const [experience, setExperience] = useState([
    {id: 0, company:"firm1", position:"position1", from:2012, till:2015, desc:"description1"
    }, 
    {id:1, company:"firm2", position:"position2", from:2015, till:2017, desc:"description2"
  }
  ])


  
  console.log(experience);
  return(
    <>
    <h1>experience</h1>
    {experience.map((oneExp => {
      return (
        <OneExperience key={oneExp.id} oneExperience={oneExp} setExperience={setExperience} experience={experience}/>
      )
      
    }))}
    <br></br>
    <button>add new experience</button>

    </>
  )


}


export default Experience