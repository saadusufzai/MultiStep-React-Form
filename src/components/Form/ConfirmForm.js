import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { Container, TextField, Paper, FormLabel, Typography, FormGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom:'4%',
  },
  form: {
      padding:'10px'
  },
  row:{
      
      display:'flex',
      justifyContent:'space-between' 
  },
  space:{
      textAlign:'right'
  }
}));

export default function PersonalForm() {
  const styles = useStyles();

  return (
    <Paper elevation='5'  className={styles.root}>
      <Container className={styles.space} >
          <Typography variant={'h6'} align={'center'}  >YOUR INFORMATION</Typography>
          <Typography  align={'center'} variant={"subtitle2"}>Make sure you have entered the correct information</Typography>
            <hr/>
            <div className={styles.row}>
                <Typography color='primary' variant='h6' >First Name:</Typography>
                <Typography  variant='h6'>Saad Aslam</Typography>
            </div>
            <div className={styles.row}>
                <Typography color='primary' variant='h6' >Last Name:</Typography>
                <Typography variant='h6'>Aslam</Typography>
            </div>
            <div className={styles.row}>
                <Typography color='primary' variant='h6' >Email:</Typography>
                <Typography variant='h6'>test@gmial.com</Typography>
            </div>
            <div className={styles.row}>
                <Typography color='primary' variant='h6' >Field:</Typography>
                <Typography variant='h6'>Programmer</Typography>
            </div>
            <div className={styles.row}>
                <Typography color='primary' variant='h6' >Experience:</Typography>
                <Typography variant='h6'>Pro <span>Front End Developer</span></Typography>
            </div>        
      </Container>
    </Paper>
  );
}