import { makeStyles } from '@material-ui/core'
import React from 'react'
import DateRangeIcon from '@material-ui/icons/DateRange';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

const useStyles=makeStyles((theme)=>({

searchBar:{
    position:"sticky",
    marginTop:-150
},

box:{
    backgroundColor:'#9F9D9B',
    height:"9vh",
    width:"80%",
    marginLeft:120,
    m: 1,
    borderColor: 'white',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        display:'none'
    },
    alignItems:'center',
    opacity: 0.9
    
},
itemBox:{
    padding:10,
    backgroundColor:'white',
    width:"100%",
    height:"7vh",
    marginLeft:8,
    marginRight:2,
    display:'flex',
    alignItems:'center'
},
itemBox1:{
    padding:10,
    backgroundColor:'white',
    width:"50%",
    height:"7vh",
    marginLeft:8,
    marginRight:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly',
    cursor:"pointer"
},
itemBox2:{
    padding:10,
    backgroundColor:'white',
    width:"50%",
    height:"7vh",
    marginLeft:1,
    marginRight:2,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
buttonBox:{
    padding:10,
    width:"30%",
    height:"7vh",
    marginLeft:8,
    marginRight:8,
    textAlign:'center',
    alignItems:'center',
    backgroundColor:'#876A20',
    color:'white',
    cursor:'pointer'
},
search:{
    marginTop:5
}
}))

function SearchBar() {
    const classes=useStyles();
    return (
        <div className={classes.searchBar}>
            <div className={classes.box}>
            <div className={classes.itemBox1}>
            <DateRangeIcon/>
            <p>02 Jan 2022</p>
</div>
<div className={classes.itemBox2}>
<p>03 Jan 2022</p>
</div>
                <div className={classes.itemBox}>
                    <PermIdentityIcon/>
                    <p>1 Room, 1 Adult, 0 Children</p>
                </div>
                <div className={classes.itemBox}>
                    <LocalOfferOutlinedIcon/>
                    <p>Special Code</p>
                </div>
                <div className={classes.buttonBox}>
                    <h4 className={classes.search}>Search</h4>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
