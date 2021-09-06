import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Scrollbars } from "react-custom-scrollbars";

import SingleItem from "./SingleItem";
import BackBtn from "./BackBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 20px",
    height: "100%",
    boxSizing: "border-box",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    background: "#fff",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
}));

const data = [
  {
    id: 1,
    imgUrl: "https://gomechanic.in/icons/fuel/PETROL.svg",
    name: "Petrol",
  },
  {
    id: 1,
    imgUrl: "https://gomechanic.in/icons/fuel/CNG.svg",
    name: "CNG",
  },
  {
    id: 1,
    imgUrl: "https://gomechanic.in/icons/fuel/DIESEL.svg",
    name: "Diesel",
  },
];

function SelectFuelType({ backToFirstStep, handleBack }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackBtn handleBack={handleBack} />
      <input type="text" placeholder="Search" />
      <br />
      <Scrollbars style={{ height: "260px" }} thumbSize={40}>
        <div style={{ paddingRight: 15 }}>
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid item xs={3}>
                <SingleItem
                  key={item.id}
                  item={item}
                  handleNext={backToFirstStep}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Scrollbars>
    </div>
  );
}

export default SelectFuelType;
