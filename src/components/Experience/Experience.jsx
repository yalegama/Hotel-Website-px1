import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const useStyles=makeStyles((theme)=>({
    main:{
        display:'flex',
        flexDirection:'column',
        margin:50
    },
    title:{
        color:'#104C97',
        marginLeft:150,
        marginTop:40,
        marginBottom:20,
        [theme.breakpoints.down("md")]:{
            marginLeft:5
        }
    },
    description:{
        marginLeft:150,
        marginBottom:20,
        [theme.breakpoints.down("md")]:{
            marginLeft:5
        }
    },
    class:{
        display:'flex'
    },
    class2:{
        display:'flex',
        marginTop:-70
    },
    cards:{
        marginLeft:150,
        [theme.breakpoints.down("md")]:{
            marginLeft:5
        }
    },
    grid:{
    },
    gridItems:{
        display:'flex',
        [theme.breakpoints.down("sm")]:{
            display:'block'
        }
    }
}))

function Experience() {
    const classes=useStyles();
    return (
        <div className={classes.main}>
            <div >
                <h1 className={classes.title}>Make Your Wish List Your To-Do List</h1>
                <p className={classes.description}>Wherever the new year takes you, Hilton is ready to help you discover all the fun things to do.</p>
            </div>
            <div className={classes.cards}>
               <Grid  className={classes.grid}>
                   <div><Grid item className={classes.gridItems}>
                   <ExperienceCard title="WHAT TO EXPECT DURING YOUR STAY"/>
                   <ExperienceCard title="MULTIPLY YOUR POINTS"/>
                   <ExperienceCard title="EARN UP 130K POINTS"/>
                   </Grid>
                   </div>
                   <div>
                   <Grid className={classes.gridItems} item>
                   <ExperienceCard title="SEE WHERE YOUR POINTS CAN TAKE YOU"/>
                   <ExperienceCard title="A NIGHT ON US"/>
                   <ExperienceCard title="EARN 2,500 POINTS WITHOUT LIMITS"/>
                   </Grid>
                   </div>
               </Grid>
            </div>
        </div>
    )
}

export default Experience
