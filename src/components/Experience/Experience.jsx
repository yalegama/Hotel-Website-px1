import { makeStyles } from '@material-ui/core'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const useStyles=makeStyles((theme)=>({
    main:{
        display:'flex',
        flexDirection:'column',
        margin:50
    },
    class:{
        display:'flex'
    },
    class2:{
        display:'flex',
        marginTop:-70
    },
    cards:{
        marginLeft:300
    }
}))

function Experience() {
    const classes=useStyles();
    return (
        <div className={classes.main}>
            <div >
                <h1>Make Your Wish List Your To-Do List</h1>
                <p>Wherever the new year takes you, Hilton is ready to help you discover all the fun things to do.</p>
            </div>
            <div className={classes.cards}>
                <div className={classes.class}>
                <ExperienceCard title="First Pic"/>
                <ExperienceCard title="Second Pic"/>
                <ExperienceCard title="Third Pic"/>
                </div>
                <div className={classes.class2}>
                <ExperienceCard title="Third Pic"/>
                <ExperienceCard title="Third Pic"/>
                <ExperienceCard title="Third Pic"/>
                </div>
            </div>
        </div>
    )
}

export default Experience
