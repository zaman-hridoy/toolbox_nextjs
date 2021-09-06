import { makeStyles, Container, Grid } from "@material-ui/core";
import {
  BasicSlider,
  BandCategory,
  Heading,
  ProductCard,
  NewArrival,
} from "@components";

const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  bandSelectWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
  },
}));

const products = [
  {
    id: 1,
    name: "Class Plate with extra ring Class Plate with extra ring",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/3.jpg",
    discountPrice: 40,
  },
  {
    id: 2,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/1.jpg",
  },
  {
    id: 3,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/2.jpg",
    discountPrice: 40,
  },
  {
    id: 4,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/3.jpg",
    discountPrice: 40,
  },
  {
    id: 5,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/5.jpg",
  },
  {
    id: 6,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/2.jpg",
  },
  {
    id: 7,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/6.jpg",
    discountPrice: 40,
  },
  {
    id: 8,
    name: "Class Plate",
    price: 50,
    img: "https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/7.jpg",
    discountPrice: 40,
  },
];

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      {/* ----------Banner slider--------------- */}
      <div className={classes.bannerWrapper}>
        <BasicSlider />
        <div className={classes.bandSelectWrapper}>
          <Container maxWidth="lg" style={{ height: "100%" }}>
            <BandCategory />
          </Container>
        </div>
      </div>

      {/* ----------Best Seller--------------- */}
      <Container maxWidth="lg">
        <div style={{ margin: "40px 0px" }}>
          <Heading intro="TOP SALE IN THE WEEK" heading="BEST SELLER" />
          <Grid container spacing={3}>
            {products.map((productDetails) => (
              <Grid key={productDetails.id} xs={12} sm={4} md={3} item>
                <ProductCard productDetails={productDetails} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>

      {/* ----------New Arrivals--------------- */}
      <div style={{ padding: "60px 0" }}>
        <Container maxWidth="lg">
          <Heading intro="TOP SALE IN THE WEEK" heading="NEW ARRIVALS" />
          <Grid container spacing={3}>
            {products.map((productDetails) => (
              <Grid key={productDetails.id} xs={12} sm={4} md={3} item item>
                <ProductCard productDetails={productDetails} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* ----------New Arrival and off sale----------------*/}
      <NewArrival />
    </div>
  );
}
