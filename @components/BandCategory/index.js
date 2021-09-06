import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import FirstStep from "./steps/FirstStep";
import SelectManufacturer from "./steps/SelectManufacturer";
import SelectModel from "./steps/SelectModel";
import SelectFuelType from "./steps/SelectFuelType";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  wrapper: {
    width: 400,
    height: 400,
  },
}));

function SelectByCategory() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const backToFirstStep = () => {
    setActiveStep(0);
  };

  const getActiveStep = (stepNum) => {
    console.log(stepNum);
    switch (stepNum) {
      case 0:
        return <FirstStep handleNext={handleNext} />;
      case 1:
        return (
          <SelectManufacturer handleNext={handleNext} handleBack={handleBack} />
        );
      case 2:
        return <SelectModel handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return (
          <SelectFuelType
            backToFirstStep={backToFirstStep}
            handleBack={handleBack}
          />
        );
      default:
        return <FirstStep handleNext={handleNext} />;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>{getActiveStep(activeStep)}</div>
    </div>
  );
}

export default SelectByCategory;
