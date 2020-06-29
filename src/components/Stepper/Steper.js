import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalForm from '../Form/PersonalForm';
import ProffessionalForm from '../Form/ProffessionalForm';
import ConfirmForm from '../Form/ConfirmForm';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(10)
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btn:{
    textAlign:'center',
    marginTop:'20px'
},
Button:{
   
}
}));

function getSteps() {
  return ['Enter Personal Data', 'Enter Proffessional Data', 'Confirm and Finish'];
}



export default function Steper({handleChange , values}) {

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PersonalForm handleChange={handleChange} values={values}/>;
      case 1:
        return <ProffessionalForm/>;
      case 2:
        return <ConfirmForm/>;
      default:
        return 'Wrong Step';
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

 
  const handleNext = (e) => {
    e.preventDefault()
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = (e) => {
    e.preventDefault()
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
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
            <Typography variant='h4' align='center' className={classes.instructions}>Your form has been submitted thanks for your time</Typography>
            <Button onClick={handleReset}>Resubmit</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.btn} >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button className={classes.Button} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}