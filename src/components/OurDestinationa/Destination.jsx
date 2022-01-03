import { FormControl, makeStyles, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import DestinationCard from './DestinationCard';
import { useState } from 'react'

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
        fontWeight:'bold',

    },
    selectText:{
        marginLeft:-150,
        fontFamily:'Vujahday Script, cursive',
        fontSize:25,
        color:'#2F317C',
    }
}))

function Destination() {

    const [select, setselect] = useState(" ")

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
          value={select}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem className={classes.menuItem} value={select}>
            <div className={classes.selectText}>Habarana Village By Cinnomon</div>
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
