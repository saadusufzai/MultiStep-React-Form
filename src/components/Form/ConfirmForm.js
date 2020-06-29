import React from "react";
import { Container, Paper, Fade, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "4%",
  },
  form: {
    padding: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  space: {
    textAlign: "right",
  },
}));

export default function PersonalForm({ values, step }) {
  const styles = useStyles();

  return (
    <Fade in={step === 2}>
      <Paper elevation="5" className={styles.root}>
        <Container className={styles.space}>
          <Typography variant={"h6"} align={"center"}>
            YOUR INFORMATION
          </Typography>
          <Typography align={"center"} variant={"subtitle2"}>
            Make sure you have entered the correct information
          </Typography>
          <hr />
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              First Name:
            </Typography>
            <Typography variant="h6">{values.firstName}</Typography>
          </div>
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              Last Name:
            </Typography>
            <Typography variant="h6">{values.lastName}</Typography>
          </div>
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              Email:
            </Typography>
            <Typography variant="h6">{values.email}</Typography>
          </div>
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              Field:
            </Typography>
            <Typography variant="h6">{values.field} </Typography>
          </div>
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              Profession:
            </Typography>
            <Typography variant="h6">{values.profession} </Typography>
          </div>
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              Experience:
            </Typography>
            <Typography variant="h6">{values.experience} </Typography>
          </div>
          <div className={styles.row}>
            <Typography color="primary" variant="h6">
              Stage:
            </Typography>
            <Typography variant="h6">{values.stage} </Typography>
          </div>
        </Container>
      </Paper>
    </Fade>
  );
}
