
import React from 'react'
import "./ExperienceCard.css"



function ExperienceCard({title,urls}) {
    
    return (
        <div>
            <div  className="experienceCard" >
                <div>
                    <h1 className='h' >{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard



