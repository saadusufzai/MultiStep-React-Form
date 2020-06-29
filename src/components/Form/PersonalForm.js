import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { Container, TextField, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 20px 0 20px",
    paddingBottom: "4%",
  },
  input: {
    padding: "10px",
  },
}));

export default function PersonalForm({handleChange, values} ) {
  const styles = useStyles();
  // const value = {values:{ firstName, lastName, email,}}

console.log(values.firstName)
  return (
    <Paper elevation={9} className={styles.root}>
      <Container>
        <FormControl fullWidth variant="filled">
          <TextField
            className={styles.input}
            label="First Name"
            type="text"
            name='firstName'
            required
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            
           
          />

          <TextField
            className={styles.input}
            label="Last Name"
            type="text"
            required
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />

          <TextField
            className={styles.input}
            label="Email Address"
            type="Email"
            required

            onChange={handleChange('email')}
            defaultValue={values.email}
          />
        </FormControl>
      </Container>
    </Paper>
  );
}
