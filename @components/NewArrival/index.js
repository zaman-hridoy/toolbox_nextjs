import {
  Button,
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

// Custom Styles
const useStyles = makeStyles((theme) => ({
  leftGrid: {
    background: `url(${"https://i.ytimg.com/vi/5u6Yd6qKyJE/maxresdefault.jpg"}) no-repeat center`,
    height: "300px",
  },
  rightGrid: {
    background: `url(${"https://i.ytimg.com/vi/oECI47m8T6A/maxresdefault.jpg"}) no-repeat center`,
    height: "300px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "300px",
  },
  img_bg: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));

const NewArrival = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* ----Left Grid----- */}
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <Paper className={classes.leftGrid}>
            <div className={classes.img_bg}>
              <div>
                <Typography variant="h6" color="primary">
                  New Arrivals
                </Typography>
                <Typography variant="h4" style={{ color: "#fff" }}>
                  FERRARI BRAND AUTO PARTS
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
        {/* ----Right Grid------- */}
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <Paper className={classes.rightGrid}>
            <div className={classes.img_bg}>
              <div>
                <Typography variant="h6" color="primary">
                  Sale 70% Off
                </Typography>
                <Typography variant="h4" style={{ color: "#fff" }}>
                  LEXUS BRAND AUTO PARTS
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewArrival;
