import React from "react";
import DropdownIcon from "@material-ui/icons/ArrowDropDown";
import StarIcon from "@material-ui/icons/Star";
import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { CustomButton } from "@components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 20px",
    boxSizing: "border-box",
    height: "100%",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    background: "#fff",
  },
  selectBox: {
    width: "100%",
    height: 40,
    border: "1px solid #ccc",
    borderRadius: 5,
    padding: "0px 15px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
  },
  arrowIcon: {
    position: "absolute",
    top: 8,
    right: 0,
  },
  reviewBtn: {
    background: "transparent",
    color: "green",
    fontSize: 24,
    "&:hover": {
      background: "transparent",
    },
    "&:active": {
      background: "transparent",
    },
  },
  hrStyle: {
    width: 1.5,
    height: 60,
    background: "#ccc",
    marginTop: 15,
  },
}));

function FirstStep({ handleNext }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ textStyle: "center" }}>
        Experience the best bike service in Bangladesh.
      </Typography>
      <br />
      <Typography variant="h6">Get instant quotes for your service.</Typography>
      <br />
      <div className={classes.selectBox} onClick={handleNext}>
        <Typography variant="h6" style={{ textTransform: "uppercase" }} noWrap>
          select item name
        </Typography>
        <div className={classes.arrowIcon}>
          <DropdownIcon />
        </div>
      </div>
      <br />
      {/* <CustomButton
                style={{
                    width: '100%',
                    borderRadius: 5
                }}
            >
                Check price for free
            </CustomButton> */}
      <br />
      <Grid container alignItems="center" justify="space-evenly">
        <div>
          <Button
            startIcon={<StarIcon style={{ color: "green", fontSize: 30 }} />}
            className={classes.reviewBtn}
            disableRipple
          >
            4.7/<sub>5</sub>
          </Button>
          <div style={{ textAlign: "center" }}>
            <Typography variant="caption">
              Based on 17000+ <br />
              Reviews
            </Typography>
          </div>
        </div>
        <div className={classes.hrStyle}></div>
        <div style={{ marginLeft: 10 }}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5">25,50,000+</Typography>
            <Typography variant="caption">
              Happy <br />
              Customers
            </Typography>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default FirstStep;
