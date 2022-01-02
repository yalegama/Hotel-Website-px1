import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles((theme)=>({

searchBar:{
    position:"sticky",
    marginTop:-150
},

box:{
    backgroundColor:'#9F9D9B',
    height:"10vh",
    width:"80%",
    marginLeft:120,
    m: 1,
    borderColor: 'white',
    display:'flex',
    alignItems:'center',
    opacity: 0.9
    
},
itemBox:{
    padding:10,
    backgroundColor:'white',
    width:"100%",
    height:"8vh",
    marginLeft:8,
    marginRight:2
},
buttonBox:{
    padding:10,
    backgroundColor:'white',
    width:"30%",
    height:"8vh",
    marginLeft:8,
    marginRight:8
}
}))

function SearchBar() {
    const classes=useStyles();
    return (
        <div className={classes.searchBar}>
            <div className={classes.box}>
                <div className={classes.itemBox}>

                </div>
                <div className={classes.itemBox}>

                </div>
                <div className={classes.itemBox}>

                </div>
                <div className={classes.buttonBox}>

                </div>
            </div>
        </div>
    )
}

export default SearchBar
