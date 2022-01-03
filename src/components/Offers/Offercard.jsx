import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import "./OfferCard.css"

const useStyles=makeStyles((theme)=>({
    cardBox:{
       WebkitBoxShadow: "0px 0px 3px 0px #000000",
       height:520,
       width:400,
       marginTop:50,
       alignItems:'center',
       [theme.breakpoints.down('md')]:{
           marginLeft:-30,
           height:400
       }
    },
card:{
    height:200,
    color:'black',
    width:360,
    margin:50,
    [theme.breakpoints.down('md')]:{
       
    }

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
      backgroundImage:`url("https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/DEST--Dhonveli_715X550-Q81.png")`,
      [theme.breakpoints.down('md')]:{
        height:'15vh' ,
        width:"40vw",
        marginLeft:50 
    }
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

function Offercard({subTitle,date,title,description,price}) {
    const classes=useStyles();
    return (
        <div className={classes.cardBox}>
            <div className={classes.card}  >
                <div className={classes.image}>

                </div>
                <div className={classes.subTitle}>
                    <h5>{subTitle}</h5>
                </div>
                <div className={classes.date}>
                    <p>{date}</p>
                </div>
                <div className={classes.title}>
                    <h3>{title}</h3>
                </div>
                <div className={classes.description}>
                    <p>{description}</p>
                </div>
                <div className={classes.price}>
                    <h3>{price}</h3>
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
