import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import { CustomButton } from "@components";

const useStyles = makeStyles((theme) => ({
  hrStyle: {
    width: 2,
    minHeight: 100,
    background: "#ccc",
    margin: "0px 15px",
    borderRadius: 5,
  },
}));

function WithoutLoggedin({ handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <div style={{ flex: 1 }}>
          <Typography variant="h4" color="textPrimary">
            Welcome!
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Sign in to see your rewards, exclusive offers, saved items and more.
          </Typography>
          <br />
          <CustomButton
            variant="contained"
            color="secondary"
            style={{
              width: "100%",
            }}
            onClick={handleClose}
          >
            Sign In
          </CustomButton>
        </div>
        <div className={classes.hrStyle} />
        <div style={{ flex: 1 }}>
          <Typography variant="h4" color="textPrimary">
            Create An Account
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            style={{ fontWeight: "bold" }}
          >
            Sign up and enjoy these benefits:
          </Typography>
          <br />

          <Typography
            variant="subtitle2"
            color="textPrimary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: 5 }}>
              <CheckIcon color="secondary" />
            </span>
            <span>Exclusive member-only offers</span>
          </Typography>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: 5 }}>
              <CheckIcon color="secondary" />
            </span>
            <span>Rewards for your purchases</span>
          </Typography>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: 5 }}>
              <CheckIcon color="secondary" />
            </span>
            <span>Faster checkout & easy order tracking</span>
          </Typography>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: 5 }}>
              <CheckIcon color="secondary" />
            </span>
            <span>Saved purchase history</span>
          </Typography>
          <br />
          <CustomButton
            variant="contained"
            color="primary"
            style={{
              width: "100%",
              marginBottom: 30,
            }}
            onClick={handleClose}
          >
            Create Account
          </CustomButton>
        </div>
      </Grid>
    </div>
  );
}

export default WithoutLoggedin;
