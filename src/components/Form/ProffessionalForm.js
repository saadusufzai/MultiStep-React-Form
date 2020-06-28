import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {
  Container,
  FormControlLabel,
  TextField,
  Paper,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    margin: "0 auto",
    paddingBottom: "4%",
  },
  input: {
    padding: "10px",
  },
  label:{
      padding:'10px 0 10px 0 '
  }
}));

export default function ProffessionalForm() {
  const styles = useStyles();

  return (
    <Paper elevation="5" className={styles.root}>
      <Container>
        <FormControl fullWidth variant="filled">
          <TextField
            className={styles.input}
            label="Field"
            type="text"
            required
          />

          <TextField
            className={styles.input}
            label="Proffession"
            type="text"
            required
          />
          <FormLabel className={styles.label} >Experience</FormLabel>
          <RadioGroup aria-label="experience" name="experience1">
            <FormControlLabel
              value="Newbie"
              control={<Radio />}
              label="Newbie"
            />
            <FormControlLabel value="Pro" control={<Radio />} label="Pro" />
          </RadioGroup>
          <RadioGroup color="primary" row>
              <FormControlLabel color="secondary"  value='FrontEnd' control={<Radio/>} label='Front End' /> 
              <FormControlLabel value='BackEnd' control={<Radio/>} label='Back End'/> 
              <FormControlLabel value='FullStack' control={<Radio/>} label='Full Stack' /> 
          </RadioGroup>
        </FormControl>
      </Container>
    </Paper>
  );
}
