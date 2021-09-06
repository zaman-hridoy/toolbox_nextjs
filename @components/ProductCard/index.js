import {
  Button,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Favorite, Star } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    padding: "10px",
    borderRadius: 8,
    marginBottom: 50,
    "&:hover": {
      boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.25)",
    },
  },
  productImage: {
    width: "100%",
    height: 160,
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },

  productInfo: {
    paddingBottom: "20px",
    marginTop: "10px",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  price: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  discountPrice: {
    color: "#989090",
    textDecoration: "line-through",
    marginLeft: 15,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  },
  iconStyle: {
    width: "50px",
    padding: "5px 0px",
    boxShadow: "none",
    background: theme.palette.primary.main,
    borderRadius: "3px 0px 0px 3px",
    "&:hover": {
      background: theme.palette.primary.main,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.25)",
    },
  },
  btnStyle: {
    width: "100%",
    flex: 1,
    padding: "7px 0px",
    background: theme.palette.primary.main,
    boxShadow: "none",
    borderRadius: "0px 3px 3px 0px",
    borderRadius: 5,
    fontSize: 18,
    "&:hover": {
      background: theme.palette.primary.main,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.25)",
    },
  },
  favIconStyle: {
    position: "absolute",
    top: 5,
    right: 10,
    width: "30px",
    padding: "5px",
    boxShadow: "none",
    background: "transparent",
    borderRadius: "3px 0px 0px 3px",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const ProductCardItem = (props) => {
  const { productDetails } = props;

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.productImage}>
        <a>
          <img src={productDetails.img} alt="product" />
        </a>
        <IconButton
          variant="contained"
          color="primary"
          className={classes.favIconStyle}
        >
          <Favorite color="primary" />
        </IconButton>
      </div>
      <div className={classes.productInfo}>
        <div style={{ width: "100%" }}>
          <Typography
            variant="h6"
            style={{ color: "#000", fontWeight: "bold" }}
          >
            {productDetails.name}
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <Rating name="read-only" value={4} readOnly />
          <br />
          <div className={classes.price}>
            <Typography
              className={classes.discountPrice}
              variant="h6"
              color="textSecondary"
            >
              ${productDetails.price}
            </Typography>

            {productDetails?.discountPrice && (
              <Typography variant="h6" color="textPrimary">
                ${productDetails?.discountPrice}
              </Typography>
            )}
          </div>

          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnStyle}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
