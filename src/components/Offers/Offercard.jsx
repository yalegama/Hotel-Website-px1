import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import "./OfferCard.css"

const useStyles=makeStyles((theme)=>({
    cardBox:{
    },
card:{
    height:200,
    color:'black',
    width:360,
    margin:50,
},

button:{
    color:'#A68A3A',
    borderColor:'#A68A3A',
    marginTop:20,
    marginLeft:80
},
image:{
    height:'20vh' ,
      width:"20vw",
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundImage:`url("https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/DEST--Dhonveli_715X550-Q81.png")`
},
subTitle:{
    marginLeft:100
},
date:{

    marginBottom:10,
    marginLeft:50
},
title:{
    marginTop:10,
    marginBottom:10
},
description:{
    marginBottom:50
},
price:{
    marginLeft:-18
},

}))

function Offercard() {
    const classes=useStyles();
    return (
        <div className={classes.cardBox}>
            <div className={classes.card}  >
                <div className={classes.image}>

                </div>
                <div className={classes.subTitle}>
                    <h5>Rooms & Suits</h5>
                </div>
                <div className={classes.date}>
                    <p>05 NOV 2021 - 26 MAR 2022</p>
                </div>
                <div className={classes.title}>
                    <h3>Book Early and Save with Flexibility</h3>
                </div>
                <div className={classes.description}>
                    <p>Book in advance and save up to 20% with complimentary data changes</p>
                </div>
                <div className={classes.price}>
                    <h3>From LKR 28,408.80 Average Per Night</h3>
                </div>
                <div>
                    <Button
                    className={classes.button}
                    variant='outlined'
                    > View Details</Button>
                </div>
            </div>
        </div>
    )
}

export default Offercard
