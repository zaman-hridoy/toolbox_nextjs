import React from "react";
import { Grid, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/Person";
import ExitIcon from "@material-ui/icons/ExitToApp";

function Loggedin({ handleClose, userLogout }) {
  return (
    <div>
      <Grid container alignItems="center" onClick={handleClose}>
        <DashboardIcon color="textPrimary" style={{ fontSize: 20 }} />
        <Typography
          variant="subtitle1"
          color="textPrimary"
          style={{ marginLeft: 10 }}
        >
          Dashboard
        </Typography>
      </Grid>
      <br />
      <Grid container alignItems="center" onClick={handleClose}>
        <UserIcon color="textPrimary" />
        <Typography
          variant="subtitle1"
          color="textPrimary"
          style={{ marginLeft: 10 }}
        >
          Profile
        </Typography>
      </Grid>
      <br />
      <Grid container alignItems="center" onClick={handleClose}>
        <ExitIcon color="textPrimary" />
        <Typography
          variant="subtitle1"
          color="textPrimary"
          style={{ marginLeft: 10 }}
          onClick={userLogout}
        >
          Logout
        </Typography>
      </Grid>
    </div>
  );
}

export default Loggedin;
