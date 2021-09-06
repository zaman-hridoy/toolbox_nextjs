import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Scrollbars } from "react-custom-scrollbars";

import SingleItem from "./SingleItem";
import BackBtn from "./BackBtn";

const data = [
  {
    id: 1,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg",
    name: "Honda",
  },
  {
    id: 2,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-7.jpeg",
    name: "Hyundai",
  },
  {
    id: 3,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-9.jpeg",
    name: "Maruti Suzuki",
  },
  {
    id: 4,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-4.jpeg",
    name: "Flat",
  },
  {
    id: 5,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-4.jpeg",
    name: "Flat",
  },
  {
    id: 6,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-4.jpeg",
    name: "Flat",
  },
  {
    id: 7,
    imgUrl:
      "https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-4.jpeg",
    name: "Flat",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 20px",
    boxSizing: "border-box",
    height: "100%",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    background: "#fff",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
}));

function SelectManufacturer({ handleNext, handleBack }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackBtn handleBack={handleBack} />
      <input type="text" placeholder="Search..." />
      <br />
      <Scrollbars style={{ height: "260px" }} thumbSize={40}>
        <div style={{ paddingRight: 15 }}>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={6} sm={3}>
                <SingleItem key={item.id} item={item} handleNext={handleNext} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Scrollbars>
    </div>
  );
}

export default SelectManufacturer;
