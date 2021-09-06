import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
  },
  search: {
    position: "relative",
    borderRadius: "0px 5px 5px 0px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    marginRight: theme.spacing(3),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 9,
  },
  inputRoot: {
    color: theme.palette.text.primary,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 0,
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: 20,
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  arrowStyle: {
    borderRadius: "5px 0px 0px 5px",
    padding: "8px 10px",
    background: "#fff",
    fontSize: 14,
    height: "auto",
    minWidth: 150,
    textAlign: "left",
    "&:hover": {
      background: "#fff",
    },
  },
  paperStyle: {
    padding: "20px",
    top: "55px !important",
    maxWidth: 350,
  },
  textStyle: {
    cursor: "pointer",
    margin: "10px 0",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "all 0.2s ease-in-out",
    },
  },
}));

const searchItems = [
  "All categories",
  "Yamaha",
  "Hero Honda",
  "TVS",
  "Dayang",
  "Walton",
  "Bajaj",
];

function Search() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCategory, setCategoryName] = React.useState("All Categories");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categoryHandler = (categoryName) => {
    setCategoryName(categoryName);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Button
          className={classes.arrowStyle}
          disableRipple
          aria-describedby={id}
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
        >
          {selectedCategory}
        </Button>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </Grid>
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
          <Typography variant="h6" color="textPrimary">
            Search in...
          </Typography>
          <br />
          <Grid container>
            {searchItems?.map((item) => (
              <Grid item xs={6} sm={3} key={item}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.textStyle}
                  onClick={() => categoryHandler(item)}
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </Popover>
    </div>
  );
}

export default Search;
