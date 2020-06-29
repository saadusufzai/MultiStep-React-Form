import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonalForm from "../Form/PersonalForm";
import ProffessionalForm from "../Form/ProffessionalForm";
import ConfirmForm from "../Form/ConfirmForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: theme.spacing(7),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btn: {
    textAlign: "center",
    marginTop: "20px",
    
  },
  btnLast: {
   
    marginTop:'20px',
    padding:'10px',
    textAlign: "center",
    width:'100%',
    margin:'0 auto'
    
  },
}));

function getSteps() {
  return [
    "Enter Personal Data",
    "Enter Proffessional Data",
    "Confirm and Finish",
  ];
}

export default function Steper({ handleChange, values , resetState }) {
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalForm
            handleChange={handleChange}
            values={values}
            step={activeStep}
          />
        );
      case 1:
        return (
          <ProffessionalForm
            handleChange={handleChange}
            values={values}
            step={activeStep}
          />
        );
      case 2:
        return (
          <ConfirmForm
            handleChange={handleChange}
            values={values}
            step={activeStep}
          />
        );
      default:
        return "Wrong Step";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    resetState()
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography
              variant="h4"
              align="center"
              className={classes.instructions}
            >
             <br/> FORM SUBMITTED <br/><br/> THANK YOU <br/>
              
            </Typography>
            <Button
              
              className={classes.btnLast}
              onClick={handleReset}
            >
              Resubmit
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.btn}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                className={classes.Button}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continue"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
