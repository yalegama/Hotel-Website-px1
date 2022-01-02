import { makeStyles } from '@material-ui/core'
import React from 'react'
import Offercard from './Offercard'

const useStyles=makeStyles((theme)=>({
offers:{
    height:450,
    margin:50,
},
row:{
    display:'flex'
},
Offercard:{
}
}))

function Offers() {
    const classes=useStyles();
    return (
        <div className={classes.offers}>
            <div>
                <h1>Offers</h1>
                <div className={classes.row}>
                <Offercard className={classes.Offercard} />
                <Offercard/>
                <Offercard/>
                </div>
            </div>
        </div>
    )
}

export default Offers
