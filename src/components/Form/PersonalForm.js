import React, {useState} from "react";
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

export default function PersonalForm() {
  const styles = useStyles();
  const [data, setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    field:'',
    proffession:'',
    experties:''

  })

  return (
    <Paper elevation={9} className={styles.root}>
      <Container>
        <FormControl fullWidth variant="filled">
          <TextField
            className={styles.input}
            label="Name"
            type="text"
            required
            onChange={handelChange = (e)=>e.target.value}
          />

          <TextField
            className={styles.input}
            label="Last Name"
            type="text"
            required
          />

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
