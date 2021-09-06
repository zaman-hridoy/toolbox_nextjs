import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";

import WithoutLoggedin from "./components/WithoutLoggedin";
import Loggedin from "./components/Loggedin";

const useStyles = makeStyles((theme) => ({
  btnStyle: {
    background: "none",
    marginRight: 30,
    "&:hover": {
      background: "none",
    },
  },
  paperStyle: {
    padding: "15px 40px",
    width: 650,
    top: "55px !important",
  },
  paperStyleWithSmallWidth: {
    padding: "15px 20px",
    width: 150,
    top: "55px !important",
  },
}));

function Account({ currentUser, userLogout }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Button
        startIcon={
          <Avatar src="" alt="user" style={{ width: 25, height: 25 }} />
        }
        className={classes.btnStyle}
        disableRipple
        aria-describedby={id}
        onClick={handleClick}
      >
        {currentUser ? currentUser?.name : "Account"}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{
          paper: currentUser
            ? classes.paperStyleWithSmallWidth
            : classes.paperStyle,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {currentUser ? (
          <Loggedin handleClose={handleClose} userLogout={userLogout} />
        ) : (
          <WithoutLoggedin handleClose={handleClose} />
        )}
      </Popover>
    </React.Fragment>
  );
}

export default Account;
