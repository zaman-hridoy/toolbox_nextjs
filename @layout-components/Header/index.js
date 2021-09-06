import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingBasket";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Search from "./Search";
import Account from "./Account";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    "& .MuiToolbar-regular": {
      minHeight: 50,
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appbar}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h6">Toolbox</Typography>
            <div>
              <Search />
            </div>
            <div>
              <Badge
                badgeContent={10}
                style={{ cursor: "pointer", marginRight: 15 }}
              >
                <CartIcon style={{ color: "#fff" }} />
              </Badge>
              <IconButton>
                <NotificationsIcon style={{ color: "#fff" }} />
              </IconButton>
              <Account />
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
