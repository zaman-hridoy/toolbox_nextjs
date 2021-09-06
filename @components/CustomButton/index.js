import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    borderRadius: 3,
    color: "#fff",
    fontWeight: 500,
  },
}));

function CustomButton({ children, className, ...rest }) {
  const classes = useStyles();
  return (
    <Button className={clsx([classes.buttonStyle, className])} {...rest}>
      {children}
    </Button>
  );
}

export default CustomButton;
