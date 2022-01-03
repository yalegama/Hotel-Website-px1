import { FormControl, makeStyles, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import DestinationCard from './DestinationCard';

const useStyles=makeStyles((theme)=>({
    destination:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        margin:50,
        marginTop:120
    },
    title:{
        color:'#77328B',
        fontFamily:'Vujahday Script, cursive',
        fontWeight:'bold',
        fontSize:50
    },
    formControll:{
    },
    select:{
        margin:20,
        marginLeft:500,
        width:500,
        [theme.breakpoints.down('md')]:{
            marginLeft:45,
            width:400
        }
    },
    menuItem:{
        fontFamily:'Vujahday Script, cursive',
        color:'#2F317C',
        fontSize:20,
        fontWeight:'bold'
    }
}))

function Destination() {
    const classes=useStyles();
    return (
        <div>
            <div className={classes.destination}>
                <h1 className={classes.title}>Our Destinations</h1>
                <FormControl 
                variant='outlined'
                className={classes.formControll}>
        <Select
        className={classes.select}
          value="None"
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={10}>Habarana Village By Cinnomon</MenuItem>
          <MenuItem className={classes.menuItem} value={20}>Cinnamon Velifushi Maldives</MenuItem>
          <MenuItem className={classes.menuItem} value={30}>Cinnamon Hakuraa Huraa Maldives</MenuItem>
        </Select>
      </FormControl>
            </div>
            <DestinationCard/>
        </div>
    )
}

export default Destination
