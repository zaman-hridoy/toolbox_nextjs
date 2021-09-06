import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Grid, Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#e8e8e8",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              Pay Online
            </Typography>
            <br />
            <img
              src="https://api.sunnymart.com/img/SSL-Commerz-Pay-With-logo-All-Size.png"
              alt="pay"
              style={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              Information
            </Typography>
            <br />
            <Typography variant="subtitle1" color="textPrimary">
              How to Buy
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              Partnership
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              Contact
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              color="textPrimary"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>
                <PhoneIcon style={{ fontSize: 20, marginRight: 10 }} />
              </span>
              +88 017xxxxxxxx
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>
                <ScheduleIcon style={{ fontSize: 20, marginRight: 10 }} />
              </span>
              M-S 8.00-20.00
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              APP
            </Typography>
            <br />
            <img
              src="https://api.sunnymart.com/img/apple-appstore-badge.png"
              alt="pay"
              style={{
                width: "100%",
              }}
            />
            <img
              src="https://api.sunnymart.com/img/google-play-badge.png"
              alt="pay"
              style={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
