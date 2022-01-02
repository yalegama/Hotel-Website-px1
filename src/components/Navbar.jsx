import { Button, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles=makeStyles((theme)=>({
   navBar:{
       backgroundColor:'#333333',
       height:40,
       alignItems:'center',
       display:'flex',
       [theme.breakpoints.down('md')]:{
           display:'none'
       }
   } ,
   navBarItems:{
       display:'flex',
       alignItems:'center',
       justifyContent:'space-between'
       
   },
   ul:{
       listStyle:'none',
       display:'flex',
       marginLeft:100
       
   },
   li:{
       textDecoration:'none',
       alignItems:'center'
   },
   a:{
       textDecoration:'none',
       color:'white',
       marginLeft:30,
   },
   button:{
       height:30,
       color:'white',
       borderColor:'white',
       marginLeft:50
   },
   icon:{
       marginBottom:-5,
       color:'white',
       marginRight:25
   }
}))

function Navbar() {
    const classes=useStyles();
    return (
        <div>
            <div className={classes.navBar}>
                <div className={classes.navBarItems}>
                    <ul className={classes.ul}>
                        <li className={classes.li}><a className={classes.a} href="">ABOUT</a><ExpandMoreIcon className={classes.icon}/></li>
                        <li className={classes.li}><a className={classes.a} href="">ROOMS & SUITS</a> <ExpandMoreIcon className={classes.icon}/></li>
                        <li className={classes.li}><a className={classes.a} href="">DINING</a> <ExpandMoreIcon className={classes.icon}/></li>
                        <li className={classes.li}><a className={classes.a} href="">EXPERIENCE</a> <ExpandMoreIcon className={classes.icon}/></li>
                        <li className={classes.li}><a className={classes.a} href="">EVENTS</a> <ExpandMoreIcon className={classes.icon}/></li>
                        <li className={classes.li}><a className={classes.a} href="">GALLERY</a></li>
                        <li className={classes.li}><a className={classes.a} href="">OFFERS</a></li>
                        <li className={classes.li}><a className={classes.a} href="">MORE</a> <ExpandMoreIcon className={classes.icon}/></li>
                    </ul>
                    <Button
                    className={classes.button}
                    variant='outlined'
                    >
                        FIND A HOTEL
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
