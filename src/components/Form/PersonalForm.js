import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { Container, TextField, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    margin: '0 auto',
    paddingBottom:'4%',
  },
  input: {
      padding:'10px'
  },
}));

export default function PersonalForm() {
  const styles = useStyles();

  return (
    <Paper elevation='5'  className={styles.root}>
      <Container >
        <FormControl fullWidth variant="filled">
          <TextField  className={styles.input} label="Name" type="text" required />

          <TextField  className={styles.input} label="Last Name" type="text" required />

          <TextField
            className={styles.input}
            label="Email Address"
            type="Email"
            required
          />
        </FormControl>
      </Container>
    </Paper>
  );
}
