import React from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  backBtn: {
    background: "transparent",
    color: "#333",
    width: 0,
    paddingLeft: 8,
    "&:hover": {
      background: "transparent",
    },
    "&:active": {
      background: "transparent",
    },
  },
}));

function BackBtn({ handleBack }) {
  const classes = useStyles();
  return (
    <IconButton className={classes.backBtn} disableRipple onClick={handleBack}>
      <ArrowBack style={{ color: "#333", fontSize: 24 }} />
    </IconButton>
  );
}

export default BackBtn;
