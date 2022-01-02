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
        color:'#77328B'
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Habarana Village By Cinnomon</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </div>
            <DestinationCard/>
        </div>
    )
}

export default Destination
