import { makeStyles } from '@material-ui/core'
import React from 'react'
import Offercard from './Offercard'

const useStyles=makeStyles((theme)=>({
offers:{
    height:550,
    margin:50,
    
    
},
row:{
    display:'flex',
    justifyContent:'space-evenly',
    [theme.breakpoints.down("md")]:{
        display:'block',
        position:'static',
        marginTop:5,
    }
},
Offercard:{
    margin:50,
},
title:{
    textAlign:'center'
}
}))

function Offers() {
    const classes=useStyles();
    return (
        <div className={classes.offers}>
            <div>
                <h1 className={classes.title}>Offers</h1>
                <div className={classes.row}>
                <Offercard  
                subTitle="Rooms & Suits"
                date="05 NOV 2021 - 26 MAR 2022"
                title="Book Early and Save with Flexibility"
                description="Book in advance and save up to 20% with complimentary data changes" 
                price="From LKR 28,408.80 Average Per Night"
                className={classes.Offercard} />
                <Offercard  
                subTitle="Rooms & Suits"
                date="05 NOV 2021 - 26 MAR 2022"
                title="Suit Weekender"
                description="Your weekends colud't get  any suiter! stunning views of Colombo" 
                price="From LKR 38,556.70 Average Per Night"
                className={classes.Offercard} />
                <Offercard  
                subTitle="Rooms & Suits"
                date="05 NOV 2021 - 26 MAR 2022"
                title="Bed & Breakfast"
                description="Start your day with stunning views of Colombo and daily breakfast" 
                price="From LKR 28,408.80 Average Per Night"
                className={classes.Offercard} />
                </div>
            </div>
        </div>
    )
}

export default Offers
