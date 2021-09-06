import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Button, Grid, Typography } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { CustomButton } from "@components";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 20,
  },
  paperStyle: {
    padding: "15px",
    width: 250,
    top: "66px !important",
  },
  categoryItem: {
    display: "flex",
    alignItems: "center",
  },
}));

const searchItems = [
  {
    name: "All categories",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1583056098-1521922707.png",
  },
  {
    name: "Baby Care",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1583056430-371217535.png",
  },
  {
    name: "Pet Care",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1605337363-655540545.png",
  },
  {
    name: "Food",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1605337363-655540545.png",
  },
  {
    name: "Home & Cleaning",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1605338950-1479424401.png",
  },
  {
    name: "Office Stationary",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1583058572-726843169.png",
  },
  {
    name: "Beauty & Health",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1583060401-1398090843.png",
  },
  {
    name: "Cooking",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1604572445-2144307882.png",
  },
  {
    name: "Home Appliances",
    image:
      "https://api.sunnymart.com/catalog/category/orginal/1604571978-467269366.jpg",
  },
];

function Category() {
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
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        aria-describedby={id}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{
          paper: classes.paperStyle,
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
        <div>
          <Grid container spacing={1}>
            {searchItems?.map((item) => (
              <Grid
                key={item.name}
                item
                xs={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <div className={classes.categoryItem}>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    variant="square"
                    style={{
                      borderRadius: 5,
                      width: 30,
                      height: 30,
                      marginRight: 10,
                    }}
                  />
                  <Typography variant="subtitle1" color="textPrimary">
                    {item.name}
                  </Typography>
                </div>
                <KeyboardArrowRightIcon color="textPrimary" />
              </Grid>
            ))}

            <Grid item xs={12}>
              <CustomButton
                variant="contained"
                color="secondary"
                style={{
                  width: "100%",
                }}
              >
                All Categories
              </CustomButton>
            </Grid>
          </Grid>
        </div>
      </Popover>
    </React.Fragment>
  );
}

export default Category;
