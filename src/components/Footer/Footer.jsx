import { Box, Button, FormControlLabel, makeStyles, Radio, TextField } from '@material-ui/core'
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


const useStyles=makeStyles((theme)=>({
    custom:{
        display:'flex',
        margin:50,
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column'
        }
    },
    leftSide:{
        width:400
    },
    title:{
        color:'#77328B',
        marginLeft:35
    },
    a:{
        textDecoration:'none',
        color:'#DADAE2',
        
    },
    ul:{
        listStyle:'none'
    },
    li:{
        marginTop:20
    },
    middle:{
        width:400
    },
    leftSide:{
        width:400
    },
    socialIcons:{
        display:'flex'
    },
    ulSocial:{
        display:'flex',
        listStyle:'none',
        marginTop:10,
        marginBottom:100
    },
    icons:{
        fontSize:40,
        margin:10
    },
    paragraph:{
        display:'flex',
        alignItems:'center',
        width:650
    },
    radio:{
        marginTop:-60
    },
    leftSideSecondSectionTitle:{
        width:500
    },
    textField:{
        marginTop:20,
        width:300
    }
}))

function Footer() {
    const classes=useStyles();
    return (
        <div className={classes.custom}>
            <div className={classes.leftSide}>
                <div className={classes.title}>
                <h1>About</h1>
                </div>
                <div className={classes.items}>
                    <ul className={classes.ul}>
                        <li className={classes.li}><a className={classes.a} href="">About Cinnamon Hotels & Resorts</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Media & Accolades</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Gallery</a></li>
                        <li className={classes.li}><a className={classes.a} href="">CSR & Sustainability</a></li>
                        <li className={classes.li}><a className={classes.a} href="">John Keels Group</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Cinnamon Air</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Nature Trails</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Cinnamon Box Office</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Terms & Conditions</a></li>
                        <li className={classes.li}><a className={classes.a} href="">Privacy Statement</a></li>
                    </ul>
                </div>
            </div>
            <div className={classes.middle}>
                <div className={classes.middleFirstSection}>
                    <div className={classes.title}>
                        <h1>Get In Touch</h1>
                    </div>
                    <div className={classes.items}>
                        <ul className={classes.ul}>
                            <li className={classes.li}><a className={classes.a} href="">Know Sri Lanka</a></li>
                            <li className={classes.li}><a className={classes.a} href="">Know Maldives</a></li>
                            <li className={classes.li}><a className={classes.a} href="">Contact Us</a></li>
                            <li className={classes.li}><a className={classes.a} href="">FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.middleSecondSection}>
                    <div className={classes.title}>
                        <h1>Section</h1>
                    </div>
                    <div className={classes.items}>
                        <ul className={classes.ul}>
                            <li className={classes.li}><a className={classes.a} href="">Careers</a></li>
                            <li className={classes.li}><a className={classes.a} href="">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.leftSide}>
                <div className={classes.leftSideFirstSection}>
                    <div className={classes.title}>
                        <h1>Follow Us</h1>
                    </div>
                    <div className={classes.socialIcons}>
                      <ul className={classes.ulSocial}>
                      <li><a className={classes.a} href=""><FacebookIcon className={classes.icons}/></a></li>
                        <li><a className={classes.a} href=""><TwitterIcon className={classes.icons}/></a></li>
                        <li><a className={classes.a} href=""><LinkedInIcon className={classes.icons}/></a></li>
                        <li><a className={classes.a} href=""><InstagramIcon className={classes.icons}/></a></li>
                        <li><a className={classes.a} href=""><YouTubeIcon className={classes.icons}/></a></li>
                      </ul>
                    </div>
                </div>
                <div className={classes.leftSideSecondSection}>
                    <div className={classes.title}>
                        <h1 className={classes.leftSideSecondSectionTitle}>Get Cinnamon in your inbox</h1>
                    </div>
                    <div className={classes.message}>
                        <Box>
                            <TextField className={classes.textField} variant="outlined" />
                            <Button>Send</Button>
                        </Box>
                    </div>
                    <div className={classes.paragraph}>
                    <FormControlLabel className={classes.radio}  control={<Radio />}  />
                    <p>By giving confirmation you explicitly give 
                        consent for us to store and use this information
                        to service your <br /> requests. If you do not consent
                        we will not store any personal information and will be 
                        unable to service your <br /> requests.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer