import React from "react";
import { Typography, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    boxSizing: "border-box",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    background: "#fff",
    height: 100,
    "& .MuiAvatar-img": {
      objectFit: "contain",
    },
    cursor: "pointer",
  },
}));

function SingleItem({ item, handleNext }) {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={handleNext}>
      <Avatar
        src={item?.imgUrl}
        alt={item.name}
        style={{
          width: "100%",
          height: 50,
        }}
      />
      <div style={{ textAlign: "center" }}>
        <Typography variant="overline" color="textPrimary">
          {item.name}
        </Typography>
      </div>
    </div>
  );
}

export default SingleItem;
