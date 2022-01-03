
import React from 'react'
import "./ExperienceCard.css"



function ExperienceCard({title,urls}) {

    return (
        <div>
            <div  className="experienceCard" >
                <div>
                    <h1 className="h" >'</h1>
                </div>
                <div>
                    <h2 className='title2'>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard



