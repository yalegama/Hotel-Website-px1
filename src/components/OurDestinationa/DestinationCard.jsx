import { makeStyles } from '@material-ui/core'
import React from 'react'
import InformationCard from './InformationCard'

const useStyles=makeStyles((theme)=>({
    destinationCard:{
        display:"flex",
    },
    contry:{
        marginLeft:240,
        marginTop:50,
        position:'absolute',
        [theme.breakpoints.down('md')]:{
            marginLeft:-50,
            height:300
            
        }
    },
    place:{
        marginLeft:400,
        [theme.breakpoints.down('md')]:{
            marginLeft:20,
            height:500,
            width:450
        }
    },
    informationCard:{
        marginTop:50,
        
    },
    infoCard:{
        marginTop:50,
        marginLeft:-100,
        position:'sticky',
        zIndex:1
    }
}))

function DestinationCard() {
    const classes=useStyles()
    return (
        <div>
            <div className={classes.destinationCard}>
                <img className={classes.contry} src="https://www.cinnamonhotels.com/themes/cinnamon/images/maldives.png" alt="" />
                <img className={classes.place} src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/DEST--Dhonveli_715X550-Q81.png" alt="" />
                <div className={classes.infoCard}><InformationCard className={classes.informationCard}/></div>
            </div>
        </div>
    )
}

export default DestinationCard
