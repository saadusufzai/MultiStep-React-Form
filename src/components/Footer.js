import React from 'react'
import {Toolbar, Typography, Link, BottomNavigation} from '@material-ui/core'
import { makeStyles }  from '@material-ui/core/styles'

export default function Footer() {
    const useStyles = makeStyles((theme)=>({
        root:{
            position:"bottom",
            width:'100%',
            margin:'0 auto',
            marginTop:'20px',
           
            
        },
        text:{
            display:'flex',
            justifyContent:'space-around'
        },
        text1:{
           marginRight:"10px"
        }
    }) )
    
    const styles=useStyles()
    return (
        <BottomNavigation className={styles.root}  >
            <Toolbar className={styles.text}>
                <Typography className={styles.text1} variant={"subtitle1"}>Developed by Saad Aslam &#x2764;	</Typography>
                <Typography variant={"subtitle1"}>
                    <Link href="https://github.com/saadusufzai/MultiStep-React-Form" target='blank' >GitHub Repo</Link>
                </Typography>
            </Toolbar>
        </BottomNavigation>
    )
}
