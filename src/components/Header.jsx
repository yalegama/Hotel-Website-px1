import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import logo from "../images/logo.png"
import PersonIcon from '@material-ui/icons/Person';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles=makeStyles((theme)=>({
    appBar:{
        position:'static'
    },
    toolBar:{
        backgroundColor:'#F4F5F6',
        position:'static',
        justifyContent:'space-between'
    },
    logo:{
        height:40,
        width:100,
        cursor:'pointer',
        marginLeft:150,
        [theme.breakpoints.down('md')]:{
            marginLeft:30
        }

    },
    headerItems:{
        color:'#333333',
        display:'flex',
        alignItems:'center',
        marginRight:200,
        
    },
    ul:{
        textDecoration:'none',
        listStyle:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    li:{
        textDecoration:'none',
        alignItems:'center',
        display:'flex',
        marginLeft:20,
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    },
    a:{
        textDecoration:'none',
        alignItems:'center',
        cursor:'pointer'
    },
    menuIcon:{
        textDecoration:'none',
        color:'black',
        fontSize:"large",
        alignItems:'center',
        marginLeft:200,
        display:'none',
        [theme.breakpoints.down('md')]:{
            display:'block'
        }
    }
}));

function Header() {
    const classes=useStyles();
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.logoArea}>
                        <img className={classes.logo} src={logo} alt="hotels" />
                    </div>
                    <div className={classes.headerItems}>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <PersonIcon/>
                                <a className={classes.a}>Sign In</a>
                            </li>
                            <li className={classes.li}><a className={classes.a}>Join Now</a></li>
                            <li className={classes.li}><a className={classes.a}>Find Reservations</a></li>
                            <li className={classes.li}>
                                <LanguageIcon/>
                                <a className={classes.a}>English</a>
                            </li>
                            <li className={classes.li}><a className={classes.a}>LKR</a></li>
                            <li><a href=""className={classes.menuIcon} ><MenuIcon/></a></li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
