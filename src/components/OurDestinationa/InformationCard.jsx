import { Button, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles=makeStyles((theme)=>({
    informationCardSet:{
        WebkitBoxShadow: "0px 0px 20px 2px #000000",
        width:300,
        height:350,
        backgroundColor:'white'
    },
    information:{
    },
    title:{
        fontFamily:'Vujahday Script, cursive',
        color:'#77328B',
        marginTop:20,
        fontSize:30,
        marginLeft:10
    },
    description:{
        margin:20,
        marginTop:40
    },
    button:{
        margin:20,
        backgroundColor:'#2F317C',
        color:'white'
    }
}))

function InformationCard() {
const classes=useStyles();
    return (
        <div className={classes.informationCardSet}>
            <div className={classes.information}>
                <h2 className={classes.title}>Cinnamon Dhonveli <br /> Maldives</h2>
                <p className={classes.description}>Feel an irrepressible wave of <br /> excitement as you have the best <br /> surfing experience, set to the <br /> backdrop of serenity, and pristine <br /> blue waters.</p>
                <Button className={classes.button}>Discover More</Button>
            </div>
        </div>
    )
}

export default InformationCard
