import {
  Avatar,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import CachedIcon from "@material-ui/icons/Cached";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import PeopleIcon from "@material-ui/icons/People";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "block",
    marginTop: 50,
  },

  footerTopStyle: {
    backgroundColor: "#f6f6f6",
    maxWidth: "100%",
    padding: "20px 0",

    "& .MuiGrid-item": {
      padding: "20px 20px 20px 0px",
    },

    "& .MuiListItemText-root": {
      marginLeft: "25px",

      "& span.MuiTypography-root": {
        fontSize: "16px",
        fontWeight: "600",
        color: theme.palette.text.main,
        textTransform: "uppercase",
      },
    },

    "& .MuiAvatar-root": {
      width: "60px",
      height: "60px",
      backgroundColor: "#fff",
      border: "1px solid transparent",
      borderColor: theme.palette.primary.main,

      "& svg.MuiSvgIcon-root": {
        color: theme.palette.primary.main,
        width: "30px",
        height: "30px",
      },
    },
  },
}));

const FooterTop = () => {
  const classes = useStyle();

  return (
    <div className={`${classes.footerTopStyle} ${classes.root}`}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AirportShuttleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Free Shipping"
                secondary="On all orders over $99.00"
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CachedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="30 Dasy Return"
                secondary="You have 30 days to return"
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MeetingRoomIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Safe Shopping"
                secondary="Payment 100% secure"
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PeopleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Online Support" secondary="Jan 9, 2014" />
            </ListItem>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FooterTop;
