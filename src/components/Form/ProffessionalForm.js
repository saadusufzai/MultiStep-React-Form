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
  Fade,
  Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "2%",
    paddingBottom: "1%",
  },
  input: {
    padding: "10px",
  },
  label: {
    padding: "10px 0 10px 0 ",
  },
  lastRow: {
    alignSelf: "center",
    transitions: "ease",
  },
}));

export default function ProffessionalForm({ handleChange, values, step }) {
  const styles = useStyles();

  return (
    <Fade in={step === 1}>
      <Paper elevation="5" className={styles.root}>
        <Container>
          <FormControl fullWidth variant="filled">
            <TextField
              className={styles.input}
              label="Field"
              type="text"
              required
              onChange={handleChange("field")}
              defaultValue={values.field}
            />

            <TextField
              className={styles.input}
              label="Profession"
              type="text"
              required
              onChange={handleChange("profession")}
              defaultValue={values.profession}
            />
            <FormLabel className={styles.label}>Experience</FormLabel>
            <RadioGroup
              onChange={handleChange("experience")}
              defaultValue={values.experience}
              aria-label="experience"
              name="experience1"
            >
              <FormControlLabel
                value="Newbie"
                control={<Radio />}
                label="Newbie"
              />
              <FormControlLabel value="Pro" control={<Radio />} label="Pro" />
            </RadioGroup>
            {values.experience != "" ? (
              <Grow in={values.experience != ""}>
                <RadioGroup
                  className={styles.lastRow}
                  onChange={handleChange("stage")}
                  defaultValue={values.stage}
                  color="primary"
                  row
                >
                  <FormControlLabel
                    value="FrontEnd"
                    control={<Radio color="primary" />}
                    label="Front End"
                  />
                  <FormControlLabel
                    value="BackEnd"
                    control={<Radio color="primary" />}
                    label="Back End"
                  />
                  <FormControlLabel
                    value="FullStack"
                    control={<Radio color="primary" />}
                    label="Full Stack"
                  />
                </RadioGroup>
              </Grow>
            ) : (
              ""
            )}
          </FormControl>
        </Container>
      </Paper>
    </Fade>
  );
}
